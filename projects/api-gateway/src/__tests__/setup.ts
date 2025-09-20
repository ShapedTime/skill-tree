import { jest, afterAll } from '@jest/globals'
import { prisma } from '../database/utils'

// Global teardown
afterAll(async () => {
  // Disconnect from database
  await prisma.$disconnect()
})

// Setup global mocks and utilities
jest.setTimeout(30000)