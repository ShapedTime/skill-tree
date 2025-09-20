import { PrismaClient } from '../../../generated/prisma-client/index'

let prismaInstance: PrismaClient | null = null

/**
 * Get test database instance
 */
export function getTestPrisma(): PrismaClient {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient({
      datasources: {
        db: {
          url: process.env.TEST_DATABASE_URL || process.env.DATABASE_URL
        }
      }
    })
  }
  return prismaInstance
}

/**
 * Clean up all test data from database
 */
export async function cleanupDatabase(): Promise<void> {
  const prisma = getTestPrisma()

  // Delete in reverse dependency order
  await prisma.refreshToken.deleteMany()
  await prisma.userSkillProgress.deleteMany()
  await prisma.skill.deleteMany()
  await prisma.skillTree.deleteMany()
  await prisma.user.deleteMany()
}

/**
 * Close database connection
 */
export async function closeDatabaseConnection(): Promise<void> {
  if (prismaInstance) {
    await prismaInstance.$disconnect()
    prismaInstance = null
  }
}

/**
 * Setup test database - run migrations if needed
 */
export async function setupTestDatabase(): Promise<void> {
  const prisma = getTestPrisma()

  try {
    // Test connection
    await prisma.$connect()
  } catch (error) {
    console.error('Failed to connect to test database:', error)
    throw new Error('Test database connection failed. Make sure TEST_DATABASE_URL is set correctly.')
  }
}

/**
 * Truncate all tables for clean test state
 */
export async function truncateAllTables(): Promise<void> {
  const prisma = getTestPrisma()

  const tableNames = [
    'refresh_tokens',
    'user_skill_progress',
    'skills',
    'skill_trees',
    'users'
  ]

  // Disable foreign key checks temporarily
  await prisma.$executeRawUnsafe('SET session_replication_role = replica;')

  try {
    for (const tableName of tableNames) {
      await prisma.$executeRawUnsafe(`TRUNCATE TABLE "${tableName}" RESTART IDENTITY CASCADE;`)
    }
  } finally {
    // Re-enable foreign key checks
    await prisma.$executeRawUnsafe('SET session_replication_role = DEFAULT;')
  }
}