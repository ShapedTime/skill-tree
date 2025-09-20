import { setupWorker } from 'msw/browser'
import { authHandlers } from './auth.handlers'

// This configures a Service Worker with the given request handlers
export const worker = setupWorker(...authHandlers)