import { FastifyInstance } from 'fastify'
import { registerRoutes } from './register.js'
import { loginRoutes } from './login.js'
import { refreshRoutes } from './refresh.js'
import { logoutRoutes } from './logout.js'
import { meRoutes } from './me.js'

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