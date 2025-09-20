import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { prisma } from '../database/utils'
import type { User } from '../../generated/prisma-client/index'

export interface AuthTokens {
  accessToken: string
  refreshToken: string
}

export interface AuthUser {
  id: string
  email: string
  username: string
}

export interface JWTPayload {
  userId: string
  type: 'access' | 'refresh'
  iat?: number
  exp?: number
}

export class AuthService {
  private readonly SALT_ROUNDS = 12
  private readonly ACCESS_TOKEN_EXPIRES_IN = '15m'
  private readonly REFRESH_TOKEN_EXPIRES_IN = '7d'

  /**
   * Hash password using bcrypt
   */
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.SALT_ROUNDS)
  }

  /**
   * Verify password against hash
   */
  async verifyPassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }

  /**
   * Generate access and refresh tokens
   */
  generateTokens(userId: string): AuthTokens {
    const jwtSecret = process.env.JWT_SECRET!
    const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET

    if (!jwtRefreshSecret) {
      throw new Error('JWT_REFRESH_SECRET must be configured')
    }

    const accessToken = jwt.sign(
      { userId, type: 'access' } as JWTPayload,
      jwtSecret,
      { expiresIn: this.ACCESS_TOKEN_EXPIRES_IN }
    )

    const refreshToken = jwt.sign(
      { userId, type: 'refresh' } as JWTPayload,
      jwtRefreshSecret,
      { expiresIn: this.REFRESH_TOKEN_EXPIRES_IN }
    )

    return { accessToken, refreshToken }
  }

  /**
   * Validate and decode access token
   */
  validateAccessToken(token: string): JWTPayload | null {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload
      if (payload.type !== 'access') {
        return null
      }
      return payload
    } catch {
      return null
    }
  }

  /**
   * Validate refresh token and return associated user
   */
  async validateRefreshToken(token: string): Promise<User | null> {
    try {
      const jwtSecret = process.env.JWT_SECRET!
      const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET

      if (!jwtRefreshSecret) {
        throw new Error('JWT_REFRESH_SECRET must be configured')
      }

      const payload = jwt.verify(token, jwtRefreshSecret) as JWTPayload
      if (payload.type !== 'refresh') {
        return null
      }

      // Check if token exists in database
      const storedToken = await prisma.refreshToken.findUnique({
        where: { token },
        include: { user: true }
      })

      if (!storedToken || storedToken.expiresAt < new Date()) {
        // Clean up expired token
        if (storedToken) {
          await this.revokeRefreshToken(token)
        }
        return null
      }

      return storedToken.user
    } catch {
      return null
    }
  }

  /**
   * Store refresh token in database
   */
  async storeRefreshToken(userId: string, token: string): Promise<void> {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days

    await prisma.refreshToken.create({
      data: {
        token,
        userId,
        expiresAt
      }
    })
  }

  /**
   * Revoke refresh token (logout)
   */
  async revokeRefreshToken(token: string): Promise<void> {
    await prisma.refreshToken.deleteMany({
      where: { token }
    })
  }

  /**
   * Revoke all refresh tokens for a user
   */
  async revokeAllRefreshTokens(userId: string): Promise<void> {
    await prisma.refreshToken.deleteMany({
      where: { userId }
    })
  }

  /**
   * Clean up expired refresh tokens
   */
  async cleanupExpiredTokens(): Promise<void> {
    await prisma.refreshToken.deleteMany({
      where: {
        expiresAt: {
          lt: new Date()
        }
      }
    })
  }

  /**
   * Register new user
   */
  async registerUser(email: string, username: string, password: string): Promise<User> {
    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username }
        ]
      }
    })

    if (existingUser) {
      if (existingUser.email === email) {
        throw new Error('Email already registered')
      }
      if (existingUser.username === username) {
        throw new Error('Username already taken')
      }
    }

    // Hash password and create user
    const passwordHash = await this.hashPassword(password)

    const user = await prisma.user.create({
      data: {
        email,
        username,
        passwordHash
      }
    })

    return user
  }

  /**
   * Authenticate user by email and password
   */
  async authenticateUser(email: string, password: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user || !user.isActive) {
      return null
    }

    const isPasswordValid = await this.verifyPassword(password, user.passwordHash)
    if (!isPasswordValid) {
      return null
    }

    // Update last login time
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() }
    })

    return user
  }

  /**
   * Get user by ID
   */
  async getUserById(userId: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id: userId, isActive: true }
    })
  }

  /**
   * Convert User to safe AuthUser format (without sensitive data)
   */
  userToAuthUser(user: User): AuthUser {
    return {
      id: user.id,
      email: user.email,
      username: user.username
    }
  }
}

// Singleton instance
export const authService = new AuthService()