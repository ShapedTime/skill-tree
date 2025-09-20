import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import {
  ApiResponse,
  AuthResponse,
  LoginDto,
  RegisterDto,
  RefreshResponse,
  User
} from '../types/auth.types'

// Environment-aware API URL configuration
const getApiBaseUrl = (): string => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'
  return baseUrl
}

class ApiService {
  private api: AxiosInstance
  private accessToken: string | null = null

  constructor() {
    this.api = axios.create({
      baseURL: getApiBaseUrl(),
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true, // For refresh token cookies
    })

    this.setupInterceptors()
  }

  private setupInterceptors(): void {
    // Request interceptor to add auth token
    this.api.interceptors.request.use(
      (config) => {
        if (this.accessToken) {
          config.headers.Authorization = `Bearer ${this.accessToken}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // Response interceptor for token refresh
    this.api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true

          try {
            const refreshResponse = await this.refreshToken()
            if (refreshResponse.success) {
              this.setAccessToken(refreshResponse.data.accessToken)
              originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.accessToken}`
              return this.api(originalRequest)
            }
          } catch (refreshError) {
            // Refresh failed, redirect to login
            this.clearTokens()
            window.location.href = '/login'
            return Promise.reject(refreshError)
          }
        }

        return Promise.reject(error)
      }
    )
  }

  // Token management
  public setAccessToken(token: string): void {
    this.accessToken = token
  }

  public clearTokens(): void {
    this.accessToken = null
  }

  public getAccessToken(): string | null {
    return this.accessToken
  }

  // Generic API methods
  private async request<T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await this.api(config)
      return response.data
    } catch (error: any) {
      if (error.response?.data) {
        return error.response.data
      }

      return {
        success: false,
        error: error.message || 'Network error occurred',
        code: 'NETWORK_ERROR'
      }
    }
  }

  // Health check
  public async healthCheck(): Promise<ApiResponse> {
    return this.request({
      method: 'GET',
      url: '/health'
    })
  }

  // Authentication methods
  public async login(credentials: LoginDto): Promise<AuthResponse> {
    const response = await this.request<AuthResponse['data']>({
      method: 'POST',
      url: '/auth/login',
      data: credentials
    })

    if (response.success && response.data) {
      this.setAccessToken(response.data.accessToken)
    }

    return response as AuthResponse
  }

  public async register(userData: RegisterDto): Promise<AuthResponse> {
    const response = await this.request<AuthResponse['data']>({
      method: 'POST',
      url: '/auth/register',
      data: userData
    })

    if (response.success && response.data) {
      this.setAccessToken(response.data.accessToken)
    }

    return response as AuthResponse
  }

  public async refreshToken(): Promise<RefreshResponse> {
    return this.request<RefreshResponse['data']>({
      method: 'POST',
      url: '/auth/refresh'
    }) as Promise<RefreshResponse>
  }

  public async logout(): Promise<ApiResponse> {
    const response = await this.request({
      method: 'POST',
      url: '/auth/logout'
    })

    if (response.success) {
      this.clearTokens()
    }

    return response
  }

  public async getCurrentUser(): Promise<ApiResponse<User>> {
    return this.request<User>({
      method: 'GET',
      url: '/auth/me'
    })
  }

  // Utility method to check if API is reachable
  public async checkConnection(): Promise<boolean> {
    try {
      const response = await this.healthCheck()
      return response.success
    } catch {
      return false
    }
  }
}

// Create singleton instance
const apiService = new ApiService()

export default apiService
export { ApiService }