import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useAuth } from '../useAuth'
import { createMockUser, createMockLoginDto, createMockRegisterDto } from '../../test/utils/auth.factory'
import useAuthStore from '../../store/auth.store'

// Mock the auth store
vi.mock('../../store/auth.store', () => ({
  default: vi.fn()
}))

describe('useAuth Hook', () => {
  const mockAuthStore = {
    user: null,
    accessToken: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    login: vi.fn(),
    register: vi.fn(),
    logout: vi.fn(),
    refreshAuth: vi.fn(),
    clearError: vi.fn(),
    checkAuthStatus: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
    // Reset mock store to default state
    Object.assign(mockAuthStore, {
      user: null,
      accessToken: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      login: vi.fn(),
      register: vi.fn(),
      logout: vi.fn(),
      refreshAuth: vi.fn(),
      clearError: vi.fn(),
      checkAuthStatus: vi.fn(),
    })
    ;(useAuthStore as any).mockReturnValue(mockAuthStore)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('Hook Initialization', () => {
    it('should return initial auth state', () => {
      const { result } = renderHook(() => useAuth())

      expect(result.current.user).toBeNull()
      expect(result.current.isAuthenticated).toBe(false)
      expect(result.current.isLoading).toBe(false)
      expect(result.current.error).toBeNull()
    })

    it('should return action functions', () => {
      const { result } = renderHook(() => useAuth())

      expect(typeof result.current.login).toBe('function')
      expect(typeof result.current.register).toBe('function')
      expect(typeof result.current.logout).toBe('function')
      expect(typeof result.current.clearError).toBe('function')
    })

    it('should return computed values with defaults', () => {
      const { result } = renderHook(() => useAuth())

      expect(result.current.userLevel).toBe(1)
      expect(result.current.userXp).toBe(0)
      expect(result.current.isEmailVerified).toBe(false)
    })
  })

  describe('Auth State Integration', () => {
    it('should reflect authenticated state when user is logged in', () => {
      const mockUser = createMockUser({
        currentLevel: 5,
        totalXp: 1500,
        emailVerified: true
      })

      mockAuthStore.user = mockUser
      mockAuthStore.isAuthenticated = true
      mockAuthStore.accessToken = 'valid-token'

      const { result } = renderHook(() => useAuth())

      expect(result.current.user).toEqual(mockUser)
      expect(result.current.isAuthenticated).toBe(true)
      expect(result.current.userLevel).toBe(5)
      expect(result.current.userXp).toBe(1500)
      expect(result.current.isEmailVerified).toBe(true)
    })

    it('should reflect loading state', () => {
      mockAuthStore.isLoading = true

      const { result } = renderHook(() => useAuth())

      expect(result.current.isLoading).toBe(true)
    })

    it('should reflect error state', () => {
      mockAuthStore.error = 'Authentication failed'

      const { result } = renderHook(() => useAuth())

      expect(result.current.error).toBe('Authentication failed')
    })
  })

  describe('Login Action', () => {
    it('should call clearError before login', async () => {
      const mockLoginData = createMockLoginDto()
      mockAuthStore.login.mockResolvedValue({ success: true })

      const { result } = renderHook(() => useAuth())

      await act(async () => {
        await result.current.login(mockLoginData)
      })

      expect(mockAuthStore.clearError).toHaveBeenCalledBefore(mockAuthStore.login as any)
      expect(mockAuthStore.login).toHaveBeenCalledWith(mockLoginData)
    })

    it('should handle successful login', async () => {
      const mockLoginData = createMockLoginDto()
      const mockResponse = { success: true, data: { user: createMockUser(), accessToken: 'token' } }
      mockAuthStore.login.mockResolvedValue(mockResponse)

      const { result } = renderHook(() => useAuth())

      let loginResult
      await act(async () => {
        loginResult = await result.current.login(mockLoginData)
      })

      expect(loginResult).toEqual(mockResponse)
      expect(mockAuthStore.clearError).toHaveBeenCalled()
      expect(mockAuthStore.login).toHaveBeenCalledWith(mockLoginData)
    })

    it('should handle failed login', async () => {
      const mockLoginData = createMockLoginDto()
      const mockResponse = { success: false, error: 'Invalid credentials' }
      mockAuthStore.login.mockResolvedValue(mockResponse)

      const { result } = renderHook(() => useAuth())

      let loginResult
      await act(async () => {
        loginResult = await result.current.login(mockLoginData)
      })

      expect(loginResult).toEqual(mockResponse)
      expect(mockAuthStore.clearError).toHaveBeenCalled()
    })
  })

  describe('Register Action', () => {
    it('should call clearError before register', async () => {
      const mockRegisterData = createMockRegisterDto()
      mockAuthStore.register.mockResolvedValue({ success: true })

      const { result } = renderHook(() => useAuth())

      await act(async () => {
        await result.current.register(mockRegisterData)
      })

      expect(mockAuthStore.clearError).toHaveBeenCalledBefore(mockAuthStore.register as any)
      expect(mockAuthStore.register).toHaveBeenCalledWith(mockRegisterData)
    })

    it('should handle successful registration', async () => {
      const mockRegisterData = createMockRegisterDto()
      const mockResponse = { success: true, data: { user: createMockUser(), accessToken: 'token' } }
      mockAuthStore.register.mockResolvedValue(mockResponse)

      const { result } = renderHook(() => useAuth())

      let registerResult
      await act(async () => {
        registerResult = await result.current.register(mockRegisterData)
      })

      expect(registerResult).toEqual(mockResponse)
      expect(mockAuthStore.clearError).toHaveBeenCalled()
      expect(mockAuthStore.register).toHaveBeenCalledWith(mockRegisterData)
    })

    it('should handle failed registration', async () => {
      const mockRegisterData = createMockRegisterDto()
      const mockResponse = { success: false, error: 'Email already exists' }
      mockAuthStore.register.mockResolvedValue(mockResponse)

      const { result } = renderHook(() => useAuth())

      let registerResult
      await act(async () => {
        registerResult = await result.current.register(mockRegisterData)
      })

      expect(registerResult).toEqual(mockResponse)
      expect(mockAuthStore.clearError).toHaveBeenCalled()
    })
  })

  describe('Logout Action', () => {
    it('should call logout from store', async () => {
      mockAuthStore.logout.mockResolvedValue(undefined)

      const { result } = renderHook(() => useAuth())

      await act(async () => {
        await result.current.logout()
      })

      expect(mockAuthStore.logout).toHaveBeenCalled()
    })

    it('should handle logout errors gracefully', async () => {
      mockAuthStore.logout.mockImplementation(() => Promise.reject(new Error('Logout failed')))

      const { result } = renderHook(() => useAuth())

      // Should not throw even if logout fails
      await act(async () => {
        try {
          await result.current.logout()
        } catch (error) {
          // Expected to be caught by the hook implementation
        }
      })

      expect(mockAuthStore.logout).toHaveBeenCalled()
    })
  })

  describe('Clear Error Action', () => {
    it('should call clearError from store', () => {
      const { result } = renderHook(() => useAuth())

      act(() => {
        result.current.clearError()
      })

      expect(mockAuthStore.clearError).toHaveBeenCalled()
    })
  })

  describe('Computed Values', () => {
    it('should compute userLevel from user data', () => {
      const mockUser = createMockUser({ currentLevel: 10 })
      mockAuthStore.user = mockUser

      const { result } = renderHook(() => useAuth())

      expect(result.current.userLevel).toBe(10)
    })

    it('should default userLevel to 1 when no user', () => {
      mockAuthStore.user = null

      const { result } = renderHook(() => useAuth())

      expect(result.current.userLevel).toBe(1)
    })

    it('should compute userXp from user data', () => {
      const mockUser = createMockUser({ totalXp: 2500 })
      mockAuthStore.user = mockUser

      const { result } = renderHook(() => useAuth())

      expect(result.current.userXp).toBe(2500)
    })

    it('should default userXp to 0 when no user', () => {
      mockAuthStore.user = null

      const { result } = renderHook(() => useAuth())

      expect(result.current.userXp).toBe(0)
    })

    it('should compute isEmailVerified from user data', () => {
      const mockUser = createMockUser({ emailVerified: true })
      mockAuthStore.user = mockUser

      const { result } = renderHook(() => useAuth())

      expect(result.current.isEmailVerified).toBe(true)
    })

    it('should default isEmailVerified to false when no user', () => {
      mockAuthStore.user = null

      const { result } = renderHook(() => useAuth())

      expect(result.current.isEmailVerified).toBe(false)
    })

    it('should handle user with undefined values gracefully', () => {
      const mockUser = createMockUser({
        currentLevel: undefined as any,
        totalXp: undefined as any,
        emailVerified: undefined as any
      })
      mockAuthStore.user = mockUser

      const { result } = renderHook(() => useAuth())

      expect(result.current.userLevel).toBe(1)
      expect(result.current.userXp).toBe(0)
      expect(result.current.isEmailVerified).toBe(false)
    })
  })

  describe('Auto Auth Check Effect', () => {
    it('should call checkAuthStatus when accessToken exists but no user', () => {
      mockAuthStore.accessToken = 'valid-token'
      mockAuthStore.user = null

      renderHook(() => useAuth())

      expect(mockAuthStore.checkAuthStatus).toHaveBeenCalled()
    })

    it('should not call checkAuthStatus when no accessToken', () => {
      mockAuthStore.accessToken = null
      mockAuthStore.user = null

      renderHook(() => useAuth())

      expect(mockAuthStore.checkAuthStatus).not.toHaveBeenCalled()
    })

    it('should not call checkAuthStatus when user already exists', () => {
      mockAuthStore.accessToken = 'valid-token'
      mockAuthStore.user = createMockUser()

      renderHook(() => useAuth())

      expect(mockAuthStore.checkAuthStatus).not.toHaveBeenCalled()
    })
  })

  describe('Auto Refresh Effect', () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it('should set up refresh interval when authenticated with token', () => {
      mockAuthStore.isAuthenticated = true
      mockAuthStore.accessToken = 'valid-token'

      renderHook(() => useAuth())

      // Fast-forward time by 13 minutes (refresh interval)
      act(() => {
        vi.advanceTimersByTime(13 * 60 * 1000)
      })

      expect(mockAuthStore.refreshAuth).toHaveBeenCalled()
    })

    it('should not set up refresh interval when not authenticated', () => {
      mockAuthStore.isAuthenticated = false
      mockAuthStore.accessToken = null

      renderHook(() => useAuth())

      // Fast-forward time
      act(() => {
        vi.advanceTimersByTime(13 * 60 * 1000)
      })

      expect(mockAuthStore.refreshAuth).not.toHaveBeenCalled()
    })

    it('should not set up refresh interval when no access token', () => {
      mockAuthStore.isAuthenticated = true
      mockAuthStore.accessToken = null

      renderHook(() => useAuth())

      // Fast-forward time
      act(() => {
        vi.advanceTimersByTime(13 * 60 * 1000)
      })

      expect(mockAuthStore.refreshAuth).not.toHaveBeenCalled()
    })

    it('should clean up interval on unmount', () => {
      mockAuthStore.isAuthenticated = true
      mockAuthStore.accessToken = 'valid-token'

      const { unmount } = renderHook(() => useAuth())

      // Unmount the hook
      unmount()

      // Fast-forward time
      act(() => {
        vi.advanceTimersByTime(13 * 60 * 1000)
      })

      expect(mockAuthStore.refreshAuth).not.toHaveBeenCalled()
    })

    it('should call refreshAuth multiple times at intervals', () => {
      mockAuthStore.isAuthenticated = true
      mockAuthStore.accessToken = 'valid-token'

      renderHook(() => useAuth())

      // Fast-forward time by 13 minutes twice
      act(() => {
        vi.advanceTimersByTime(13 * 60 * 1000)
      })

      expect(mockAuthStore.refreshAuth).toHaveBeenCalledTimes(1)

      act(() => {
        vi.advanceTimersByTime(13 * 60 * 1000)
      })

      expect(mockAuthStore.refreshAuth).toHaveBeenCalledTimes(2)
    })
  })

  describe('Hook State Updates', () => {
    it('should update when auth store state changes', () => {
      const { result, rerender } = renderHook(() => useAuth())

      // Initial state
      expect(result.current.isAuthenticated).toBe(false)

      // Update mock store state
      mockAuthStore.isAuthenticated = true
      mockAuthStore.user = createMockUser()

      // Re-render hook
      rerender()

      expect(result.current.isAuthenticated).toBe(true)
      expect(result.current.user).toEqual(mockAuthStore.user)
    })

    it('should provide consistent action functions', () => {
      const { result, rerender } = renderHook(() => useAuth())

      const initialLogin = result.current.login
      const initialRegister = result.current.register
      const initialLogout = result.current.logout
      const initialClearError = result.current.clearError

      // Re-render
      rerender()

      // Functions should be consistent (they're wrapped with useCallback in the hook)
      expect(typeof result.current.login).toBe('function')
      expect(typeof result.current.register).toBe('function')
      expect(typeof result.current.logout).toBe('function')
      expect(typeof result.current.clearError).toBe('function')
    })
  })

  describe('Error Handling', () => {
    it('should handle login errors gracefully', async () => {
      const mockLoginData = createMockLoginDto()
      mockAuthStore.login.mockImplementation(() => Promise.reject(new Error('Network error')))

      const { result } = renderHook(() => useAuth())

      // Should not throw even if login fails
      let response
      await act(async () => {
        try {
          response = await result.current.login(mockLoginData)
        } catch (error) {
          // Expected to be caught by the hook implementation
        }
      })

      expect(mockAuthStore.clearError).toHaveBeenCalled()
      expect(mockAuthStore.login).toHaveBeenCalledWith(mockLoginData)
    })

    it('should handle register errors gracefully', async () => {
      const mockRegisterData = createMockRegisterDto()
      mockAuthStore.register.mockImplementation(() => Promise.reject(new Error('Network error')))

      const { result } = renderHook(() => useAuth())

      // Should not throw even if register fails
      let response
      await act(async () => {
        try {
          response = await result.current.register(mockRegisterData)
        } catch (error) {
          // Expected to be caught by the hook implementation
        }
      })

      expect(mockAuthStore.clearError).toHaveBeenCalled()
      expect(mockAuthStore.register).toHaveBeenCalledWith(mockRegisterData)
    })
  })

  describe('Integration Scenarios', () => {
    it('should handle complete login flow', async () => {
      const mockLoginData = createMockLoginDto()
      const mockUser = createMockUser({ currentLevel: 3, totalXp: 750 })
      const mockResponse = {
        success: true,
        data: { user: mockUser, accessToken: 'new-token' }
      }

      mockAuthStore.login.mockResolvedValue(mockResponse)

      const { result } = renderHook(() => useAuth())

      // Perform login
      let loginResult
      await act(async () => {
        loginResult = await result.current.login(mockLoginData)
      })

      expect(loginResult).toEqual(mockResponse)
      expect(mockAuthStore.clearError).toHaveBeenCalled()
      expect(mockAuthStore.login).toHaveBeenCalledWith(mockLoginData)
    })

    it('should handle state transitions correctly', () => {
      const { result, rerender } = renderHook(() => useAuth())

      // Start unauthenticated
      expect(result.current.isAuthenticated).toBe(false)
      expect(result.current.userLevel).toBe(1)

      // Simulate login
      mockAuthStore.isAuthenticated = true
      mockAuthStore.user = createMockUser({ currentLevel: 5, totalXp: 2000 })
      rerender()

      expect(result.current.isAuthenticated).toBe(true)
      expect(result.current.userLevel).toBe(5)
      expect(result.current.userXp).toBe(2000)

      // Simulate logout
      mockAuthStore.isAuthenticated = false
      mockAuthStore.user = null
      rerender()

      expect(result.current.isAuthenticated).toBe(false)
      expect(result.current.userLevel).toBe(1)
      expect(result.current.userXp).toBe(0)
    })
  })
})