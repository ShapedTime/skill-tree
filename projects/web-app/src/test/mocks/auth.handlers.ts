import { http, HttpResponse } from 'msw'
import { AuthResponse, RefreshResponse, ApiResponse, User } from '../../types/auth.types'
import { createMockUser } from '../utils/auth.factory'

const API_BASE_URL = 'http://localhost:8000/api'

// Mock data
const mockUser = createMockUser()
const mockAccessToken = 'mock-access-token-12345'
const mockRefreshToken = 'mock-refresh-token-67890'

export const authHandlers = [
  // Health check
  http.get(`${API_BASE_URL}/health`, () => {
    return HttpResponse.json({
      success: true,
      message: 'API is healthy',
    })
  }),

  // Login endpoint
  http.post(`${API_BASE_URL}/auth/login`, async ({ request }) => {
    const body = await request.json() as { email: string; password: string }

    // Simulate validation errors
    if (!body.email || !body.password) {
      return HttpResponse.json(
        {
          success: false,
          error: 'Email and password are required',
          code: 'VALIDATION_ERROR',
        },
        { status: 400 }
      )
    }

    // Simulate invalid credentials
    if (body.email === 'invalid@example.com' || body.password === 'wrongpassword') {
      return HttpResponse.json(
        {
          success: false,
          error: 'Invalid credentials',
          code: 'INVALID_CREDENTIALS',
        },
        { status: 401 }
      )
    }

    // Successful login
    const response: AuthResponse = {
      success: true,
      data: {
        user: mockUser,
        accessToken: mockAccessToken,
      },
      message: 'Login successful',
    }

    return HttpResponse.json(response, {
      headers: {
        'Set-Cookie': `refreshToken=${mockRefreshToken}; HttpOnly; Path=/; SameSite=Strict`,
      },
    })
  }),

  // Register endpoint
  http.post(`${API_BASE_URL}/auth/register`, async ({ request }) => {
    const body = await request.json() as {
      email: string
      username: string
      password: string
      firstName?: string
      lastName?: string
    }

    // Simulate validation errors
    if (!body.email || !body.username || !body.password) {
      return HttpResponse.json(
        {
          success: false,
          error: 'Email, username, and password are required',
          code: 'VALIDATION_ERROR',
        },
        { status: 400 }
      )
    }

    // Simulate duplicate email
    if (body.email === 'existing@example.com') {
      return HttpResponse.json(
        {
          success: false,
          error: 'Email already exists',
          code: 'EMAIL_EXISTS',
        },
        { status: 409 }
      )
    }

    // Simulate duplicate username
    if (body.username === 'existinguser') {
      return HttpResponse.json(
        {
          success: false,
          error: 'Username already exists',
          code: 'USERNAME_EXISTS',
        },
        { status: 409 }
      )
    }

    // Successful registration
    const newUser = createMockUser({
      email: body.email,
      username: body.username,
      firstName: body.firstName,
      lastName: body.lastName,
    })

    const response: AuthResponse = {
      success: true,
      data: {
        user: newUser,
        accessToken: mockAccessToken,
      },
      message: 'Registration successful',
    }

    return HttpResponse.json(response, {
      headers: {
        'Set-Cookie': `refreshToken=${mockRefreshToken}; HttpOnly; Path=/; SameSite=Strict`,
      },
    })
  }),

  // Refresh token endpoint
  http.post(`${API_BASE_URL}/auth/refresh`, ({ request }) => {
    const cookies = request.headers.get('cookie') || ''

    // Check if refresh token exists in cookies
    if (!cookies.includes('refreshToken=')) {
      return HttpResponse.json(
        {
          success: false,
          error: 'Refresh token not found',
          code: 'NO_REFRESH_TOKEN',
        },
        { status: 401 }
      )
    }

    // Simulate expired refresh token
    if (cookies.includes('refreshToken=expired-token')) {
      return HttpResponse.json(
        {
          success: false,
          error: 'Refresh token expired',
          code: 'REFRESH_TOKEN_EXPIRED',
        },
        { status: 401 }
      )
    }

    // Successful refresh
    const response: RefreshResponse = {
      success: true,
      data: {
        accessToken: 'new-access-token-12345',
      },
    }

    return HttpResponse.json(response)
  }),

  // Logout endpoint
  http.post(`${API_BASE_URL}/auth/logout`, () => {
    const response: ApiResponse = {
      success: true,
      message: 'Logout successful',
    }

    return HttpResponse.json(response, {
      headers: {
        'Set-Cookie': 'refreshToken=; HttpOnly; Path=/; SameSite=Strict; Max-Age=0',
      },
    })
  }),

  // Get current user endpoint
  http.get(`${API_BASE_URL}/auth/me`, ({ request }) => {
    const authHeader = request.headers.get('authorization')

    // Check if access token exists
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return HttpResponse.json(
        {
          success: false,
          error: 'Access token required',
          code: 'NO_ACCESS_TOKEN',
        },
        { status: 401 }
      )
    }

    // Simulate expired access token
    if (authHeader.includes('expired-token')) {
      return HttpResponse.json(
        {
          success: false,
          error: 'Access token expired',
          code: 'ACCESS_TOKEN_EXPIRED',
        },
        { status: 401 }
      )
    }

    // Successful response
    const response: ApiResponse<User> = {
      success: true,
      data: mockUser,
    }

    return HttpResponse.json(response)
  }),

  // Network error simulation endpoint
  http.post(`${API_BASE_URL}/auth/network-error`, () => {
    return HttpResponse.error()
  }),
]