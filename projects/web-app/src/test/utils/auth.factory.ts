import { faker } from '@faker-js/faker'
import { User, LoginDto, RegisterDto, AuthResponse, RefreshResponse } from '../../types/auth.types'

/**
 * Creates a mock user with realistic test data
 */
export function createMockUser(overrides: Partial<User> = {}): User {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  const username = faker.internet.username({ firstName, lastName })
  const email = faker.internet.email({ firstName, lastName })

  return {
    id: faker.string.uuid(),
    email,
    username,
    firstName,
    lastName,
    avatarUrl: faker.image.avatar(),
    bio: faker.lorem.sentence(),
    timezone: faker.location.timeZone(),
    totalXp: faker.number.int({ min: 0, max: 10000 }),
    currentLevel: faker.number.int({ min: 1, max: 50 }),
    isActive: true,
    emailVerified: faker.datatype.boolean(),
    lastLoginAt: faker.date.recent().toISOString(),
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
    ...overrides,
  }
}

/**
 * Creates mock login credentials
 */
export function createMockLoginDto(overrides: Partial<LoginDto> = {}): LoginDto {
  return {
    email: faker.internet.email(),
    password: faker.internet.password({ length: 12 }),
    ...overrides,
  }
}

/**
 * Creates mock registration data
 */
export function createMockRegisterDto(overrides: Partial<RegisterDto> = {}): RegisterDto {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()

  return {
    email: faker.internet.email({ firstName, lastName }),
    username: faker.internet.username({ firstName, lastName }),
    password: faker.internet.password({ length: 12 }),
    firstName,
    lastName,
    ...overrides,
  }
}

/**
 * Creates a mock successful auth response
 */
export function createMockAuthResponse(overrides: {
  user?: Partial<User>
  accessToken?: string
} = {}): AuthResponse {
  return {
    success: true,
    data: {
      user: createMockUser(overrides.user),
      accessToken: overrides.accessToken || faker.string.alphanumeric({ length: 32 }),
    },
    message: 'Authentication successful',
  }
}

/**
 * Creates a mock refresh token response
 */
export function createMockRefreshResponse(overrides: {
  accessToken?: string
} = {}): RefreshResponse {
  return {
    success: true,
    data: {
      accessToken: overrides.accessToken || faker.string.alphanumeric({ length: 32 }),
    },
  }
}

/**
 * Creates mock form data for testing forms
 */
export function createMockFormData() {
  const password = faker.internet.password({ length: 12 })

  return {
    login: {
      email: faker.internet.email(),
      password,
    },
    register: {
      email: faker.internet.email(),
      username: faker.internet.username(),
      password,
      confirmPassword: password,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      acceptTerms: true,
    },
  }
}

/**
 * Predefined test users for consistent testing
 */
export const TEST_USERS = {
  validUser: {
    email: 'test@example.com',
    username: 'testuser',
    password: 'password123',
  },
  invalidUser: {
    email: 'invalid@example.com',
    password: 'wrongpassword',
  },
  existingUser: {
    email: 'existing@example.com',
    username: 'existinguser',
  },
} as const