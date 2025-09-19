import { FastifyRequest } from 'fastify'

declare module 'fastify' {
  interface FastifyRequest {
    currentUser?: {
      userId: string
    }
  }
}