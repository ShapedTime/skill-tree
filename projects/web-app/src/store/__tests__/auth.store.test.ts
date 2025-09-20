import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import useAuthStore from '../auth.store'
import { createMockUser, createMockLoginDto, createMockRegisterDto } from '../../test/utils/auth.factory'
import * as apiService from '../../services/api.service'

// Mock the API service
vi.mock('../../services/api.service', () => ({
  default: {
    login: vi.fn(),
    register: vi.fn(),
    logout: vi.fn(),
    refreshToken: vi.fn(),
    getCurrentUser: vi.fn(),
    clearTokens: vi.fn(),
    setAccessToken: vi.fn(),
  }
}))

// Mock localStorage for Zustand persist
const mockLocalStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage
})

describe('Auth Store', () => {
  const mockApiService = apiService.default as any

  beforeEach(() => {
    vi.clearAllMocks()
    // Reset only the data properties, not the actions
    useAuthStore.setState({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('Initial State', () => {
    it('should have correct initial state', () => {
      const state = useAuthStore.getState()

      expect(state.user).toBeNull()
      expect(state.accessToken).toBeNull()
      expect(state.isAuthenticated).toBe(false)
      expect(state.isLoading).toBe(false)
      expect(state.error).toBeNull()
    })

    it('should have all required action functions', () => {
      const state = useAuthStore.getState()

      expect(typeof state.login).toBe('function')
      expect(typeof state.register).toBe('function')
      expect(typeof state.logout).toBe('function')
      expect(typeof state.refreshAuth).toBe('function')
      expect(typeof state.clearError).toBe('function')
      expect(typeof state.setLoading).toBe('function')
      expect(typeof state.checkAuthStatus).toBe('function')
    })
  })

  describe('Login Action', () => {
    it('should handle successful login', async () => {
      const mockUser = createMockUser()
      const mockLoginData = createMockLoginDto()
      const mockResponse = {
        success: true,
        data: {
          user: mockUser,
          accessToken: 'mock-access-token'
        }
      }

      mockApiService.login.mockResolvedValue(mockResponse)

      const { login } = useAuthStore.getState()
      const result = await login(mockLoginData)

      expect(result).toEqual(mockResponse)
      expect(mockApiService.login).toHaveBeenCalledWith(mockLoginData)

      const state = useAuthStore.getState()
      expect(state.user).toEqual(mockUser)
      expect(state.accessToken).toBe('mock-access-token')
      expect(state.isAuthenticated).toBe(true)
      expect(state.isLoading).toBe(false)
      expect(state.error).toBeNull()
    })

    it('should handle failed login with error response', async () => {
      const mockLoginData = createMockLoginDto()
      const mockResponse = {
        success: false,
        error: 'Invalid credentials',
        data: undefined
      }

      mockApiService.login.mockResolvedValue(mockResponse)

      const { login } = useAuthStore.getState()
      const result = await login(mockLoginData)

      expect(result).toEqual(mockResponse)

      const state = useAuthStore.getState()
      expect(state.user).toBeNull()
      expect(state.accessToken).toBeNull()
      expect(state.isAuthenticated).toBe(false)
      expect(state.isLoading).toBe(false)
      expect(state.error).toBe('Invalid credentials')
    })

    it('should handle login network error', async () => {
      const mockLoginData = createMockLoginDto()
      const networkError = new Error('Network error')

      mockApiService.login.mockRejectedValue(networkError)

      const { login } = useAuthStore.getState()
      const result = await login(mockLoginData)

      expect(result.success).toBe(false)
      expect(result.error).toBe('Network error')

      const state = useAuthStore.getState()
      expect(state.user).toBeNull()
      expect(state.accessToken).toBeNull()
      expect(state.isAuthenticated).toBe(false)
      expect(state.isLoading).toBe(false)
      expect(state.error).toBe('Network error')
    })

    it('should set loading state during login', async () => {
      const mockLoginData = createMockLoginDto()
      let loadingDuringCall = false

      mockApiService.login.mockImplementation(async () => {
        loadingDuringCall = useAuthStore.getState().isLoading
        return { success: true, data: { user: createMockUser(), accessToken: 'token' } }
      })

      const { login } = useAuthStore.getState()
      await login(mockLoginData)

      expect(loadingDuringCall).toBe(true)

      const finalState = useAuthStore.getState()
      expect(finalState.isLoading).toBe(false)
    })

    it('should clear error before login attempt', async () => {
      // Set initial error state
      useAuthStore.setState({ error: 'Previous error' })

      const mockLoginData = createMockLoginDto()
      const mockResponse = {
        success: true,
        data: {
          user: createMockUser(),
          accessToken: 'token'
        }
      }

      mockApiService.login.mockResolvedValue(mockResponse)

      const { login } = useAuthStore.getState()
      await login(mockLoginData)

      const state = useAuthStore.getState()
      expect(state.error).toBeNull()
    })
  })

  describe('Register Action', () => {
    it('should handle successful registration', async () => {
      const mockUser = createMockUser()
      const mockRegisterData = createMockRegisterDto()
      const mockResponse = {
        success: true,
        data: {
          user: mockUser,
          accessToken: 'mock-access-token'
        }
      }

      mockApiService.register.mockResolvedValue(mockResponse)

      const { register } = useAuthStore.getState()
      const result = await register(mockRegisterData)

      expect(result).toEqual(mockResponse)
      expect(mockApiService.register).toHaveBeenCalledWith(mockRegisterData)

      const state = useAuthStore.getState()
      expect(state.user).toEqual(mockUser)
      expect(state.accessToken).toBe('mock-access-token')
      expect(state.isAuthenticated).toBe(true)
      expect(state.isLoading).toBe(false)
      expect(state.error).toBeNull()
    })

    it('should handle failed registration', async () => {
      const mockRegisterData = createMockRegisterDto()
      const mockResponse = {
        success: false,
        error: 'Email already exists',
        data: undefined
      }

      mockApiService.register.mockResolvedValue(mockResponse)

      const { register } = useAuthStore.getState()
      const result = await register(mockRegisterData)

      expect(result).toEqual(mockResponse)

      const state = useAuthStore.getState()
      expect(state.user).toBeNull()
      expect(state.accessToken).toBeNull()
      expect(state.isAuthenticated).toBe(false)
      expect(state.isLoading).toBe(false)
      expect(state.error).toBe('Email already exists')
    })

    it('should handle registration network error', async () => {
      const mockRegisterData = createMockRegisterDto()
      const networkError = new Error('Network error')

      mockApiService.register.mockRejectedValue(networkError)

      const { register } = useAuthStore.getState()
      const result = await register(mockRegisterData)

      expect(result.success).toBe(false)
      expect(result.error).toBe('Network error')

      const state = useAuthStore.getState()
      expect(state.error).toBe('Network error')
    })

    it('should set loading state during registration', async () => {
      const mockRegisterData = createMockRegisterDto()
      let loadingDuringCall = false

      mockApiService.register.mockImplementation(async () => {
        loadingDuringCall = useAuthStore.getState().isLoading
        return { success: true, data: { user: createMockUser(), accessToken: 'token' } }
      })

      const { register } = useAuthStore.getState()
      await register(mockRegisterData)

      expect(loadingDuringCall).toBe(true)

      const finalState = useAuthStore.getState()
      expect(finalState.isLoading).toBe(false)
    })
  })

  describe('Logout Action', () => {
    it('should handle successful logout', async () => {
      // Set initial authenticated state
      const mockUser = createMockUser()
      useAuthStore.setState({
        user: mockUser,
        accessToken: 'token',
        isAuthenticated: true
      })

      mockApiService.logout.mockResolvedValue(undefined)

      const { logout } = useAuthStore.getState()
      await logout()

      expect(mockApiService.logout).toHaveBeenCalled()
      expect(mockApiService.clearTokens).toHaveBeenCalled()

      const state = useAuthStore.getState()
      expect(state.user).toBeNull()
      expect(state.accessToken).toBeNull()
      expect(state.isAuthenticated).toBe(false)
      expect(state.isLoading).toBe(false)
      expect(state.error).toBeNull()
    })

    it('should clear state even if logout API call fails', async () => {
      // Set initial authenticated state
      const mockUser = createMockUser()
      useAuthStore.setState({
        user: mockUser,
        accessToken: 'token',
        isAuthenticated: true
      })

      mockApiService.logout.mockRejectedValue(new Error('Network error'))

      const { logout } = useAuthStore.getState()
      await logout()

      expect(mockApiService.clearTokens).toHaveBeenCalled()

      const state = useAuthStore.getState()
      expect(state.user).toBeNull()
      expect(state.accessToken).toBeNull()
      expect(state.isAuthenticated).toBe(false)
      expect(state.isLoading).toBe(false)
      expect(state.error).toBeNull()
    })

    it('should set loading state during logout', async () => {
      const mockUser = createMockUser()
      useAuthStore.setState({
        user: mockUser,
        accessToken: 'token',
        isAuthenticated: true
      })

      let loadingDuringCall = false

      mockApiService.logout.mockImplementation(async () => {
        loadingDuringCall = useAuthStore.getState().isLoading
        return Promise.resolve()
      })

      const { logout } = useAuthStore.getState()
      await logout()

      expect(loadingDuringCall).toBe(true)

      const finalState = useAuthStore.getState()
      expect(finalState.isLoading).toBe(false)
    })
  })

  describe('Token Refresh', () => {
    it('should handle successful token refresh', async () => {
      useAuthStore.setState({ accessToken: 'old-token' })

      const mockResponse = {
        success: true,
        data: {
          accessToken: 'new-token'
        }
      }

      mockApiService.refreshToken.mockResolvedValue(mockResponse)

      const { refreshAuth } = useAuthStore.getState()
      const result = await refreshAuth()

      expect(result).toBe(true)
      expect(mockApiService.refreshToken).toHaveBeenCalled()

      const state = useAuthStore.getState()
      expect(state.accessToken).toBe('new-token')
    })

    it('should handle failed token refresh', async () => {
      useAuthStore.setState({
        user: createMockUser(),
        accessToken: 'token',
        isAuthenticated: true
      })

      const mockResponse = {
        success: false,
        error: 'Refresh token expired'
      }

      mockApiService.refreshToken.mockResolvedValue(mockResponse)
      mockApiService.logout.mockResolvedValue(undefined)

      const { refreshAuth } = useAuthStore.getState()
      const result = await refreshAuth()

      expect(result).toBe(false)

      // Wait a bit for the logout call to complete
      await new Promise(resolve => setTimeout(resolve, 0))

      // Should trigger logout on failed refresh
      const state = useAuthStore.getState()
      expect(state.user).toBeNull()
      expect(state.accessToken).toBeNull()
      expect(state.isAuthenticated).toBe(false)
    })

    it('should handle token refresh network error', async () => {
      useAuthStore.setState({
        user: createMockUser(),
        accessToken: 'token',
        isAuthenticated: true
      })

      mockApiService.refreshToken.mockRejectedValue(new Error('Network error'))
      mockApiService.logout.mockResolvedValue(undefined)

      const { refreshAuth } = useAuthStore.getState()
      const result = await refreshAuth()

      expect(result).toBe(false)

      // Wait a bit for the logout call to complete
      await new Promise(resolve => setTimeout(resolve, 0))

      // Should trigger logout on network error
      const state = useAuthStore.getState()
      expect(state.user).toBeNull()
      expect(state.accessToken).toBeNull()
      expect(state.isAuthenticated).toBe(false)
    })
  })

  describe('Check Auth Status', () => {
    it('should validate current user with valid token', async () => {
      const mockUser = createMockUser()
      useAuthStore.setState({ accessToken: 'valid-token' })

      const mockResponse = {
        success: true,
        data: mockUser
      }

      mockApiService.getCurrentUser.mockResolvedValue(mockResponse)

      const { checkAuthStatus } = useAuthStore.getState()
      await checkAuthStatus()

      expect(mockApiService.getCurrentUser).toHaveBeenCalled()

      const state = useAuthStore.getState()
      expect(state.user).toEqual(mockUser)
      expect(state.isAuthenticated).toBe(true)
      expect(state.isLoading).toBe(false)
      expect(state.error).toBeNull()
    })

    it('should clear auth state when no token', async () => {
      useAuthStore.setState({
        user: createMockUser(),
        accessToken: null,
        isAuthenticated: true
      })

      const { checkAuthStatus } = useAuthStore.getState()
      await checkAuthStatus()

      expect(mockApiService.getCurrentUser).not.toHaveBeenCalled()

      const state = useAuthStore.getState()
      expect(state.user).toBeNull()
      expect(state.isAuthenticated).toBe(false)
    })

    it('should handle invalid token by triggering logout', async () => {
      useAuthStore.setState({
        user: createMockUser(),
        accessToken: 'invalid-token',
        isAuthenticated: true
      })

      const mockResponse = {
        success: false,
        error: 'Invalid token'
      }

      mockApiService.getCurrentUser.mockResolvedValue(mockResponse)

      const { checkAuthStatus } = useAuthStore.getState()
      await checkAuthStatus()

      // Should trigger logout on invalid token
      const state = useAuthStore.getState()
      expect(state.user).toBeNull()
      expect(state.accessToken).toBeNull()
      expect(state.isAuthenticated).toBe(false)
    })

    it('should handle network error during auth check', async () => {
      useAuthStore.setState({
        user: createMockUser(),
        accessToken: 'token',
        isAuthenticated: true
      })

      mockApiService.getCurrentUser.mockRejectedValue(new Error('Network error'))

      const { checkAuthStatus } = useAuthStore.getState()
      await checkAuthStatus()

      // Should trigger logout on network error
      const state = useAuthStore.getState()
      expect(state.user).toBeNull()
      expect(state.accessToken).toBeNull()
      expect(state.isAuthenticated).toBe(false)
    })

    it('should set loading state during auth check', async () => {
      useAuthStore.setState({ accessToken: 'token' })

      let loadingDuringCall = false

      mockApiService.getCurrentUser.mockImplementation(async () => {
        loadingDuringCall = useAuthStore.getState().isLoading
        return { success: true, data: createMockUser() }
      })

      const { checkAuthStatus } = useAuthStore.getState()
      await checkAuthStatus()

      expect(loadingDuringCall).toBe(true)

      const finalState = useAuthStore.getState()
      expect(finalState.isLoading).toBe(false)
    })
  })

  describe('Utility Actions', () => {
    it('should clear error', () => {
      useAuthStore.setState({ error: 'Some error' })

      const { clearError } = useAuthStore.getState()
      clearError()

      const state = useAuthStore.getState()
      expect(state.error).toBeNull()
    })

    it('should set loading state', () => {
      const { setLoading } = useAuthStore.getState()

      setLoading(true)
      expect(useAuthStore.getState().isLoading).toBe(true)

      setLoading(false)
      expect(useAuthStore.getState().isLoading).toBe(false)
    })
  })

  describe('Store Selectors', () => {
    it('should export selector hooks', async () => {
      // Test that the selectors are properly exported
      const authStore = await import('../auth.store')

      expect(typeof authStore.useUser).toBe('function')
      expect(typeof authStore.useIsAuthenticated).toBe('function')
      expect(typeof authStore.useAuthLoading).toBe('function')
      expect(typeof authStore.useAuthError).toBe('function')
    })
  })

  describe('Error Handling', () => {
    it('should handle errors without messages gracefully', async () => {
      const mockLoginData = createMockLoginDto()
      mockApiService.login.mockRejectedValue({}) // Error without message

      const { login } = useAuthStore.getState()
      const result = await login(mockLoginData)

      expect(result.success).toBe(false)
      expect(result.error).toBe('Login failed') // Default error message
    })

    it('should handle API response without error message', async () => {
      const mockLoginData = createMockLoginDto()
      const mockResponse = {
        success: false,
        data: undefined
      }

      mockApiService.login.mockResolvedValue(mockResponse)

      const { login } = useAuthStore.getState()
      const result = await login(mockLoginData)

      const state = useAuthStore.getState()
      expect(state.error).toBe('Login failed') // Default error message
    })
  })

  describe('State Management Edge Cases', () => {
    it('should handle rapid successive actions', async () => {
      const mockLoginData = createMockLoginDto()
      const mockResponse = {
        success: true,
        data: {
          user: createMockUser(),
          accessToken: 'token'
        }
      }

      mockApiService.login.mockResolvedValue(mockResponse)

      const { login, clearError } = useAuthStore.getState()

      // Trigger multiple actions rapidly
      const promises = [
        login(mockLoginData),
        Promise.resolve(clearError()),
        login(mockLoginData)
      ]

      await Promise.all(promises)

      const state = useAuthStore.getState()
      expect(state.isAuthenticated).toBe(true)
      expect(state.error).toBeNull()
    })

    it('should maintain consistency during async operations', async () => {
      const mockUser = createMockUser()
      const mockLoginData = createMockLoginDto()

      let resolveLogin: (value: any) => void
      const loginPromise = new Promise(resolve => {
        resolveLogin = resolve
      })

      mockApiService.login.mockReturnValue(loginPromise)

      const { login } = useAuthStore.getState()

      // Start login (async operation)
      const loginResult = login(mockLoginData)

      // Check intermediate state
      expect(useAuthStore.getState().isLoading).toBe(true)
      expect(useAuthStore.getState().isAuthenticated).toBe(false)

      // Resolve login
      resolveLogin!({
        success: true,
        data: { user: mockUser, accessToken: 'token' }
      })

      await loginResult

      // Check final state
      const finalState = useAuthStore.getState()
      expect(finalState.isLoading).toBe(false)
      expect(finalState.isAuthenticated).toBe(true)
      expect(finalState.user).toEqual(mockUser)
    })
  })
})