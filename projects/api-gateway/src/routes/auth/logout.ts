import { FastifyInstance } from 'fastify'
import { authService } from '../../services/auth.service.js'

export async function logoutRoutes(fastify: FastifyInstance) {
  fastify.post('/api/auth/logout', {
    schema: {
      description: 'Logout user and invalidate refresh token',
      tags: ['Authentication'],
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            message: { type: 'string' }
          }
        },
        400: {
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
        return reply.status(400).send({
          success: false,
          error: 'No active session found',
          code: 'NO_SESSION'
        })
      }

      try {
        // Revoke the refresh token
        await authService.revokeRefreshToken(refreshToken)
      } catch (error) {
        // Log error but don't fail the logout process
        fastify.log.warn(`Failed to revoke refresh token: ${error}`)
      }

      // Clear refresh token cookie
      reply.clearCookie('refreshToken', {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      })

      return reply.send({
        success: true,
        message: 'Logged out successfully'
      })

    } catch (error) {
      fastify.log.error(`Logout error: ${error}`)

      // Still clear the cookie even if there was an error
      reply.clearCookie('refreshToken', {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      })

      return reply.status(500).send({
        success: false,
        error: 'Logout failed, but session has been cleared',
        code: 'LOGOUT_ERROR'
      })
    }
  })
}