import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../database/utils.js';
export class AuthService {
    SALT_ROUNDS = 12;
    ACCESS_TOKEN_EXPIRES_IN = '15m';
    REFRESH_TOKEN_EXPIRES_IN = '7d';
    async hashPassword(password) {
        return bcrypt.hash(password, this.SALT_ROUNDS);
    }
    async verifyPassword(password, hash) {
        return bcrypt.compare(password, hash);
    }
    generateTokens(userId) {
        const jwtSecret = process.env.JWT_SECRET;
        const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET || jwtSecret;
        const accessToken = jwt.sign({ userId, type: 'access' }, jwtSecret, { expiresIn: this.ACCESS_TOKEN_EXPIRES_IN });
        const refreshToken = jwt.sign({ userId, type: 'refresh' }, jwtRefreshSecret, { expiresIn: this.REFRESH_TOKEN_EXPIRES_IN });
        return { accessToken, refreshToken };
    }
    validateAccessToken(token) {
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            if (payload.type !== 'access') {
                return null;
            }
            return payload;
        }
        catch {
            return null;
        }
    }
    async validateRefreshToken(token) {
        try {
            const jwtSecret = process.env.JWT_SECRET;
            const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET || jwtSecret;
            const payload = jwt.verify(token, jwtRefreshSecret);
            if (payload.type !== 'refresh') {
                return null;
            }
            const storedToken = await prisma.refreshToken.findUnique({
                where: { token },
                include: { user: true }
            });
            if (!storedToken || storedToken.expiresAt < new Date()) {
                if (storedToken) {
                    await this.revokeRefreshToken(token);
                }
                return null;
            }
            return storedToken.user;
        }
        catch {
            return null;
        }
    }
    async storeRefreshToken(userId, token) {
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        await prisma.refreshToken.create({
            data: {
                token,
                userId,
                expiresAt
            }
        });
    }
    async revokeRefreshToken(token) {
        await prisma.refreshToken.deleteMany({
            where: { token }
        });
    }
    async revokeAllRefreshTokens(userId) {
        await prisma.refreshToken.deleteMany({
            where: { userId }
        });
    }
    async cleanupExpiredTokens() {
        await prisma.refreshToken.deleteMany({
            where: {
                expiresAt: {
                    lt: new Date()
                }
            }
        });
    }
    async registerUser(email, username, password) {
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email },
                    { username }
                ]
            }
        });
        if (existingUser) {
            if (existingUser.email === email) {
                throw new Error('Email already registered');
            }
            if (existingUser.username === username) {
                throw new Error('Username already taken');
            }
        }
        const passwordHash = await this.hashPassword(password);
        const user = await prisma.user.create({
            data: {
                email,
                username,
                passwordHash
            }
        });
        return user;
    }
    async authenticateUser(email, password) {
        const user = await prisma.user.findUnique({
            where: { email }
        });
        if (!user || !user.isActive) {
            return null;
        }
        const isPasswordValid = await this.verifyPassword(password, user.passwordHash);
        if (!isPasswordValid) {
            return null;
        }
        await prisma.user.update({
            where: { id: user.id },
            data: { lastLoginAt: new Date() }
        });
        return user;
    }
    async getUserById(userId) {
        return prisma.user.findUnique({
            where: { id: userId, isActive: true }
        });
    }
    userToAuthUser(user) {
        return {
            id: user.id,
            email: user.email,
            username: user.username
        };
    }
}
export const authService = new AuthService();
