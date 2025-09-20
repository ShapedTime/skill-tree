import { describe, it, expect, beforeAll, beforeEach, jest } from '@jest/globals'
import jwt from 'jsonwebtoken'
import { authenticateToken, optionalAuthentication } from '../../middleware/authenticate'

// Mock the auth service
const mockAuthService = {
  validateAccessToken: jest.fn(),
  getUserById: jest.fn()
}

// Mock the auth service import
jest.unstable_mockModule('../../services/auth.service', () => ({
  authService: mockAuthService
}))

describe('Authentication Middleware', () => {
  let mockRequest: any
  let mockReply: any

  beforeAll(() => {
    process.env.JWT_SECRET = 'test-secret'
  })

  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks()

    // Create mock request and reply objects
    mockRequest = {
      headers: {},
      log: {
        error: jest.fn(),
        warn: jest.fn()
      }
    }

    mockReply = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis()
    }
  })

  describe('authenticateToken middleware', () => {
    it('should reject request without authorization header', async () => {
      await authenticateToken(mockRequest, mockReply)

      expect(mockReply.status).toHaveBeenCalledWith(401)
      expect(mockReply.send).toHaveBeenCalledWith({
        success: false,
        error: 'Authorization header missing',
        code: 'MISSING_AUTH_HEADER'
      })
    })

    it('should reject invalid authorization header format', async () => {
      mockRequest.headers.authorization = 'InvalidFormat token'

      await authenticateToken(mockRequest, mockReply)

      expect(mockReply.status).toHaveBeenCalledWith(401)
      expect(mockReply.send).toHaveBeenCalledWith({
        success: false,
        error: 'Invalid authorization header format. Expected: Bearer <token>',
        code: 'INVALID_AUTH_FORMAT'
      })
    })

    it('should reject authorization header without token', async () => {
      mockRequest.headers.authorization = 'Bearer '

      await authenticateToken(mockRequest, mockReply)

      expect(mockReply.status).toHaveBeenCalledWith(401)
      expect(mockReply.send).toHaveBeenCalledWith({
        success: false,
        error: 'Access token required',
        code: 'MISSING_TOKEN'
      })
    })

    it('should reject invalid token', async () => {
      mockRequest.headers.authorization = 'Bearer invalid-token'
      mockAuthService.validateAccessToken.mockReturnValue(null)

      await authenticateToken(mockRequest, mockReply)

      expect(mockAuthService.validateAccessToken).toHaveBeenCalledWith('invalid-token')
      expect(mockReply.status).toHaveBeenCalledWith(401)
      expect(mockReply.send).toHaveBeenCalledWith({
        success: false,
        error: 'Invalid or expired access token',
        code: 'INVALID_TOKEN'
      })
    })

    it('should reject token for non-existent user', async () => {
      const mockPayload = { userId: 'user-123', type: 'access' }
      mockRequest.headers.authorization = 'Bearer valid-token'
      mockAuthService.validateAccessToken.mockReturnValue(mockPayload)
      mockAuthService.getUserById.mockResolvedValue(null)

      await authenticateToken(mockRequest, mockReply)

      expect(mockAuthService.validateAccessToken).toHaveBeenCalledWith('valid-token')
      expect(mockAuthService.getUserById).toHaveBeenCalledWith('user-123')
      expect(mockReply.status).toHaveBeenCalledWith(401)
      expect(mockReply.send).toHaveBeenCalledWith({
        success: false,
        error: 'User not found or inactive',
        code: 'USER_NOT_FOUND'
      })
    })

    it('should accept valid token and set currentUser', async () => {
      const mockPayload = { userId: 'user-123', type: 'access' }
      const mockUser = { id: 'user-123', email: 'test@example.com', isActive: true }

      mockRequest.headers.authorization = 'Bearer valid-token'
      mockAuthService.validateAccessToken.mockReturnValue(mockPayload)
      mockAuthService.getUserById.mockResolvedValue(mockUser)

      await authenticateToken(mockRequest, mockReply)

      expect(mockAuthService.validateAccessToken).toHaveBeenCalledWith('valid-token')
      expect(mockAuthService.getUserById).toHaveBeenCalledWith('user-123')
      expect(mockRequest.currentUser).toEqual({ userId: 'user-123' })
      expect(mockReply.status).not.toHaveBeenCalled()
      expect(mockReply.send).not.toHaveBeenCalled()
    })

    it('should handle token validation errors gracefully', async () => {
      mockRequest.headers.authorization = 'Bearer valid-token'
      mockAuthService.validateAccessToken.mockImplementation(() => {
        throw new Error('Token validation failed')
      })

      await authenticateToken(mockRequest, mockReply)

      expect(mockRequest.log.error).toHaveBeenCalledWith('Authentication error: Error: Token validation failed')
      expect(mockReply.status).toHaveBeenCalledWith(401)
      expect(mockReply.send).toHaveBeenCalledWith({
        success: false,
        error: 'Token validation failed',
        code: 'TOKEN_VALIDATION_ERROR'
      })
    })

    it('should handle database errors gracefully', async () => {
      const mockPayload = { userId: 'user-123', type: 'access' }
      mockRequest.headers.authorization = 'Bearer valid-token'
      mockAuthService.validateAccessToken.mockReturnValue(mockPayload)
      mockAuthService.getUserById.mockRejectedValue(new Error('Database error'))

      await authenticateToken(mockRequest, mockReply)

      expect(mockRequest.log.error).toHaveBeenCalledWith('Authentication error: Error: Database error')
      expect(mockReply.status).toHaveBeenCalledWith(401)
      expect(mockReply.send).toHaveBeenCalledWith({
        success: false,
        error: 'Token validation failed',
        code: 'TOKEN_VALIDATION_ERROR'
      })
    })
  })

  describe('optionalAuthentication middleware', () => {
    it('should succeed without authorization header', async () => {
      await optionalAuthentication(mockRequest, mockReply)

      expect(mockRequest.currentUser).toBeUndefined()
      expect(mockReply.status).not.toHaveBeenCalled()
      expect(mockReply.send).not.toHaveBeenCalled()
    })

    it('should ignore invalid authorization header format', async () => {
      mockRequest.headers.authorization = 'InvalidFormat token'

      await optionalAuthentication(mockRequest, mockReply)

      expect(mockRequest.currentUser).toBeUndefined()
      expect(mockReply.status).not.toHaveBeenCalled()
      expect(mockReply.send).not.toHaveBeenCalled()
    })

    it('should ignore empty token', async () => {
      mockRequest.headers.authorization = 'Bearer '

      await optionalAuthentication(mockRequest, mockReply)

      expect(mockRequest.currentUser).toBeUndefined()
      expect(mockReply.status).not.toHaveBeenCalled()
      expect(mockReply.send).not.toHaveBeenCalled()
    })

    it('should ignore invalid token', async () => {
      mockRequest.headers.authorization = 'Bearer invalid-token'
      mockAuthService.validateAccessToken.mockReturnValue(null)

      await optionalAuthentication(mockRequest, mockReply)

      expect(mockAuthService.validateAccessToken).toHaveBeenCalledWith('invalid-token')
      expect(mockRequest.currentUser).toBeUndefined()
      expect(mockReply.status).not.toHaveBeenCalled()
      expect(mockReply.send).not.toHaveBeenCalled()
    })

    it('should set currentUser for valid token', async () => {
      const mockPayload = { userId: 'user-123', type: 'access' }
      const mockUser = { id: 'user-123', email: 'test@example.com', isActive: true }

      mockRequest.headers.authorization = 'Bearer valid-token'
      mockAuthService.validateAccessToken.mockReturnValue(mockPayload)
      mockAuthService.getUserById.mockResolvedValue(mockUser)

      await optionalAuthentication(mockRequest, mockReply)

      expect(mockAuthService.validateAccessToken).toHaveBeenCalledWith('valid-token')
      expect(mockAuthService.getUserById).toHaveBeenCalledWith('user-123')
      expect(mockRequest.currentUser).toEqual({ userId: 'user-123' })
      expect(mockReply.status).not.toHaveBeenCalled()
      expect(mockReply.send).not.toHaveBeenCalled()
    })

    it('should ignore token validation errors', async () => {
      mockRequest.headers.authorization = 'Bearer valid-token'
      mockAuthService.validateAccessToken.mockImplementation(() => {
        throw new Error('Token validation failed')
      })

      await optionalAuthentication(mockRequest, mockReply)

      expect(mockRequest.log.warn).toHaveBeenCalledWith('Optional authentication failed: Error: Token validation failed')
      expect(mockRequest.currentUser).toBeUndefined()
      expect(mockReply.status).not.toHaveBeenCalled()
      expect(mockReply.send).not.toHaveBeenCalled()
    })

    it('should ignore user lookup errors', async () => {
      const mockPayload = { userId: 'user-123', type: 'access' }
      mockRequest.headers.authorization = 'Bearer valid-token'
      mockAuthService.validateAccessToken.mockReturnValue(mockPayload)
      mockAuthService.getUserById.mockRejectedValue(new Error('Database error'))

      await optionalAuthentication(mockRequest, mockReply)

      expect(mockRequest.log.warn).toHaveBeenCalledWith('Optional authentication failed: Error: Database error')
      expect(mockRequest.currentUser).toBeUndefined()
      expect(mockReply.status).not.toHaveBeenCalled()
      expect(mockReply.send).not.toHaveBeenCalled()
    })
  })

  describe('Security validation', () => {
    it('should properly validate Bearer token format case sensitivity', async () => {
      mockRequest.headers.authorization = 'bearer valid-token' // lowercase

      await authenticateToken(mockRequest, mockReply)

      expect(mockReply.status).toHaveBeenCalledWith(401)
      expect(mockReply.send).toHaveBeenCalledWith({
        success: false,
        error: 'Invalid authorization header format. Expected: Bearer <token>',
        code: 'INVALID_AUTH_FORMAT'
      })
    })

    it('should reject tokens with extra spaces', async () => {
      mockRequest.headers.authorization = 'Bearer  extra-spaces-token'

      await authenticateToken(mockRequest, mockReply)

      expect(mockReply.status).toHaveBeenCalledWith(401)
      expect(mockReply.send).toHaveBeenCalledWith({
        success: false,
        error: 'Invalid authorization header format. Expected: Bearer <token>',
        code: 'INVALID_AUTH_FORMAT'
      })
    })

    it('should handle extremely long authorization headers', async () => {
      const longToken = 'Bearer ' + 'a'.repeat(10000)
      mockRequest.headers.authorization = longToken

      await authenticateToken(mockRequest, mockReply)

      expect(mockAuthService.validateAccessToken).toHaveBeenCalledWith('a'.repeat(10000))
    })
  })
})