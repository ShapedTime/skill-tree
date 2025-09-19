import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import cookie from '@fastify/cookie'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import { z } from 'zod'
import { prisma } from './database/utils.js'
import { authRoutes } from './routes/auth/index.js'

// Environment validation schema
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().transform(Number).pipe(z.number().min(1).max(65535)).default('8000'),
  DATABASE_URL: z.string().min(1),
  JWT_SECRET: z.string().min(32).default('your-super-secret-jwt-key-minimum-32-chars'),
  JWT_REFRESH_SECRET: z.string().min(32).default('your-super-secret-refresh-key-minimum-32-chars'),
})

// Validate environment variables
const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
})

// Create Fastify instance
const fastify = Fastify({
  logger: {
    level: env.NODE_ENV === 'development' ? 'debug' : 'info',
  },
})

// Register plugins
async function registerPlugins() {
  // CORS configuration
  await fastify.register(cors, {
    origin: ['http://localhost:3000'], // React dev server
    credentials: true,
  })

  // JWT configuration
  await fastify.register(jwt, {
    secret: env.JWT_SECRET,
    sign: { expiresIn: '15m' }, // 15 minutes for access tokens
  })

  // Cookie support for refresh tokens
  await fastify.register(cookie, {
    secret: env.JWT_SECRET, // Use same secret for cookie signing
    parseOptions: {}
  })

  // OpenAPI/Swagger configuration
  await fastify.register(swagger, {
    openapi: {
      openapi: '3.0.0',
      info: {
        title: 'SkillTree API',
        description: 'REST API for SkillTree application - A gamified skill learning platform',
        version: '0.1.0',
        contact: {
          name: 'SkillTree Team',
          email: 'support@skilltree.dev',
        },
      },
      servers: [
        {
          url: `http://localhost:${env.PORT}`,
          description: 'Development server',
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      tags: [
        { name: 'Health', description: 'Health check endpoints' },
        { name: 'Authentication', description: 'User authentication and authorization' },
        { name: 'Users', description: 'User management' },
        { name: 'Skill Trees', description: 'Skill tree operations' },
        { name: 'Skills', description: 'Individual skill management' },
        { name: 'Progress', description: 'User progress tracking' },
      ],
    },
  })

  // Swagger UI configuration
  await fastify.register(swaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false,
    },
    staticCSP: true,
    transformSpecificationClone: true,
  })
}

// Register routes
async function registerRoutes() {
  // Health check endpoint
  fastify.get('/api/health', {
    schema: {
      description: 'Health check endpoint to verify API status',
      tags: ['Health'],
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            data: {
              type: 'object',
              properties: {
                status: { type: 'string' },
                timestamp: { type: 'string' },
                uptime: { type: 'number' },
                environment: { type: 'string' },
                database: { type: 'string' },
              },
            },
          },
        },
      },
    },
  }, async (request, reply) => {
    try {
      // Test database connection
      await prisma.$queryRaw`SELECT 1`

      return reply.send({
        success: true,
        data: {
          status: 'healthy',
          timestamp: new Date().toISOString(),
          uptime: process.uptime(),
          environment: env.NODE_ENV,
          database: 'connected',
        },
      })
    } catch (error) {
      return reply.status(503).send({
        success: false,
        error: 'Database connection failed',
        data: {
          status: 'unhealthy',
          timestamp: new Date().toISOString(),
          uptime: process.uptime(),
          environment: env.NODE_ENV,
          database: 'disconnected',
        },
      })
    }
  })

  // Register authentication routes
  await authRoutes(fastify)

  // Note: /docs/json endpoint is automatically created by @fastify/swagger-ui
}

// Error handler
fastify.setErrorHandler(async (error, request, reply) => {
  const isDevelopment = env.NODE_ENV === 'development'

  // Log error
  fastify.log.error(error)

  // Validation error
  if (error.validation) {
    return reply.status(400).send({
      success: false,
      error: 'Validation failed',
      code: 'VALIDATION_ERROR',
      details: isDevelopment ? error.validation : undefined,
    })
  }

  // JWT error
  if (error.code === 'FST_JWT_NO_AUTHORIZATION_IN_HEADER') {
    return reply.status(401).send({
      success: false,
      error: 'Authorization header missing',
      code: 'MISSING_AUTH_HEADER',
    })
  }

  if (error.code === 'FST_JWT_AUTHORIZATION_TOKEN_INVALID') {
    return reply.status(401).send({
      success: false,
      error: 'Invalid token',
      code: 'INVALID_TOKEN',
    })
  }

  // Default error response
  const statusCode = error.statusCode || 500
  return reply.status(statusCode).send({
    success: false,
    error: statusCode === 500 ? 'Internal server error' : error.message,
    code: error.code || 'INTERNAL_ERROR',
    ...(isDevelopment && { stack: error.stack }),
  })
})

// Graceful shutdown
async function gracefulShutdown() {
  try {
    fastify.log.info('Starting graceful shutdown...')
    await prisma.$disconnect()
    await fastify.close()
    fastify.log.info('Graceful shutdown completed')
    process.exit(0)
  } catch (error) {
    fastify.log.error(`Error during shutdown: ${error}`)
    process.exit(1)
  }
}

process.on('SIGINT', gracefulShutdown)
process.on('SIGTERM', gracefulShutdown)

// Start server
async function start() {
  try {
    await registerPlugins()
    await registerRoutes()

    const address = await fastify.listen({
      port: env.PORT,
      host: '0.0.0.0',
    })

    fastify.log.info(`✅ Server running at ${address}`)
    fastify.log.info(`📚 API Documentation: http://localhost:${env.PORT}/docs`)
    fastify.log.info(`📋 OpenAPI JSON: http://localhost:${env.PORT}/docs/json`)

  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

// Only start if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  start()
}

export { fastify, env }