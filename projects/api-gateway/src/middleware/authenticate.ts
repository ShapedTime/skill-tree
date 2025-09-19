import { FastifyRequest, FastifyReply } from 'fastify'
import { authService } from '../services/auth.service.js'

/**
 * Authentication middleware that validates JWT access tokens
 * Adds user information to request.user if token is valid
 */
export async function authenticateToken(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return reply.status(401).send({
      success: false,
      error: 'Authorization header missing',
      code: 'MISSING_AUTH_HEADER'
    })
  }

  // Extract token from "Bearer <token>" format
  const tokenParts = authHeader.split(' ')
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return reply.status(401).send({
      success: false,
      error: 'Invalid authorization header format. Expected: Bearer <token>',
      code: 'INVALID_AUTH_FORMAT'
    })
  }

  const token = tokenParts[1]

  if (!token) {
    return reply.status(401).send({
      success: false,
      error: 'Access token required',
      code: 'MISSING_TOKEN'
    })
  }

  try {
    // Validate token using auth service
    const payload = authService.validateAccessToken(token)

    if (!payload) {
      return reply.status(401).send({
        success: false,
        error: 'Invalid or expired access token',
        code: 'INVALID_TOKEN'
      })
    }

    // Verify user still exists and is active
    const user = await authService.getUserById(payload.userId)
    if (!user) {
      return reply.status(401).send({
        success: false,
        error: 'User not found or inactive',
        code: 'USER_NOT_FOUND'
      })
    }

    // Add user info to request
    request.currentUser = { userId: payload.userId }

  } catch (error) {
    request.log.error(`Authentication error: ${error}`)
    return reply.status(401).send({
      success: false,
      error: 'Token validation failed',
      code: 'TOKEN_VALIDATION_ERROR'
    })
  }
}

/**
 * Optional authentication middleware - doesn't fail if no token provided
 * Useful for endpoints that work for both authenticated and anonymous users
 */
export async function optionalAuthentication(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    // No auth header is fine for optional auth
    return
  }

  const tokenParts = authHeader.split(' ')
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    // Invalid format but don't fail - just ignore
    return
  }

  const token = tokenParts[1]
  if (!token) {
    return
  }

  try {
    const payload = authService.validateAccessToken(token)
    if (payload) {
      const user = await authService.getUserById(payload.userId)
      if (user) {
        request.currentUser = { userId: payload.userId }
      }
    }
  } catch (error) {
    // Log error but don't fail the request
    request.log.warn(`Optional authentication failed: ${error}`)
  }
}