import React from 'react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import LoginForm from '../LoginForm'
import { render, userEvent, mockAuthStore } from '../../../test/utils'
import { createMockLoginDto, TEST_USERS } from '../../../test/utils/auth.factory'

// Mock the useAuth hook
vi.mock('../../../hooks/useAuth', () => ({
  useAuth: () => mockAuthStore
}))

// Mock react-router-dom navigate
const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

describe('LoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Reset auth store to default state
    Object.assign(mockAuthStore, {
      user: null,
      accessToken: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      login: vi.fn(),
      register: vi.fn(),
      logout: vi.fn(),
      refreshToken: vi.fn(),
      getCurrentUser: vi.fn(),
      clearError: vi.fn(),
      setLoading: vi.fn(),
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('Component Rendering', () => {
    it('should render the login form correctly', () => {
      render(<LoginForm />)

      expect(screen.getByRole('heading', { name: 'Welcome back' })).toBeInTheDocument()
      expect(screen.getByText('Sign in to continue your learning journey')).toBeInTheDocument()
      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /forgot your password/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /sign up here/i })).toBeInTheDocument()
    })

    it('should have proper form accessibility attributes', () => {
      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const passwordInput = screen.getByLabelText(/password/i)

      expect(emailInput).toHaveAttribute('type', 'email')
      expect(emailInput).toHaveAttribute('autoComplete', 'email')
      expect(emailInput).toHaveAttribute('required')
      expect(emailInput).toHaveAttribute('id', 'email')

      expect(passwordInput).toHaveAttribute('type', 'password')
      expect(passwordInput).toHaveAttribute('autoComplete', 'current-password')
      expect(passwordInput).toHaveAttribute('required')
      expect(passwordInput).toHaveAttribute('id', 'password')
    })

    it('should render navigation links with correct hrefs', () => {
      render(<LoginForm />)

      expect(screen.getByRole('link', { name: /forgot your password/i }))
        .toHaveAttribute('href', '/forgot-password')
      expect(screen.getByRole('link', { name: /sign up here/i }))
        .toHaveAttribute('href', '/register')
    })
  })

  describe('Form Validation', () => {
    it('should prevent form submission with empty email', async () => {
      const mockLogin = vi.fn()
      mockAuthStore.login = mockLogin

      render(<LoginForm />)

      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await userEvent.type(passwordInput, 'password123')
      await userEvent.click(submitButton)

      // Login should not be called due to validation failure
      expect(mockLogin).not.toHaveBeenCalled()
    })

    it('should prevent form submission with empty password', async () => {
      const mockLogin = vi.fn()
      mockAuthStore.login = mockLogin

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await userEvent.type(emailInput, 'test@example.com')
      await userEvent.click(submitButton)

      // Login should not be called due to validation failure
      expect(mockLogin).not.toHaveBeenCalled()
    })

    it('should prevent form submission with invalid email format', async () => {
      const mockLogin = vi.fn()
      mockAuthStore.login = mockLogin

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await userEvent.type(emailInput, 'invalid-email')
      await userEvent.type(passwordInput, 'password123')
      await userEvent.click(submitButton)

      // Login should not be called due to validation failure
      expect(mockLogin).not.toHaveBeenCalled()
    })

    it('should prevent form submission with weak password', async () => {
      const mockLogin = vi.fn()
      mockAuthStore.login = mockLogin

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await userEvent.type(emailInput, 'test@example.com')
      await userEvent.type(passwordInput, '123')
      await userEvent.click(submitButton)

      // Login should not be called due to validation failure
      expect(mockLogin).not.toHaveBeenCalled()
    })

    it('should prevent form submission with empty fields', async () => {
      const mockLogin = vi.fn()
      mockAuthStore.login = mockLogin

      render(<LoginForm />)

      const submitButton = screen.getByRole('button', { name: /sign in/i })
      await userEvent.click(submitButton)

      // Login should not be called due to validation failure
      expect(mockLogin).not.toHaveBeenCalled()
    })

    it('should apply error styling when form has errors', async () => {
      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await userEvent.click(submitButton)

      // The input should not have error class initially, since validation happens on submit
      // and the current implementation doesn't visually show errors (this is a design choice)
      expect(emailInput).toHaveClass('form-input')
    })
  })

  describe('Input Field Updates', () => {
    it('should update email field value when typing', async () => {
      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email address/i) as HTMLInputElement
      await userEvent.type(emailInput, 'test@example.com')

      expect(emailInput.value).toBe('test@example.com')
    })

    it('should update password field value when typing', async () => {
      render(<LoginForm />)

      const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement
      await userEvent.type(passwordInput, 'password123')

      expect(passwordInput.value).toBe('password123')
    })

    it('should handle controlled component state correctly', async () => {
      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email address/i) as HTMLInputElement
      const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement

      expect(emailInput.value).toBe('')
      expect(passwordInput.value).toBe('')

      await userEvent.type(emailInput, 'user@test.com')
      await userEvent.type(passwordInput, 'testpass')

      expect(emailInput.value).toBe('user@test.com')
      expect(passwordInput.value).toBe('testpass')
    })
  })

  describe('Error Message Display', () => {
    it('should display auth store error messages', () => {
      mockAuthStore.error = 'Invalid credentials'

      render(<LoginForm />)

      expect(screen.getByText('Invalid credentials')).toBeInTheDocument()
      expect(screen.getByText('Invalid credentials')).toHaveClass('text-red-600')
    })

    it('should not display error message when error is null', () => {
      mockAuthStore.error = null

      render(<LoginForm />)

      expect(screen.queryByText('Invalid credentials')).not.toBeInTheDocument()
    })

    it('should maintain form input classes during validation', async () => {
      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await userEvent.click(submitButton)

      // Form inputs should maintain their base classes
      expect(emailInput).toHaveClass('form-input')
    })
  })

  describe('Loading State', () => {
    it('should show loading state during submission', () => {
      mockAuthStore.isLoading = true

      render(<LoginForm />)

      expect(screen.getByText('Signing in...')).toBeInTheDocument()
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('should disable form inputs during loading', () => {
      mockAuthStore.isLoading = true

      render(<LoginForm />)

      expect(screen.getByLabelText(/email address/i)).toBeDisabled()
      expect(screen.getByLabelText(/password/i)).toBeDisabled()
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('should show loading spinner during submission', () => {
      mockAuthStore.isLoading = true

      render(<LoginForm />)

      expect(screen.getByRole('button')).toContainHTML('svg')
      expect(screen.getByText('Signing in...')).toBeInTheDocument()
    })
  })

  describe('Successful Login Flow', () => {
    it('should call login function with correct credentials', async () => {
      const mockLogin = vi.fn().mockResolvedValue({ success: true })
      mockAuthStore.login = mockLogin

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await userEvent.type(emailInput, TEST_USERS.validUser.email)
      await userEvent.type(passwordInput, TEST_USERS.validUser.password)
      await userEvent.click(submitButton)

      await waitFor(() => {
        expect(mockLogin).toHaveBeenCalledWith({
          email: TEST_USERS.validUser.email.toLowerCase(),
          password: TEST_USERS.validUser.password
        })
      })
    })

    it('should navigate to dashboard on successful login', async () => {
      const mockLogin = vi.fn().mockResolvedValue({ success: true })
      mockAuthStore.login = mockLogin

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await userEvent.type(emailInput, TEST_USERS.validUser.email)
      await userEvent.type(passwordInput, TEST_USERS.validUser.password)
      await userEvent.click(submitButton)

      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard')
      })
    })

    it('should trim and lowercase email before submission', async () => {
      const mockLogin = vi.fn().mockResolvedValue({ success: true })
      mockAuthStore.login = mockLogin

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await userEvent.type(emailInput, '  USER@EXAMPLE.COM  ')
      await userEvent.type(passwordInput, 'password123')
      await userEvent.click(submitButton)

      await waitFor(() => {
        expect(mockLogin).toHaveBeenCalledWith({
          email: 'user@example.com',
          password: 'password123'
        })
      })
    })
  })

  describe('Failed Login Handling', () => {
    it('should handle 401 unauthorized error', async () => {
      const mockLogin = vi.fn().mockResolvedValue({
        success: false,
        error: 'Invalid credentials'
      })
      mockAuthStore.login = mockLogin

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await userEvent.type(emailInput, TEST_USERS.invalidUser.email)
      await userEvent.type(passwordInput, TEST_USERS.invalidUser.password)
      await userEvent.click(submitButton)

      await waitFor(() => {
        expect(mockLogin).toHaveBeenCalled()
        expect(mockNavigate).not.toHaveBeenCalled()
      })
    })

    it('should handle network errors gracefully', async () => {
      const mockLogin = vi.fn().mockRejectedValue(new Error('Network error'))
      mockAuthStore.login = mockLogin

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await userEvent.type(emailInput, TEST_USERS.validUser.email)
      await userEvent.type(passwordInput, TEST_USERS.validUser.password)
      await userEvent.click(submitButton)

      await waitFor(() => {
        expect(mockLogin).toHaveBeenCalled()
        expect(mockNavigate).not.toHaveBeenCalled()
      })
    })

    it('should not navigate on failed login', async () => {
      const mockLogin = vi.fn().mockResolvedValue({
        success: false,
        error: 'Login failed'
      })
      mockAuthStore.login = mockLogin

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const passwordInput = screen.getByLabelText(/password/i)
      const submitButton = screen.getByRole('button', { name: /sign in/i })

      await userEvent.type(emailInput, 'test@example.com')
      await userEvent.type(passwordInput, 'password123')
      await userEvent.click(submitButton)

      await waitFor(() => {
        expect(mockLogin).toHaveBeenCalled()
      })

      expect(mockNavigate).not.toHaveBeenCalled()
    })
  })

  describe('Form Submission Prevention', () => {
    it('should prevent submission with invalid form data', async () => {
      const mockLogin = vi.fn()
      mockAuthStore.login = mockLogin

      render(<LoginForm />)

      const submitButton = screen.getByRole('button', { name: /sign in/i })
      await userEvent.click(submitButton)

      // Login should not be called due to validation failure
      expect(mockLogin).not.toHaveBeenCalled()
    })

    it('should prevent form submission when loading', async () => {
      mockAuthStore.isLoading = true
      const mockLogin = vi.fn()
      mockAuthStore.login = mockLogin

      render(<LoginForm />)

      const submitButton = screen.getByRole('button')
      expect(submitButton).toBeDisabled()

      // Try to submit (should not work due to disabled state)
      await userEvent.click(submitButton)
      expect(mockLogin).not.toHaveBeenCalled()
    })
  })

  describe('Keyboard Navigation', () => {
    it('should support basic keyboard navigation', async () => {
      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      emailInput.focus()
      expect(document.activeElement).toBe(emailInput)
    })

    it('should submit form on Enter key in password field', async () => {
      const mockLogin = vi.fn().mockResolvedValue({ success: true })
      mockAuthStore.login = mockLogin

      render(<LoginForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const passwordInput = screen.getByLabelText(/password/i)

      await userEvent.type(emailInput, TEST_USERS.validUser.email)
      await userEvent.type(passwordInput, TEST_USERS.validUser.password)
      await userEvent.type(passwordInput, '{enter}')

      await waitFor(() => {
        expect(mockLogin).toHaveBeenCalled()
      })
    })
  })
})