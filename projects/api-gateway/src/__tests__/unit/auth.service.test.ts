import { describe, it, expect, beforeEach, afterEach, beforeAll, afterAll, jest } from '@jest/globals'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AuthService } from '../../services/auth.service'
import {
  cleanupDatabase,
  getTestPrisma,
  TestDataFactory,
  TEST_CONSTANTS,
  generateTestCredentials,
  setupTestDatabase,
  closeDatabaseConnection
} from '../helpers/index'

describe('AuthService', () => {
  let authService: AuthService
  let testDataFactory: TestDataFactory
  const prisma = getTestPrisma()

  beforeAll(async () => {
    await setupTestDatabase()
  })

  afterAll(async () => {
    await closeDatabaseConnection()
  })

  beforeEach(async () => {
    authService = new AuthService()
    testDataFactory = new TestDataFactory()
    await cleanupDatabase()
  })

  afterEach(async () => {
    await cleanupDatabase()
  })

  describe('hashPassword', () => {
    it('should hash password correctly', async () => {
      const password = TEST_CONSTANTS.VALID_PASSWORD
      const hash = await authService.hashPassword(password)

      expect(hash).toBeDefined()
      expect(hash).not.toBe(password)
      expect(hash.length).toBeGreaterThan(50) // bcrypt hashes are typically 60 chars
      expect(hash.startsWith('$2b$')).toBe(true) // bcrypt format
    })

    it('should generate different hashes for same password', async () => {
      const password = TEST_CONSTANTS.VALID_PASSWORD
      const hash1 = await authService.hashPassword(password)
      const hash2 = await authService.hashPassword(password)

      expect(hash1).not.toBe(hash2) // Salt should make them different
    })

    it('should handle special characters in password', async () => {
      const password = TEST_CONSTANTS.SPECIAL_CHARACTERS
      const hash = await authService.hashPassword(password)

      expect(hash).toBeDefined()
      expect(hash).not.toBe(password)
    })

    it('should handle empty password', async () => {
      const password = ''
      const hash = await authService.hashPassword(password)

      expect(hash).toBeDefined()
      expect(hash).not.toBe(password)
    })
  })

  describe('verifyPassword', () => {
    it('should verify correct password', async () => {
      const password = TEST_CONSTANTS.VALID_PASSWORD
      const hash = await authService.hashPassword(password)
      const isValid = await authService.verifyPassword(password, hash)

      expect(isValid).toBe(true)
    })

    it('should reject incorrect password', async () => {
      const password = TEST_CONSTANTS.VALID_PASSWORD
      const wrongPassword = 'WrongPassword123!'
      const hash = await authService.hashPassword(password)
      const isValid = await authService.verifyPassword(wrongPassword, hash)

      expect(isValid).toBe(false)
    })

    it('should reject password against invalid hash', async () => {
      const password = TEST_CONSTANTS.VALID_PASSWORD
      const invalidHash = 'invalid-hash'
      const isValid = await authService.verifyPassword(password, invalidHash)

      expect(isValid).toBe(false)
    })

    it('should handle empty password verification', async () => {
      const hash = await authService.hashPassword('')
      const isValid = await authService.verifyPassword('', hash)

      expect(isValid).toBe(true)
    })
  })

  describe('generateTokens', () => {
    it('should generate valid access and refresh tokens', () => {
      const userId = 'test-user-id'
      const tokens = authService.generateTokens(userId)

      expect(tokens).toHaveProperty('accessToken')
      expect(tokens).toHaveProperty('refreshToken')
      expect(typeof tokens.accessToken).toBe('string')
      expect(typeof tokens.refreshToken).toBe('string')
      expect(tokens.accessToken.length).toBeGreaterThan(0)
      expect(tokens.refreshToken.length).toBeGreaterThan(0)
    })

    it('should generate different tokens for different users', () => {
      const userId1 = 'user-1'
      const userId2 = 'user-2'
      const tokens1 = authService.generateTokens(userId1)
      const tokens2 = authService.generateTokens(userId2)

      expect(tokens1.accessToken).not.toBe(tokens2.accessToken)
      expect(tokens1.refreshToken).not.toBe(tokens2.refreshToken)
    })

    it('should generate tokens with correct payload structure', () => {
      const userId = 'test-user-id'
      const tokens = authService.generateTokens(userId)

      // Decode without verification to check structure
      const accessPayload = jwt.decode(tokens.accessToken) as any
      const refreshPayload = jwt.decode(tokens.refreshToken) as any

      expect(accessPayload.userId).toBe(userId)
      expect(accessPayload.type).toBe('access')
      expect(accessPayload.iat).toBeDefined()
      expect(accessPayload.exp).toBeDefined()

      expect(refreshPayload.userId).toBe(userId)
      expect(refreshPayload.type).toBe('refresh')
      expect(refreshPayload.iat).toBeDefined()
      expect(refreshPayload.exp).toBeDefined()
    })

    it('should generate tokens with different expiration times', () => {
      const userId = 'test-user-id'
      const tokens = authService.generateTokens(userId)

      const accessPayload = jwt.decode(tokens.accessToken) as any
      const refreshPayload = jwt.decode(tokens.refreshToken) as any

      // Access token should expire before refresh token
      expect(accessPayload.exp).toBeLessThan(refreshPayload.exp)
    })
  })

  describe('validateAccessToken', () => {
    it('should validate correct access token', () => {
      const userId = 'test-user-id'
      const tokens = authService.generateTokens(userId)
      const payload = authService.validateAccessToken(tokens.accessToken)

      expect(payload).toBeDefined()
      expect(payload?.userId).toBe(userId)
      expect(payload?.type).toBe('access')
    })

    it('should reject invalid token', () => {
      const invalidToken = 'invalid.token.here'
      const payload = authService.validateAccessToken(invalidToken)

      expect(payload).toBeNull()
    })

    it('should reject refresh token used as access token', () => {
      const userId = 'test-user-id'
      const tokens = authService.generateTokens(userId)
      const payload = authService.validateAccessToken(tokens.refreshToken)

      expect(payload).toBeNull()
    })

    it('should reject expired token', () => {
      const userId = 'test-user-id'
      const expiredToken = jwt.sign(
        { userId, type: 'access' },
        process.env.JWT_SECRET!,
        { expiresIn: '-1h' } // Expired 1 hour ago
      )

      const payload = authService.validateAccessToken(expiredToken)
      expect(payload).toBeNull()
    })

    it('should reject token with wrong signature', () => {
      const userId = 'test-user-id'
      const wrongSecretToken = jwt.sign(
        { userId, type: 'access' },
        'wrong-secret',
        { expiresIn: '15m' }
      )

      const payload = authService.validateAccessToken(wrongSecretToken)
      expect(payload).toBeNull()
    })
  })

  describe('validateRefreshToken', () => {
    it('should validate correct refresh token', async () => {
      const user = await testDataFactory.createTestUser()
      const tokens = authService.generateTokens(user.id)

      // Store refresh token in database
      await authService.storeRefreshToken(user.id, tokens.refreshToken)

      const validatedUser = await authService.validateRefreshToken(tokens.refreshToken)

      expect(validatedUser).toBeDefined()
      expect(validatedUser?.id).toBe(user.id)
      expect(validatedUser?.email).toBe(user.email)
    })

    it('should reject invalid token', async () => {
      const invalidToken = 'invalid.token.here'
      const user = await authService.validateRefreshToken(invalidToken)

      expect(user).toBeNull()
    })

    it('should reject token not stored in database', async () => {
      const user = await testDataFactory.createTestUser()
      const tokens = authService.generateTokens(user.id)

      // Don't store token in database
      const validatedUser = await authService.validateRefreshToken(tokens.refreshToken)

      expect(validatedUser).toBeNull()
    })

    it('should reject expired token and clean it up', async () => {
      const user = await testDataFactory.createTestUser()
      const expiredDate = new Date(Date.now() - 1000) // Expired 1 second ago

      await testDataFactory.createTestRefreshToken(user.id, {
        expiresAt: expiredDate
      })

      const tokens = authService.generateTokens(user.id)
      const validatedUser = await authService.validateRefreshToken(tokens.refreshToken)

      expect(validatedUser).toBeNull()

      // Verify token was cleaned up
      const remainingTokens = await prisma.refreshToken.findMany({
        where: { userId: user.id }
      })
      expect(remainingTokens).toHaveLength(0)
    })

    it('should reject access token used as refresh token', async () => {
      const user = await testDataFactory.createTestUser()
      const tokens = authService.generateTokens(user.id)

      const validatedUser = await authService.validateRefreshToken(tokens.accessToken)
      expect(validatedUser).toBeNull()
    })
  })

  describe('storeRefreshToken', () => {
    it('should store refresh token correctly', async () => {
      const user = await testDataFactory.createTestUser()
      const token = 'test-refresh-token'

      await authService.storeRefreshToken(user.id, token)

      const storedToken = await prisma.refreshToken.findUnique({
        where: { token }
      })

      expect(storedToken).toBeDefined()
      expect(storedToken?.userId).toBe(user.id)
      expect(storedToken?.token).toBe(token)
      expect(storedToken?.expiresAt).toBeInstanceOf(Date)
      expect(storedToken?.expiresAt.getTime()).toBeGreaterThan(Date.now())
    })

    it('should store multiple tokens for same user', async () => {
      const user = await testDataFactory.createTestUser()
      const token1 = 'test-refresh-token-1'
      const token2 = 'test-refresh-token-2'

      await authService.storeRefreshToken(user.id, token1)
      await authService.storeRefreshToken(user.id, token2)

      const storedTokens = await prisma.refreshToken.findMany({
        where: { userId: user.id }
      })

      expect(storedTokens).toHaveLength(2)
      expect(storedTokens.map(t => t.token)).toContain(token1)
      expect(storedTokens.map(t => t.token)).toContain(token2)
    })
  })

  describe('revokeRefreshToken', () => {
    it('should revoke specific refresh token', async () => {
      const user = await testDataFactory.createTestUser()
      const token1 = 'test-token-1'
      const token2 = 'test-token-2'

      await authService.storeRefreshToken(user.id, token1)
      await authService.storeRefreshToken(user.id, token2)

      await authService.revokeRefreshToken(token1)

      const remainingTokens = await prisma.refreshToken.findMany({
        where: { userId: user.id }
      })

      expect(remainingTokens).toHaveLength(1)
      expect(remainingTokens[0].token).toBe(token2)
    })

    it('should handle revoking non-existent token', async () => {
      const nonExistentToken = 'non-existent-token'

      // Should not throw error
      await expect(authService.revokeRefreshToken(nonExistentToken)).resolves.not.toThrow()
    })
  })

  describe('revokeAllRefreshTokens', () => {
    it('should revoke all tokens for user', async () => {
      const user = await testDataFactory.createTestUser()
      const otherUser = await testDataFactory.createTestUser()

      // Create tokens for both users
      await authService.storeRefreshToken(user.id, 'token-1')
      await authService.storeRefreshToken(user.id, 'token-2')
      await authService.storeRefreshToken(otherUser.id, 'other-token')

      await authService.revokeAllRefreshTokens(user.id)

      const userTokens = await prisma.refreshToken.findMany({
        where: { userId: user.id }
      })
      const otherUserTokens = await prisma.refreshToken.findMany({
        where: { userId: otherUser.id }
      })

      expect(userTokens).toHaveLength(0)
      expect(otherUserTokens).toHaveLength(1) // Other user's tokens should remain
    })
  })

  describe('cleanupExpiredTokens', () => {
    it('should remove expired tokens', async () => {
      const user = await testDataFactory.createTestUser()
      const expiredDate = new Date(Date.now() - 1000)
      const validDate = new Date(Date.now() + 1000 * 60 * 60 * 24) // 1 day from now

      await testDataFactory.createTestRefreshToken(user.id, {
        token: 'expired-token',
        expiresAt: expiredDate
      })
      await testDataFactory.createTestRefreshToken(user.id, {
        token: 'valid-token',
        expiresAt: validDate
      })

      await authService.cleanupExpiredTokens()

      const remainingTokens = await prisma.refreshToken.findMany({
        where: { userId: user.id }
      })

      expect(remainingTokens).toHaveLength(1)
      expect(remainingTokens[0].token).toBe('valid-token')
    })
  })

  describe('registerUser', () => {
    it('should register new user successfully', async () => {
      const credentials = generateTestCredentials()

      const user = await authService.registerUser(
        credentials.email,
        credentials.username,
        credentials.password
      )

      expect(user).toBeDefined()
      expect(user.email).toBe(credentials.email)
      expect(user.username).toBe(credentials.username)
      expect(user.passwordHash).not.toBe(credentials.password) // Should be hashed
      expect(user.isActive).toBe(true)
      expect(user.emailVerified).toBe(false)
      expect(user.totalXp).toBe(0)
      expect(user.currentLevel).toBe(1)
    })

    it('should reject duplicate email', async () => {
      const credentials = generateTestCredentials()

      // Create first user
      await authService.registerUser(
        credentials.email,
        credentials.username,
        credentials.password
      )

      // Try to create second user with same email
      await expect(
        authService.registerUser(
          credentials.email,
          'different-username',
          credentials.password
        )
      ).rejects.toThrow('Email already registered')
    })

    it('should reject duplicate username', async () => {
      const credentials = generateTestCredentials()

      // Create first user
      await authService.registerUser(
        credentials.email,
        credentials.username,
        credentials.password
      )

      // Try to create second user with same username
      await expect(
        authService.registerUser(
          'different@email.com',
          credentials.username,
          credentials.password
        )
      ).rejects.toThrow('Username already taken')
    })

    it('should hash password correctly during registration', async () => {
      const credentials = generateTestCredentials()

      const user = await authService.registerUser(
        credentials.email,
        credentials.username,
        credentials.password
      )

      const isPasswordValid = await authService.verifyPassword(
        credentials.password,
        user.passwordHash
      )

      expect(isPasswordValid).toBe(true)
    })
  })

  describe('authenticateUser', () => {
    it('should authenticate valid user', async () => {
      const credentials = generateTestCredentials()
      const hashedPassword = await authService.hashPassword(credentials.password)

      const testUser = await testDataFactory.createTestUser({
        email: credentials.email,
        passwordHash: hashedPassword,
        isActive: true
      })

      const user = await authService.authenticateUser(
        credentials.email,
        credentials.password
      )

      expect(user).toBeDefined()
      expect(user?.id).toBe(testUser.id)
      expect(user?.email).toBe(credentials.email)
    })

    it('should reject invalid email', async () => {
      const user = await authService.authenticateUser(
        'nonexistent@email.com',
        TEST_CONSTANTS.VALID_PASSWORD
      )

      expect(user).toBeNull()
    })

    it('should reject invalid password', async () => {
      const credentials = generateTestCredentials()
      const hashedPassword = await authService.hashPassword(credentials.password)

      await testDataFactory.createTestUser({
        email: credentials.email,
        passwordHash: hashedPassword,
        isActive: true
      })

      const user = await authService.authenticateUser(
        credentials.email,
        'wrong-password'
      )

      expect(user).toBeNull()
    })

    it('should reject inactive user', async () => {
      const credentials = generateTestCredentials()
      const hashedPassword = await authService.hashPassword(credentials.password)

      await testDataFactory.createTestUser({
        email: credentials.email,
        passwordHash: hashedPassword,
        isActive: false // Inactive user
      })

      const user = await authService.authenticateUser(
        credentials.email,
        credentials.password
      )

      expect(user).toBeNull()
    })

    it('should update lastLoginAt on successful authentication', async () => {
      const credentials = generateTestCredentials()
      const hashedPassword = await authService.hashPassword(credentials.password)

      const testUser = await testDataFactory.createTestUser({
        email: credentials.email,
        passwordHash: hashedPassword,
        isActive: true,
        lastLoginAt: null
      })

      await authService.authenticateUser(
        credentials.email,
        credentials.password
      )

      const updatedUser = await prisma.user.findUnique({
        where: { id: testUser.id }
      })

      expect(updatedUser?.lastLoginAt).toBeDefined()
      expect(updatedUser?.lastLoginAt).toBeInstanceOf(Date)
    })
  })

  describe('getUserById', () => {
    it('should return user by ID', async () => {
      const testUser = await testDataFactory.createTestUser({
        isActive: true
      })

      const user = await authService.getUserById(testUser.id)

      expect(user).toBeDefined()
      expect(user?.id).toBe(testUser.id)
      expect(user?.email).toBe(testUser.email)
    })

    it('should return null for non-existent user', async () => {
      const user = await authService.getUserById('non-existent-id')
      expect(user).toBeNull()
    })

    it('should return null for inactive user', async () => {
      const testUser = await testDataFactory.createTestUser({
        isActive: false
      })

      const user = await authService.getUserById(testUser.id)
      expect(user).toBeNull()
    })
  })

  describe('userToAuthUser', () => {
    it('should convert User to AuthUser safely', async () => {
      const testUser = await testDataFactory.createTestUser()

      const authUser = authService.userToAuthUser(testUser)

      expect(authUser).toHaveProperty('id', testUser.id)
      expect(authUser).toHaveProperty('email', testUser.email)
      expect(authUser).toHaveProperty('username', testUser.username)

      // Should not include sensitive data
      expect(authUser).not.toHaveProperty('passwordHash')
      expect(authUser).not.toHaveProperty('isActive')
      expect(authUser).not.toHaveProperty('emailVerified')
    })

    it('should handle minimal user data', async () => {
      const testUser = await testDataFactory.createTestUser({
        firstName: null,
        lastName: null,
        avatarUrl: null,
        bio: null
      })

      const authUser = authService.userToAuthUser(testUser)

      expect(authUser).toHaveProperty('id', testUser.id)
      expect(authUser).toHaveProperty('email', testUser.email)
      expect(authUser).toHaveProperty('username', testUser.username)
    })
  })
})