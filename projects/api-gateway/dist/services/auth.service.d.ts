import type { User } from '../../generated/prisma-client/index.js';
export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}
export interface AuthUser {
    id: string;
    email: string;
    username: string;
}
export interface JWTPayload {
    userId: string;
    type: 'access' | 'refresh';
    iat?: number;
    exp?: number;
}
export declare class AuthService {
    private readonly SALT_ROUNDS;
    private readonly ACCESS_TOKEN_EXPIRES_IN;
    private readonly REFRESH_TOKEN_EXPIRES_IN;
    hashPassword(password: string): Promise<string>;
    verifyPassword(password: string, hash: string): Promise<boolean>;
    generateTokens(userId: string): AuthTokens;
    validateAccessToken(token: string): JWTPayload | null;
    validateRefreshToken(token: string): Promise<User | null>;
    storeRefreshToken(userId: string, token: string): Promise<void>;
    revokeRefreshToken(token: string): Promise<void>;
    revokeAllRefreshTokens(userId: string): Promise<void>;
    cleanupExpiredTokens(): Promise<void>;
    registerUser(email: string, username: string, password: string): Promise<User>;
    authenticateUser(email: string, password: string): Promise<User | null>;
    getUserById(userId: string): Promise<User | null>;
    userToAuthUser(user: User): AuthUser;
}
export declare const authService: AuthService;
