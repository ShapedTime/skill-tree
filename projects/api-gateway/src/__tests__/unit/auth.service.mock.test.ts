import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AuthService } from '../../services/auth.service'

// Mock Prisma
const mockPrisma = {
  user: {
    findFirst: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  },
  refreshToken: {
    create: jest.fn(),
    findUnique: jest.fn(),
    deleteMany: jest.fn(),
  }
}

// Mock the prisma import
jest.mock('../../database/utils', () => ({
  prisma: mockPrisma
}))

describe('AuthService Unit Tests (Mocked)', () => {
  let authService: AuthService

  beforeEach(() => {
    authService = new AuthService()
    jest.clearAllMocks()

    // Setup environment variables for testing
    process.env.JWT_SECRET = 'test-secret'
    process.env.JWT_REFRESH_SECRET = 'test-refresh-secret'
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('Password Operations', () => {
    it('should hash password correctly', async () => {
      const password = 'TestPassword123!'
      const hash = await authService.hashPassword(password)

      expect(hash).toBeDefined()
      expect(hash).not.toBe(password)
      expect(typeof hash).toBe('string')
    })

    it('should verify password correctly', async () => {
      const password = 'TestPassword123!'
      const hash = await bcrypt.hash(password, 12)

      const isValid = await authService.verifyPassword(password, hash)
      expect(isValid).toBe(true)

      const isInvalid = await authService.verifyPassword('wrongpassword', hash)
      expect(isInvalid).toBe(false)
    })
  })

  describe('Token Operations', () => {
    it('should generate valid access and refresh tokens', () => {
      const userId = 'test-user-id'
      const tokens = authService.generateTokens(userId)

      expect(tokens).toHaveProperty('accessToken')
      expect(tokens).toHaveProperty('refreshToken')
      expect(typeof tokens.accessToken).toBe('string')
      expect(typeof tokens.refreshToken).toBe('string')
    })

    it('should validate access token correctly', () => {
      const userId = 'test-user-id'
      const { accessToken } = authService.generateTokens(userId)

      const payload = authService.validateAccessToken(accessToken)
      expect(payload).not.toBeNull()
      expect(payload?.userId).toBe(userId)
      expect(payload?.type).toBe('access')
    })

    it('should reject invalid access token', () => {
      const invalidToken = 'invalid.token.here'
      const payload = authService.validateAccessToken(invalidToken)
      expect(payload).toBeNull()
    })

    it('should reject refresh token as access token', () => {
      const userId = 'test-user-id'
      const { refreshToken } = authService.generateTokens(userId)

      const payload = authService.validateAccessToken(refreshToken)
      expect(payload).toBeNull()
    })
  })

  describe('User Operations (Mocked)', () => {
    it('should register user successfully', async () => {
      const userData = {
        id: 'user-123',
        email: 'test@example.com',
        username: 'testuser',
        passwordHash: 'hashed-password',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        lastLoginAt: null
      }

      mockPrisma.user.findFirst.mockResolvedValue(null)
      mockPrisma.user.create.mockResolvedValue(userData)

      const result = await authService.registerUser('test@example.com', 'testuser', 'password123')

      expect(mockPrisma.user.findFirst).toHaveBeenCalledWith({
        where: {
          OR: [
            { email: 'test@example.com' },
            { username: 'testuser' }
          ]
        }
      })
      expect(mockPrisma.user.create).toHaveBeenCalled()
      expect(result).toEqual(userData)
    })

    it('should reject duplicate email', async () => {
      const existingUser = {
        id: 'existing-123',
        email: 'test@example.com',
        username: 'different',
        passwordHash: 'hash',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        lastLoginAt: null
      }

      mockPrisma.user.findFirst.mockResolvedValue(existingUser)

      await expect(
        authService.registerUser('test@example.com', 'newuser', 'password123')
      ).rejects.toThrow('Email already registered')
    })

    it('should reject duplicate username', async () => {
      const existingUser = {
        id: 'existing-123',
        email: 'different@example.com',
        username: 'testuser',
        passwordHash: 'hash',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        lastLoginAt: null
      }

      mockPrisma.user.findFirst.mockResolvedValue(existingUser)

      await expect(
        authService.registerUser('new@example.com', 'testuser', 'password123')
      ).rejects.toThrow('Username already taken')
    })
  })

  describe('Refresh Token Operations (Mocked)', () => {
    it('should store refresh token', async () => {
      mockPrisma.refreshToken.create.mockResolvedValue({
        id: 'token-123',
        token: 'refresh-token',
        userId: 'user-123',
        expiresAt: new Date(),
        createdAt: new Date()
      })

      await authService.storeRefreshToken('user-123', 'refresh-token')

      expect(mockPrisma.refreshToken.create).toHaveBeenCalledWith({
        data: {
          token: 'refresh-token',
          userId: 'user-123',
          expiresAt: expect.any(Date)
        }
      })
    })

    it('should revoke refresh token', async () => {
      mockPrisma.refreshToken.deleteMany.mockResolvedValue({ count: 1 })

      await authService.revokeRefreshToken('test-token')

      expect(mockPrisma.refreshToken.deleteMany).toHaveBeenCalledWith({
        where: { token: 'test-token' }
      })
    })
  })

  describe('Utility Functions', () => {
    it('should convert User to AuthUser correctly', () => {
      const user = {
        id: 'user-123',
        email: 'test@example.com',
        username: 'testuser',
        passwordHash: 'should-not-be-included',
        firstName: null,
        lastName: null,
        avatarUrl: null,
        bio: null,
        timezone: 'UTC',
        totalXp: 0,
        currentLevel: 1,
        isActive: true,
        emailVerified: false,
        lastLoginAt: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      const authUser = authService.userToAuthUser(user)

      expect(authUser).toEqual({
        id: 'user-123',
        email: 'test@example.com',
        username: 'testuser'
      })
      expect(authUser).not.toHaveProperty('passwordHash')
    })
  })
})