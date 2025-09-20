import React from 'react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import RegisterForm from '../RegisterForm'
import { render, userEvent, mockAuthStore } from '../../../test/utils'
import { createMockRegisterDto, TEST_USERS } from '../../../test/utils/auth.factory'

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

describe('RegisterForm', () => {
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
    it('should render the registration form correctly', () => {
      render(<RegisterForm />)

      expect(screen.getByRole('heading', { name: 'Join SkillTree' })).toBeInTheDocument()
      expect(screen.getByText('Start your gamified learning adventure')).toBeInTheDocument()
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
      expect(screen.getByLabelText('Password')).toBeInTheDocument()
      expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/i accept the/i)).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /sign in here/i })).toBeInTheDocument()
    })

    it('should have proper form accessibility attributes', () => {
      render(<RegisterForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const usernameInput = screen.getByLabelText(/username/i)
      const passwordInput = screen.getByLabelText('Password')
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
      const termsCheckbox = screen.getByLabelText(/i accept the/i)

      expect(emailInput).toHaveAttribute('type', 'email')
      expect(emailInput).toHaveAttribute('autoComplete', 'email')
      expect(emailInput).toHaveAttribute('required')

      expect(usernameInput).toHaveAttribute('type', 'text')
      expect(usernameInput).toHaveAttribute('autoComplete', 'username')
      expect(usernameInput).toHaveAttribute('required')

      expect(passwordInput).toHaveAttribute('type', 'password')
      expect(passwordInput).toHaveAttribute('autoComplete', 'new-password')
      expect(passwordInput).toHaveAttribute('required')

      expect(confirmPasswordInput).toHaveAttribute('type', 'password')
      expect(confirmPasswordInput).toHaveAttribute('autoComplete', 'new-password')
      expect(confirmPasswordInput).toHaveAttribute('required')

      expect(termsCheckbox).toHaveAttribute('type', 'checkbox')
    })

    it('should render navigation links with correct hrefs', () => {
      render(<RegisterForm />)

      expect(screen.getByRole('link', { name: /terms and conditions/i }))
        .toHaveAttribute('href', '/terms')
      expect(screen.getByRole('link', { name: /privacy policy/i }))
        .toHaveAttribute('href', '/privacy')
      expect(screen.getByRole('link', { name: /sign in here/i }))
        .toHaveAttribute('href', '/login')
    })

    it('should render optional fields without required attribute', () => {
      render(<RegisterForm />)

      const firstNameInput = screen.getByLabelText(/first name/i)
      const lastNameInput = screen.getByLabelText(/last name/i)

      expect(firstNameInput).not.toHaveAttribute('required')
      expect(lastNameInput).not.toHaveAttribute('required')
    })
  })

  describe('Form Validation', () => {
    it('should prevent form submission with empty required fields', async () => {
      const mockRegister = vi.fn()
      mockAuthStore.register = mockRegister

      render(<RegisterForm />)

      const submitButton = screen.getByRole('button', { name: /create account/i })
      await userEvent.click(submitButton)

      // Register should not be called due to validation failure
      expect(mockRegister).not.toHaveBeenCalled()
    })

    it('should prevent form submission with invalid email format', async () => {
      const mockRegister = vi.fn()
      mockAuthStore.register = mockRegister

      render(<RegisterForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const usernameInput = screen.getByLabelText(/username/i)
      const passwordInput = screen.getByLabelText('Password')
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
      const termsCheckbox = screen.getByLabelText(/i accept the/i)
      const submitButton = screen.getByRole('button', { name: /create account/i })

      await userEvent.type(emailInput, 'invalid-email')
      await userEvent.type(usernameInput, 'testuser')
      await userEvent.type(passwordInput, 'TestPass123')
      await userEvent.type(confirmPasswordInput, 'TestPass123')
      await userEvent.click(termsCheckbox)
      await userEvent.click(submitButton)

      // Register should not be called due to validation failure
      expect(mockRegister).not.toHaveBeenCalled()
    })

    it('should prevent form submission with short username', async () => {
      const mockRegister = vi.fn()
      mockAuthStore.register = mockRegister

      render(<RegisterForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const usernameInput = screen.getByLabelText(/username/i)
      const passwordInput = screen.getByLabelText('Password')
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
      const termsCheckbox = screen.getByLabelText(/i accept the/i)
      const submitButton = screen.getByRole('button', { name: /create account/i })

      await userEvent.type(emailInput, 'test@example.com')
      await userEvent.type(usernameInput, 'ab') // Too short
      await userEvent.type(passwordInput, 'TestPass123')
      await userEvent.type(confirmPasswordInput, 'TestPass123')
      await userEvent.click(termsCheckbox)
      await userEvent.click(submitButton)

      // Register should not be called due to validation failure
      expect(mockRegister).not.toHaveBeenCalled()
    })

    it('should prevent form submission with invalid username characters', async () => {
      const mockRegister = vi.fn()
      mockAuthStore.register = mockRegister

      render(<RegisterForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const usernameInput = screen.getByLabelText(/username/i)
      const passwordInput = screen.getByLabelText('Password')
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
      const termsCheckbox = screen.getByLabelText(/i accept the/i)
      const submitButton = screen.getByRole('button', { name: /create account/i })

      await userEvent.type(emailInput, 'test@example.com')
      await userEvent.type(usernameInput, 'test-user@') // Invalid characters
      await userEvent.type(passwordInput, 'TestPass123')
      await userEvent.type(confirmPasswordInput, 'TestPass123')
      await userEvent.click(termsCheckbox)
      await userEvent.click(submitButton)

      // Register should not be called due to validation failure
      expect(mockRegister).not.toHaveBeenCalled()
    })

    it('should prevent form submission with weak password', async () => {
      const mockRegister = vi.fn()
      mockAuthStore.register = mockRegister

      render(<RegisterForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const usernameInput = screen.getByLabelText(/username/i)
      const passwordInput = screen.getByLabelText('Password')
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
      const termsCheckbox = screen.getByLabelText(/i accept the/i)
      const submitButton = screen.getByRole('button', { name: /create account/i })

      await userEvent.type(emailInput, 'test@example.com')
      await userEvent.type(usernameInput, 'testuser')
      await userEvent.type(passwordInput, 'weak') // Too weak
      await userEvent.type(confirmPasswordInput, 'weak')
      await userEvent.click(termsCheckbox)
      await userEvent.click(submitButton)

      // Register should not be called due to validation failure
      expect(mockRegister).not.toHaveBeenCalled()
    })

    it('should prevent form submission with mismatched passwords', async () => {
      const mockRegister = vi.fn()
      mockAuthStore.register = mockRegister

      render(<RegisterForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const usernameInput = screen.getByLabelText(/username/i)
      const passwordInput = screen.getByLabelText('Password')
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
      const termsCheckbox = screen.getByLabelText(/i accept the/i)
      const submitButton = screen.getByRole('button', { name: /create account/i })

      await userEvent.type(emailInput, 'test@example.com')
      await userEvent.type(usernameInput, 'testuser')
      await userEvent.type(passwordInput, 'TestPass123')
      await userEvent.type(confirmPasswordInput, 'DifferentPass123') // Mismatch
      await userEvent.click(termsCheckbox)
      await userEvent.click(submitButton)

      // Register should not be called due to validation failure
      expect(mockRegister).not.toHaveBeenCalled()
    })

    it('should prevent form submission without terms acceptance', async () => {
      const mockRegister = vi.fn()
      mockAuthStore.register = mockRegister

      render(<RegisterForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const usernameInput = screen.getByLabelText(/username/i)
      const passwordInput = screen.getByLabelText('Password')
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
      const submitButton = screen.getByRole('button', { name: /create account/i })

      await userEvent.type(emailInput, 'test@example.com')
      await userEvent.type(usernameInput, 'testuser')
      await userEvent.type(passwordInput, 'TestPass123')
      await userEvent.type(confirmPasswordInput, 'TestPass123')
      // Don't check terms
      await userEvent.click(submitButton)

      // Register should not be called due to validation failure
      expect(mockRegister).not.toHaveBeenCalled()
    })
  })

  describe('Input Field Updates', () => {
    it('should update all form fields when typing', async () => {
      render(<RegisterForm />)

      const firstNameInput = screen.getByLabelText(/first name/i) as HTMLInputElement
      const lastNameInput = screen.getByLabelText(/last name/i) as HTMLInputElement
      const emailInput = screen.getByLabelText(/email address/i) as HTMLInputElement
      const usernameInput = screen.getByLabelText(/username/i) as HTMLInputElement
      const passwordInput = screen.getByLabelText('Password') as HTMLInputElement
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i) as HTMLInputElement

      await userEvent.type(firstNameInput, 'John')
      await userEvent.type(lastNameInput, 'Doe')
      await userEvent.type(emailInput, 'john@example.com')
      await userEvent.type(usernameInput, 'johndoe')
      await userEvent.type(passwordInput, 'TestPass123')
      await userEvent.type(confirmPasswordInput, 'TestPass123')

      expect(firstNameInput.value).toBe('John')
      expect(lastNameInput.value).toBe('Doe')
      expect(emailInput.value).toBe('john@example.com')
      expect(usernameInput.value).toBe('johndoe')
      expect(passwordInput.value).toBe('TestPass123')
      expect(confirmPasswordInput.value).toBe('TestPass123')
    })

    it('should handle checkbox state changes', async () => {
      render(<RegisterForm />)

      const termsCheckbox = screen.getByLabelText(/i accept the/i) as HTMLInputElement

      expect(termsCheckbox.checked).toBe(false)

      await userEvent.click(termsCheckbox)
      expect(termsCheckbox.checked).toBe(true)

      await userEvent.click(termsCheckbox)
      expect(termsCheckbox.checked).toBe(false)
    })

    it('should maintain controlled component state correctly', async () => {
      render(<RegisterForm />)

      const inputs = [
        screen.getByLabelText(/first name/i),
        screen.getByLabelText(/last name/i),
        screen.getByLabelText(/email address/i),
        screen.getByLabelText(/username/i),
        screen.getByLabelText('Password'),
        screen.getByLabelText(/confirm password/i),
      ] as HTMLInputElement[]

      // All inputs should start empty
      inputs.forEach(input => {
        expect(input.value).toBe('')
      })

      // Checkbox should start unchecked
      const termsCheckbox = screen.getByLabelText(/i accept the/i) as HTMLInputElement
      expect(termsCheckbox.checked).toBe(false)
    })
  })

  describe('Error Message Display', () => {
    it('should display auth store error messages', () => {
      mockAuthStore.error = 'Email already exists'

      render(<RegisterForm />)

      expect(screen.getByText('Email already exists')).toBeInTheDocument()
      expect(screen.getByText('Email already exists')).toHaveClass('text-red-600')
    })

    it('should not display error message when error is null', () => {
      mockAuthStore.error = null

      render(<RegisterForm />)

      expect(screen.queryByText('Email already exists')).not.toBeInTheDocument()
    })
  })

  describe('Loading State', () => {
    it('should show loading state during submission', () => {
      mockAuthStore.isLoading = true

      render(<RegisterForm />)

      expect(screen.getByText('Creating account...')).toBeInTheDocument()
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('should disable all form inputs during loading', () => {
      mockAuthStore.isLoading = true

      render(<RegisterForm />)

      const inputs = [
        screen.getByLabelText(/first name/i),
        screen.getByLabelText(/last name/i),
        screen.getByLabelText(/email address/i),
        screen.getByLabelText(/username/i),
        screen.getByLabelText('Password'),
        screen.getByLabelText(/confirm password/i),
        screen.getByLabelText(/i accept the/i),
      ]

      inputs.forEach(input => {
        expect(input).toBeDisabled()
      })

      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('should show loading spinner during submission', () => {
      mockAuthStore.isLoading = true

      render(<RegisterForm />)

      expect(screen.getByRole('button')).toContainHTML('svg')
      expect(screen.getByText('Creating account...')).toBeInTheDocument()
    })
  })

  describe('Successful Registration Flow', () => {
    it('should call register function with correct data', async () => {
      const mockRegister = vi.fn().mockResolvedValue({ success: true })
      mockAuthStore.register = mockRegister

      render(<RegisterForm />)

      const firstNameInput = screen.getByLabelText(/first name/i)
      const lastNameInput = screen.getByLabelText(/last name/i)
      const emailInput = screen.getByLabelText(/email address/i)
      const usernameInput = screen.getByLabelText(/username/i)
      const passwordInput = screen.getByLabelText('Password')
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
      const termsCheckbox = screen.getByLabelText(/i accept the/i)
      const submitButton = screen.getByRole('button', { name: /create account/i })

      await userEvent.type(firstNameInput, 'John')
      await userEvent.type(lastNameInput, 'Doe')
      await userEvent.type(emailInput, 'JOHN@EXAMPLE.COM') // Test case handling
      await userEvent.type(usernameInput, 'johndoe') // Valid username
      await userEvent.type(passwordInput, 'TestPass123')
      await userEvent.type(confirmPasswordInput, 'TestPass123')
      await userEvent.click(termsCheckbox)
      await userEvent.click(submitButton)

      await waitFor(() => {
        expect(mockRegister).toHaveBeenCalledWith({
          email: 'john@example.com',
          username: 'johndoe',
          password: 'TestPass123',
          firstName: 'John',
          lastName: 'Doe'
        })
      }, { timeout: 3000 })
    })

    it('should call register function with minimal required data', async () => {
      const mockRegister = vi.fn().mockResolvedValue({ success: true })
      mockAuthStore.register = mockRegister

      render(<RegisterForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const usernameInput = screen.getByLabelText(/username/i)
      const passwordInput = screen.getByLabelText('Password')
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
      const termsCheckbox = screen.getByLabelText(/i accept the/i)
      const submitButton = screen.getByRole('button', { name: /create account/i })

      await userEvent.type(emailInput, 'test@example.com')
      await userEvent.type(usernameInput, 'testuser')
      await userEvent.type(passwordInput, 'TestPass123')
      await userEvent.type(confirmPasswordInput, 'TestPass123')
      await userEvent.click(termsCheckbox)
      await userEvent.click(submitButton)

      await waitFor(() => {
        expect(mockRegister).toHaveBeenCalledWith({
          email: 'test@example.com',
          username: 'testuser',
          password: 'TestPass123',
          firstName: undefined,
          lastName: undefined
        })
      })
    })

    it('should navigate to dashboard on successful registration', async () => {
      const mockRegister = vi.fn().mockResolvedValue({ success: true })
      mockAuthStore.register = mockRegister

      render(<RegisterForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const usernameInput = screen.getByLabelText(/username/i)
      const passwordInput = screen.getByLabelText('Password')
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
      const termsCheckbox = screen.getByLabelText(/i accept the/i)
      const submitButton = screen.getByRole('button', { name: /create account/i })

      await userEvent.type(emailInput, 'test@example.com')
      await userEvent.type(usernameInput, 'testuser')
      await userEvent.type(passwordInput, 'TestPass123')
      await userEvent.type(confirmPasswordInput, 'TestPass123')
      await userEvent.click(termsCheckbox)
      await userEvent.click(submitButton)

      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard')
      })
    })

    it('should handle empty optional fields correctly', async () => {
      const mockRegister = vi.fn().mockResolvedValue({ success: true })
      mockAuthStore.register = mockRegister

      render(<RegisterForm />)

      const firstNameInput = screen.getByLabelText(/first name/i)
      const lastNameInput = screen.getByLabelText(/last name/i)
      const emailInput = screen.getByLabelText(/email address/i)
      const usernameInput = screen.getByLabelText(/username/i)
      const passwordInput = screen.getByLabelText('Password')
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
      const termsCheckbox = screen.getByLabelText(/i accept the/i)
      const submitButton = screen.getByRole('button', { name: /create account/i })

      // Add spaces to test trimming to empty
      await userEvent.type(firstNameInput, '   ')
      await userEvent.type(lastNameInput, '   ')
      await userEvent.type(emailInput, 'test@example.com')
      await userEvent.type(usernameInput, 'testuser')
      await userEvent.type(passwordInput, 'TestPass123')
      await userEvent.type(confirmPasswordInput, 'TestPass123')
      await userEvent.click(termsCheckbox)
      await userEvent.click(submitButton)

      await waitFor(() => {
        expect(mockRegister).toHaveBeenCalledWith({
          email: 'test@example.com',
          username: 'testuser',
          password: 'TestPass123',
          firstName: undefined,
          lastName: undefined
        })
      })
    })
  })

  describe('Failed Registration Handling', () => {
    it('should handle registration failure', async () => {
      const mockRegister = vi.fn().mockResolvedValue({
        success: false,
        error: 'Email already exists'
      })
      mockAuthStore.register = mockRegister

      render(<RegisterForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const usernameInput = screen.getByLabelText(/username/i)
      const passwordInput = screen.getByLabelText('Password')
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
      const termsCheckbox = screen.getByLabelText(/i accept the/i)
      const submitButton = screen.getByRole('button', { name: /create account/i })

      await userEvent.type(emailInput, 'existing@example.com')
      await userEvent.type(usernameInput, 'testuser')
      await userEvent.type(passwordInput, 'TestPass123')
      await userEvent.type(confirmPasswordInput, 'TestPass123')
      await userEvent.click(termsCheckbox)
      await userEvent.click(submitButton)

      await waitFor(() => {
        expect(mockRegister).toHaveBeenCalled()
        expect(mockNavigate).not.toHaveBeenCalled()
      })
    })

    it('should handle network errors gracefully', async () => {
      const mockRegister = vi.fn().mockRejectedValue(new Error('Network error'))
      mockAuthStore.register = mockRegister

      render(<RegisterForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const usernameInput = screen.getByLabelText(/username/i)
      const passwordInput = screen.getByLabelText('Password')
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
      const termsCheckbox = screen.getByLabelText(/i accept the/i)
      const submitButton = screen.getByRole('button', { name: /create account/i })

      await userEvent.type(emailInput, 'test@example.com')
      await userEvent.type(usernameInput, 'testuser')
      await userEvent.type(passwordInput, 'TestPass123')
      await userEvent.type(confirmPasswordInput, 'TestPass123')
      await userEvent.click(termsCheckbox)
      await userEvent.click(submitButton)

      await waitFor(() => {
        expect(mockRegister).toHaveBeenCalled()
        expect(mockNavigate).not.toHaveBeenCalled()
      })
    })
  })

  describe('Form Submission Prevention', () => {
    it('should prevent submission when form is loading', async () => {
      mockAuthStore.isLoading = true
      const mockRegister = vi.fn()
      mockAuthStore.register = mockRegister

      render(<RegisterForm />)

      const submitButton = screen.getByRole('button')
      expect(submitButton).toBeDisabled()

      // Try to submit (should not work due to disabled state)
      await userEvent.click(submitButton)
      expect(mockRegister).not.toHaveBeenCalled()
    })
  })

  describe('Complex Password Requirements', () => {
    it('should accept valid complex password', async () => {
      const mockRegister = vi.fn().mockResolvedValue({ success: true })
      mockAuthStore.register = mockRegister

      render(<RegisterForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const usernameInput = screen.getByLabelText(/username/i)
      const passwordInput = screen.getByLabelText('Password')
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
      const termsCheckbox = screen.getByLabelText(/i accept the/i)
      const submitButton = screen.getByRole('button', { name: /create account/i })

      await userEvent.type(emailInput, 'test@example.com')
      await userEvent.type(usernameInput, 'testuser')
      await userEvent.type(passwordInput, 'ComplexPass123!')
      await userEvent.type(confirmPasswordInput, 'ComplexPass123!')
      await userEvent.click(termsCheckbox)
      await userEvent.click(submitButton)

      await waitFor(() => {
        expect(mockRegister).toHaveBeenCalled()
      })
    })
  })

  describe('Keyboard Navigation', () => {
    it('should support basic keyboard navigation', async () => {
      render(<RegisterForm />)

      const firstNameInput = screen.getByLabelText(/first name/i)
      firstNameInput.focus()
      expect(document.activeElement).toBe(firstNameInput)
    })

    it('should submit form on Enter key in last field', async () => {
      const mockRegister = vi.fn().mockResolvedValue({ success: true })
      mockAuthStore.register = mockRegister

      render(<RegisterForm />)

      const emailInput = screen.getByLabelText(/email address/i)
      const usernameInput = screen.getByLabelText(/username/i)
      const passwordInput = screen.getByLabelText('Password')
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
      const termsCheckbox = screen.getByLabelText(/i accept the/i)

      await userEvent.type(emailInput, 'test@example.com')
      await userEvent.type(usernameInput, 'testuser')
      await userEvent.type(passwordInput, 'TestPass123')
      await userEvent.type(confirmPasswordInput, 'TestPass123')
      await userEvent.click(termsCheckbox)
      await userEvent.type(confirmPasswordInput, '{enter}')

      await waitFor(() => {
        expect(mockRegister).toHaveBeenCalled()
      })
    })
  })
})