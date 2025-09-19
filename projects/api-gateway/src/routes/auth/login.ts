import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { authService } from '../../services/auth.service'

// Request validation schema
const loginSchema = z.object({
  email: z
    .string()
    .email('Invalid email format')
    .min(1, 'Email is required'),
  password: z
    .string()
    .min(1, 'Password is required')
})

type LoginRequest = z.infer<typeof loginSchema>

export async function loginRoutes(fastify: FastifyInstance) {
  fastify.post('/api/auth/login', {
    schema: {
      description: 'Authenticate user and receive access token',
      tags: ['Authentication'],
      body: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: {
            type: 'string',
            format: 'email',
            description: 'User email address'
          },
          password: {
            type: 'string',
            description: 'User password'
          }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            data: {
              type: 'object',
              properties: {
                user: {
                  type: 'object',
                  properties: {
                    id: { type: 'string' },
                    email: { type: 'string' },
                    username: { type: 'string' }
                  }
                },
                accessToken: {
                  type: 'string',
                  description: 'JWT access token (expires in 15 minutes)'
                }
              }
            },
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
      // Validate request body
      const validationResult = loginSchema.safeParse(request.body)

      if (!validationResult.success) {
        return reply.status(400).send({
          success: false,
          error: 'Validation failed',
          code: 'VALIDATION_ERROR',
          details: validationResult.error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        })
      }

      const { email, password } = validationResult.data

      // Authenticate user
      const user = await authService.authenticateUser(email, password)

      if (!user) {
        return reply.status(401).send({
          success: false,
          error: 'Invalid email or password',
          code: 'INVALID_CREDENTIALS'
        })
      }

      // Generate tokens
      const { accessToken, refreshToken } = authService.generateTokens(user.id)

      // Store refresh token
      await authService.storeRefreshToken(user.id, refreshToken)

      // Set refresh token as HTTP-only cookie
      reply.setCookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        path: '/'
      })

      // Return user data and access token
      return reply.send({
        success: true,
        data: {
          user: authService.userToAuthUser(user),
          accessToken
        },
        message: 'Login successful'
      })

    } catch (error) {
      fastify.log.error(`Login error: ${error}`)

      return reply.status(500).send({
        success: false,
        error: 'Login failed. Please try again.',
        code: 'LOGIN_ERROR'
      })
    }
  })
}