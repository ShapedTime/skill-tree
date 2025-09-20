/**
 * Test data fixtures for E2E authentication testing
 *
 * Provides consistent test data across all E2E tests with proper
 * cleanup and isolation strategies.
 */

export interface TestUser {
  email: string;
  password: string;
  username: string;
  confirmPassword?: string;
}

export interface TestCredentials {
  email: string;
  password: string;
}

/**
 * Valid test users for authentication flows
 */
export const TEST_USERS = {
  VALID_USER: {
    email: 'test.user@example.com',
    password: 'TestPassword123!',
    username: 'testuser',
  } as TestUser,

  ANOTHER_USER: {
    email: 'another.user@example.com',
    password: 'AnotherPassword123!',
    username: 'anotheruser',
  } as TestUser,

  NEW_USER: {
    email: 'new.user@example.com',
    password: 'NewPassword123!',
    username: 'newuser',
  } as TestUser,
} as const;

/**
 * Invalid credentials for negative testing
 */
export const INVALID_CREDENTIALS = {
  WRONG_PASSWORD: {
    email: 'test.user@example.com',
    password: 'WrongPassword123!',
  },

  NONEXISTENT_USER: {
    email: 'nonexistent@example.com',
    password: 'SomePassword123!',
  },

  INVALID_EMAIL: {
    email: 'invalid-email',
    password: 'ValidPassword123!',
  },

  WEAK_PASSWORD: {
    email: 'test@example.com',
    password: '123',
  },

  EMPTY_FIELDS: {
    email: '',
    password: '',
  },
} as const;

/**
 * Form validation test cases
 */
export const VALIDATION_CASES = {
  REGISTRATION: {
    MISMATCHED_PASSWORDS: {
      email: 'test@example.com',
      password: 'Password123!',
      confirmPassword: 'DifferentPassword123!',
      username: 'testuser',
    },

    EXISTING_EMAIL: {
      email: 'test.user@example.com', // Already exists
      password: 'NewPassword123!',
      confirmPassword: 'NewPassword123!',
      username: 'newtestuser',
    },

    EXISTING_USERNAME: {
      email: 'newemail@example.com',
      password: 'NewPassword123!',
      confirmPassword: 'NewPassword123!',
      username: 'testuser', // Already exists
    },

    INVALID_EMAIL_FORMAT: {
      email: 'invalid.email.format',
      password: 'ValidPassword123!',
      confirmPassword: 'ValidPassword123!',
      username: 'validusername',
    },
  },
} as const;

/**
 * API endpoints for testing
 */
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
    ME: '/api/auth/me',
  },
} as const;

/**
 * Test timeouts and delays
 */
export const TIMEOUTS = {
  FAST: 1000,
  NORMAL: 5000,
  SLOW: 10000,
  NAVIGATION: 30000,
} as const;

/**
 * Error messages to verify in tests
 */
export const ERROR_MESSAGES = {
  LOGIN: {
    INVALID_CREDENTIALS: 'Invalid email or password',
    NETWORK_ERROR: 'Network error. Please try again.',
    SERVER_ERROR: 'Server error. Please try again later.',
  },
  REGISTRATION: {
    EMAIL_EXISTS: 'Email already registered',
    USERNAME_EXISTS: 'Username already taken',
    WEAK_PASSWORD: 'Password must be at least 8 characters',
    INVALID_EMAIL: 'Please enter a valid email address',
    PASSWORDS_MISMATCH: 'Passwords do not match',
    TERMS_REQUIRED: 'You must accept the terms of service',
  },
  VALIDATION: {
    REQUIRED_FIELD: 'This field is required',
    EMAIL_FORMAT: 'Please enter a valid email address',
    PASSWORD_LENGTH: 'Password must be at least 8 characters',
  },
} as const;

/**
 * Success messages to verify in tests
 */
export const SUCCESS_MESSAGES = {
  LOGIN: 'Welcome back!',
  REGISTRATION: 'Account created successfully!',
  LOGOUT: 'Logged out successfully',
} as const;

/**
 * Application routes
 */
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SKILL_TREES: '/skill-trees',
} as const;

/**
 * Generate unique test data for isolated tests
 */
export function generateUniqueUser(): TestUser {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);

  return {
    email: `test.user.${timestamp}.${random}@example.com`,
    password: 'TestPassword123!',
    username: `testuser${timestamp}${random}`,
    confirmPassword: 'TestPassword123!',
  };
}

/**
 * Generate unique credentials for login tests
 */
export function generateUniqueCredentials(): TestCredentials {
  const user = generateUniqueUser();
  return {
    email: user.email,
    password: user.password,
  };
}