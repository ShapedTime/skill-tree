import { vi } from 'vitest'
import { AuthState } from '../../types/auth.types'
import { createMockUser } from './auth.factory'

/**
 * Creates a mock authenticated state for testing
 */
export function createMockAuthenticatedState(overrides: Partial<AuthState> = {}): AuthState {
  const user = createMockUser()

  return {
    user,
    accessToken: 'mock-access-token',
    isAuthenticated: true,
    isLoading: false,
    error: null,
    ...overrides,
  }
}

/**
 * Creates a mock unauthenticated state for testing
 */
export function createMockUnauthenticatedState(overrides: Partial<AuthState> = {}): AuthState {
  return {
    user: null,
    accessToken: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    ...overrides,
  }
}

/**
 * Creates a mock loading state for testing
 */
export function createMockLoadingState(overrides: Partial<AuthState> = {}): AuthState {
  return {
    user: null,
    accessToken: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
    ...overrides,
  }
}

/**
 * Creates a mock error state for testing
 */
export function createMockErrorState(error: string, overrides: Partial<AuthState> = {}): AuthState {
  return {
    user: null,
    accessToken: null,
    isAuthenticated: false,
    isLoading: false,
    error,
    ...overrides,
  }
}

/**
 * Mock auth store actions for testing
 */
export const mockAuthActions = {
  login: vi.fn(),
  register: vi.fn(),
  logout: vi.fn(),
  refreshToken: vi.fn(),
  getCurrentUser: vi.fn(),
  clearError: vi.fn(),
  setLoading: vi.fn(),
}

/**
 * Resets all mock functions
 */
export function resetAuthMocks() {
  Object.values(mockAuthActions).forEach((mock) => {
    if (typeof mock === 'function' && 'mockReset' in mock) {
      mock.mockReset()
    }
  })
}

/**
 * Helper to simulate successful login
 */
export function mockSuccessfulLogin() {
  const user = createMockUser()
  const accessToken = 'mock-access-token'

  mockAuthActions.login.mockResolvedValue({
    success: true,
    data: { user, accessToken },
  })

  return { user, accessToken }
}

/**
 * Helper to simulate failed login
 */
export function mockFailedLogin(error = 'Invalid credentials') {
  mockAuthActions.login.mockResolvedValue({
    success: false,
    error,
    code: 'INVALID_CREDENTIALS',
  })
}

/**
 * Helper to simulate successful registration
 */
export function mockSuccessfulRegister() {
  const user = createMockUser()
  const accessToken = 'mock-access-token'

  mockAuthActions.register.mockResolvedValue({
    success: true,
    data: { user, accessToken },
  })

  return { user, accessToken }
}

/**
 * Helper to simulate failed registration
 */
export function mockFailedRegister(error = 'Email already exists') {
  mockAuthActions.register.mockResolvedValue({
    success: false,
    error,
    code: 'EMAIL_EXISTS',
  })
}

/**
 * Helper to simulate network errors
 */
export function mockNetworkError() {
  const networkError = new Error('Network error')
  mockAuthActions.login.mockRejectedValue(networkError)
  mockAuthActions.register.mockRejectedValue(networkError)
}

/**
 * Helper to mock localStorage for token persistence
 */
export function mockLocalStorage() {
  const store: Record<string, string> = {}

  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: vi.fn((key: string) => store[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        store[key] = value
      }),
      removeItem: vi.fn((key: string) => {
        delete store[key]
      }),
      clear: vi.fn(() => {
        Object.keys(store).forEach(key => delete store[key])
      }),
    },
    writable: true,
  })

  return window.localStorage
}

/**
 * Helper to mock window.location for redirect testing
 */
export function mockWindowLocation() {
  delete (window as any).location
  window.location = {
    href: 'http://localhost:3000',
    pathname: '/',
    search: '',
    hash: '',
    assign: vi.fn(),
    replace: vi.fn(),
    reload: vi.fn(),
  } as any

  return window.location
}