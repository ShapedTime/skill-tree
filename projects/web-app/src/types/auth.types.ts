// User types based on Prisma schema
export interface User {
  id: string
  email: string
  username: string
  firstName?: string
  lastName?: string
  avatarUrl?: string
  bio?: string
  timezone?: string
  totalXp: number
  currentLevel: number
  isActive: boolean
  emailVerified: boolean
  lastLoginAt?: string
  createdAt: string
  updatedAt: string
}

// Auth DTOs for API requests
export interface LoginDto {
  email: string
  password: string
}

export interface RegisterDto {
  email: string
  username: string
  password: string
  firstName?: string
  lastName?: string
}

export interface RefreshTokenDto {
  refreshToken: string
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  code?: string
  message?: string
}

export interface AuthResponse {
  success: boolean
  data: {
    user: User
    accessToken: string
  }
  message?: string
}

export interface RefreshResponse {
  success: boolean
  data: {
    accessToken: string
  }
}

// Auth state types
export interface AuthState {
  user: User | null
  accessToken: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

// Form validation types
export interface LoginFormData {
  email: string
  password: string
}

export interface RegisterFormData {
  email: string
  username: string
  password: string
  confirmPassword: string
  firstName?: string
  lastName?: string
  acceptTerms: boolean
}

// Validation error types
export interface ValidationError {
  field: string
  message: string
}

export interface FormErrors {
  [key: string]: string | undefined
}