import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  User,
  AuthState,
  LoginDto,
  RegisterDto,
  AuthResponse
} from '../types/auth.types'
import apiService from '../services/api.service'

interface AuthStore extends AuthState {
  // Actions
  login: (credentials: LoginDto) => Promise<AuthResponse>
  register: (userData: RegisterDto) => Promise<AuthResponse>
  logout: () => Promise<void>
  refreshAuth: () => Promise<boolean>
  clearError: () => void
  setLoading: (loading: boolean) => void
  checkAuthStatus: () => Promise<void>
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      accessToken: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Login action
      login: async (credentials: LoginDto): Promise<AuthResponse> => {
        set({ isLoading: true, error: null })

        try {
          const response = await apiService.login(credentials)

          if (response.success && response.data) {
            set({
              user: response.data.user,
              accessToken: response.data.accessToken,
              isAuthenticated: true,
              isLoading: false,
              error: null
            })
          } else {
            set({
              isLoading: false,
              error: response.error || 'Login failed'
            })
          }

          return response
        } catch (error: any) {
          const errorMessage = error.message || 'Login failed'
          set({
            isLoading: false,
            error: errorMessage
          })

          return {
            success: false,
            error: errorMessage,
            data: undefined
          }
        }
      },

      // Register action
      register: async (userData: RegisterDto): Promise<AuthResponse> => {
        set({ isLoading: true, error: null })

        try {
          const response = await apiService.register(userData)

          if (response.success && response.data) {
            set({
              user: response.data.user,
              accessToken: response.data.accessToken,
              isAuthenticated: true,
              isLoading: false,
              error: null
            })
          } else {
            set({
              isLoading: false,
              error: response.error || 'Registration failed'
            })
          }

          return response
        } catch (error: any) {
          const errorMessage = error.message || 'Registration failed'
          set({
            isLoading: false,
            error: errorMessage
          })

          return {
            success: false,
            error: errorMessage,
            data: undefined
          }
        }
      },

      // Logout action
      logout: async (): Promise<void> => {
        set({ isLoading: true })

        try {
          await apiService.logout()
        } catch (error) {
          console.error('Logout error:', error)
        } finally {
          // Clear local state regardless of API call result
          apiService.clearTokens()
          set({
            user: null,
            accessToken: null,
            isAuthenticated: false,
            isLoading: false,
            error: null
          })
        }
      },

      // Refresh authentication
      refreshAuth: async (): Promise<boolean> => {
        try {
          const response = await apiService.refreshToken()

          if (response.success && response.data) {
            set({
              accessToken: response.data.accessToken
            })
            return true
          } else {
            // Refresh failed, clear auth state
            get().logout()
            return false
          }
        } catch (error) {
          get().logout()
          return false
        }
      },

      // Check authentication status (validate current user)
      checkAuthStatus: async (): Promise<void> => {
        const { accessToken } = get()

        if (!accessToken) {
          set({
            user: null,
            isAuthenticated: false
          })
          return
        }

        set({ isLoading: true })

        try {
          const response = await apiService.getCurrentUser()

          if (response.success && response.data) {
            set({
              user: response.data,
              isAuthenticated: true,
              isLoading: false,
              error: null
            })
          } else {
            // Invalid token, clear auth state
            await get().logout()
          }
        } catch (error) {
          await get().logout()
        }
      },

      // Clear error
      clearError: (): void => {
        set({ error: null })
      },

      // Set loading state
      setLoading: (loading: boolean): void => {
        set({ isLoading: loading })
      }
    }),
    {
      name: 'auth-storage',
      // Only persist user data and token, not loading/error states
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        isAuthenticated: state.isAuthenticated
      }),
      // Rehydrate the API service with stored token
      onRehydrateStorage: () => (state) => {
        if (state?.accessToken) {
          apiService.setAccessToken(state.accessToken)
        }
      }
    }
  )
)

export default useAuthStore

// Selector hooks for common use cases
export const useUser = () => useAuthStore((state) => state.user)
export const useIsAuthenticated = () => useAuthStore((state) => state.isAuthenticated)
export const useAuthLoading = () => useAuthStore((state) => state.isLoading)
export const useAuthError = () => useAuthStore((state) => state.error)