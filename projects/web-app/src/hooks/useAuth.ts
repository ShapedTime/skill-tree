import { useEffect } from 'react'
import useAuthStore from '../store/auth.store'
import { LoginDto, RegisterDto } from '../types/auth.types'

export const useAuth = () => {
  const {
    user,
    accessToken,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout,
    refreshAuth,
    clearError,
    checkAuthStatus
  } = useAuthStore()

  // Check auth status on hook initialization
  useEffect(() => {
    if (accessToken && !user) {
      checkAuthStatus()
    }
  }, [accessToken, user, checkAuthStatus])

  // Auto-refresh token before expiry (15 minutes - 2 minutes buffer = 13 minutes)
  useEffect(() => {
    if (!isAuthenticated || !accessToken) return

    const refreshInterval = setInterval(() => {
      refreshAuth()
    }, 13 * 60 * 1000) // 13 minutes

    return () => clearInterval(refreshInterval)
  }, [isAuthenticated, accessToken, refreshAuth])

  const handleLogin = async (credentials: LoginDto) => {
    clearError()
    return await login(credentials)
  }

  const handleRegister = async (userData: RegisterDto) => {
    clearError()
    return await register(userData)
  }

  const handleLogout = async () => {
    await logout()
  }

  return {
    // State
    user,
    isAuthenticated,
    isLoading,
    error,

    // Actions
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    clearError,

    // Computed values
    userLevel: user?.currentLevel || 1,
    userXp: user?.totalXp || 0,
    isEmailVerified: user?.emailVerified || false
  }
}