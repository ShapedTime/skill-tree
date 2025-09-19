import { FastifyInstance } from 'fastify'
import { authService } from '../../services/auth.service.js'

export async function refreshRoutes(fastify: FastifyInstance) {
  fastify.post('/api/auth/refresh', {
    schema: {
      description: 'Refresh access token using refresh token cookie',
      tags: ['Authentication'],
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            data: {
              type: 'object',
              properties: {
                accessToken: {
                  type: 'string',
                  description: 'New JWT access token (expires in 15 minutes)'
                }
              }
            },
            message: { type: 'string' }
          }
        },
        401: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            error: { type: 'string' },
            code: { type: 'string' }
          }
        }
      }
    }
  }, async (request, reply) => {
    try {
      // Get refresh token from cookie
      const refreshToken = request.cookies?.refreshToken

      if (!refreshToken) {
        return reply.status(401).send({
          success: false,
          error: 'Refresh token missing',
          code: 'MISSING_REFRESH_TOKEN'
        })
      }

      // Validate refresh token and get user
      const user = await authService.validateRefreshToken(refreshToken)

      if (!user) {
        // Clear invalid refresh token cookie
        reply.clearCookie('refreshToken', { path: '/' })

        return reply.status(401).send({
          success: false,
          error: 'Invalid or expired refresh token',
          code: 'INVALID_REFRESH_TOKEN'
        })
      }

      // Generate new access token (refresh token stays the same)
      const { accessToken } = authService.generateTokens(user.id)

      return reply.send({
        success: true,
        data: {
          accessToken
        },
        message: 'Token refreshed successfully'
      })

    } catch (error) {
      fastify.log.error(`Token refresh error: ${error}`)

      // Clear potentially corrupted refresh token cookie
      reply.clearCookie('refreshToken', { path: '/' })

      return reply.status(401).send({
        success: false,
        error: 'Token refresh failed',
        code: 'REFRESH_ERROR'
      })
    }
  })
}