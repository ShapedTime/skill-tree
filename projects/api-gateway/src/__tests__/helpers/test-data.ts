import { faker } from '@faker-js/faker'
import { User, SkillTree, Skill, RefreshToken } from '../../../generated/prisma-client/index'
import { getTestPrisma } from './database'

/**
 * Test data factory for creating consistent test data
 */
export class TestDataFactory {
  private prisma = getTestPrisma()

  /**
   * Create a test user
   */
  async createTestUser(overrides: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>> = {}): Promise<User> {
    const userData = {
      email: faker.internet.email(),
      username: faker.internet.username(),
      passwordHash: '$2b$12$dummy.hash.for.testing.purposes.only', // Pre-hashed test password
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      avatarUrl: faker.image.avatar(),
      bio: faker.lorem.sentence(),
      timezone: 'UTC',
      totalXp: faker.number.int({ min: 0, max: 1000 }),
      currentLevel: faker.number.int({ min: 1, max: 10 }),
      isActive: true,
      emailVerified: faker.datatype.boolean(),
      lastLoginAt: faker.date.recent(),
      ...overrides
    }

    return this.prisma.user.create({
      data: userData
    })
  }

  /**
   * Create a test skill tree
   */
  async createTestSkillTree(overrides: Partial<Omit<SkillTree, 'id' | 'createdAt' | 'updatedAt'>> = {}): Promise<SkillTree> {
    const skillTreeData = {
      name: faker.lorem.words(3),
      slug: faker.lorem.slug(),
      description: faker.lorem.paragraph(),
      shortDescription: faker.lorem.sentence(),
      difficulty: 'BEGINNER' as const,
      estimatedHours: faker.number.float({ min: 1, max: 100 }),
      tags: [faker.lorem.word(), faker.lorem.word()],
      layoutConfig: {} as any,
      isPublished: true,
      isFeatured: false,
      ...overrides
    }

    return this.prisma.skillTree.create({
      data: skillTreeData
    })
  }

  /**
   * Create a test skill
   */
  async createTestSkill(skillTreeId: string, overrides: Partial<Omit<Skill, 'id' | 'createdAt' | 'updatedAt'>> = {}): Promise<Skill> {
    const skillData = {
      skillTreeId,
      name: faker.lorem.words(2),
      description: faker.lorem.paragraph(),
      difficulty: 'BEGINNER' as const,
      estimatedMinutes: faker.number.int({ min: 10, max: 180 }),
      xpValue: faker.number.int({ min: 5, max: 50 }),
      dependencies: [],
      positionX: faker.number.float({ min: 0, max: 1000 }),
      positionY: faker.number.float({ min: 0, max: 1000 }),
      content: {
        type: 'lesson',
        title: faker.lorem.words(3),
        description: faker.lorem.paragraph()
      } as any,
      isActive: true,
      isMilestone: false,
      ...overrides
    }

    return this.prisma.skill.create({
      data: skillData
    })
  }

  /**
   * Create a test refresh token
   */
  async createTestRefreshToken(userId: string, overrides: Partial<Omit<RefreshToken, 'id' | 'createdAt'>> = {}): Promise<RefreshToken> {
    const tokenData = {
      token: faker.string.alphanumeric(64),
      userId,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      ...overrides
    }

    return this.prisma.refreshToken.create({
      data: tokenData
    })
  }

  /**
   * Create multiple test users
   */
  async createTestUsers(count: number): Promise<User[]> {
    const users: User[] = []
    for (let i = 0; i < count; i++) {
      users.push(await this.createTestUser())
    }
    return users
  }

  /**
   * Create a complete test scenario with user, skill tree, and skills
   */
  async createTestScenario() {
    const user = await this.createTestUser()
    const skillTree = await this.createTestSkillTree()
    const skills = await Promise.all([
      this.createTestSkill(skillTree.id),
      this.createTestSkill(skillTree.id),
      this.createTestSkill(skillTree.id)
    ])

    return {
      user,
      skillTree,
      skills
    }
  }
}

/**
 * Common test data constants
 */
export const TEST_CONSTANTS = {
  VALID_PASSWORD: 'TestPassword123!',
  VALID_EMAIL: 'test@example.com',
  VALID_USERNAME: 'testuser',
  INVALID_EMAIL: 'invalid-email',
  WEAK_PASSWORD: '123',
  LONG_PASSWORD: 'a'.repeat(129), // Over max length
  SPECIAL_CHARACTERS: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  SQL_INJECTION_ATTEMPT: "'; DROP TABLE users; --",
  XSS_ATTEMPT: '<script>alert("xss")</script>'
}

/**
 * Helper to generate valid test credentials
 */
export function generateTestCredentials() {
  return {
    email: faker.internet.email(),
    username: faker.internet.username(),
    password: TEST_CONSTANTS.VALID_PASSWORD,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName()
  }
}

/**
 * Helper to generate invalid test credentials for negative testing
 */
export function generateInvalidCredentials() {
  return {
    invalidEmail: {
      email: TEST_CONSTANTS.INVALID_EMAIL,
      username: faker.internet.username(),
      password: TEST_CONSTANTS.VALID_PASSWORD
    },
    weakPassword: {
      email: faker.internet.email(),
      username: faker.internet.username(),
      password: TEST_CONSTANTS.WEAK_PASSWORD
    },
    missingFields: {
      email: '',
      username: '',
      password: ''
    },
    sqlInjection: {
      email: TEST_CONSTANTS.SQL_INJECTION_ATTEMPT,
      username: TEST_CONSTANTS.SQL_INJECTION_ATTEMPT,
      password: TEST_CONSTANTS.VALID_PASSWORD
    }
  }
}