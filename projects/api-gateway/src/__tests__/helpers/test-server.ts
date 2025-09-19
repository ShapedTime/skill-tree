import Fastify, { FastifyInstance } from 'fastify'
import { authRoutes } from '../../routes/auth/index'

/**
 * Create test server instance with authentication routes
 */
export async function createTestServer(): Promise<FastifyInstance> {
  const fastify = Fastify({
    logger: false // Disable logging during tests
  })

  // Register auth routes
  await fastify.register(authRoutes, { prefix: '/api/auth' })

  // Add request logging for debugging (optional)
  fastify.addHook('onRequest', async (request) => {
    request.log.info(`${request.method} ${request.url}`)
  })

  return fastify
}

/**
 * Helper to inject requests into test server
 */
export interface TestRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  url: string
  payload?: any
  headers?: Record<string, string>
  cookies?: Record<string, string>
}

export async function injectRequest(
  server: FastifyInstance,
  request: TestRequest
) {
  const headers = {
    'Content-Type': 'application/json',
    ...request.headers
  }

  // Add cookies to headers if provided
  if (request.cookies) {
    const cookieString = Object.entries(request.cookies)
      .map(([key, value]) => `${key}=${value}`)
      .join('; ')
    headers.Cookie = cookieString
  }

  return server.inject({
    method: request.method,
    url: request.url,
    payload: request.payload,
    headers
  })
}

/**
 * Helper to extract authentication tokens from response
 */
export function extractAuthTokens(response: any) {
  const body = JSON.parse(response.body)
  const setCookieHeader = response.headers['set-cookie']

  let refreshToken = null
  if (setCookieHeader) {
    const refreshCookie = setCookieHeader.find((cookie: string) =>
      cookie.startsWith('refreshToken=')
    )
    if (refreshCookie) {
      refreshToken = refreshCookie.split('=')[1].split(';')[0]
    }
  }

  return {
    accessToken: body.data?.accessToken || null,
    refreshToken,
    user: body.data?.user || null
  }
}

/**
 * Helper to create authorization header
 */
export function createAuthHeader(token: string): Record<string, string> {
  return {
    Authorization: `Bearer ${token}`
  }
}