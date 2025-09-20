import { jest, beforeAll, afterAll } from '@jest/globals'

// Global test setup
beforeAll(async () => {
  // Set test environment variables
  process.env.NODE_ENV = 'test'
  process.env.JWT_SECRET = 'test-jwt-secret-key-for-testing-only'
  process.env.JWT_REFRESH_SECRET = 'test-refresh-secret-key-for-testing-only'
  process.env.DATABASE_URL = process.env.TEST_DATABASE_URL || 'postgresql://postgres:password@localhost:5432/skilltree_test'
})

// Global teardown
afterAll(async () => {
  // Clean up any global resources
})

// Setup global mocks and utilities
jest.setTimeout(30000)