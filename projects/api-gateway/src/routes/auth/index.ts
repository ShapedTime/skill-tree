import { FastifyInstance } from 'fastify'
import { registerRoutes } from './register'
import { loginRoutes } from './login'
import { refreshRoutes } from './refresh'
import { logoutRoutes } from './logout'
import { meRoutes } from './me'

/**
 * Register all authentication routes
 */
export async function authRoutes(fastify: FastifyInstance) {
  // Register individual route modules
  await registerRoutes(fastify)
  await loginRoutes(fastify)
  await refreshRoutes(fastify)
  await logoutRoutes(fastify)
  await meRoutes(fastify)
}