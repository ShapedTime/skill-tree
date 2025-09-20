import React from 'react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { screen } from '@testing-library/react'
import ProtectedRoute from '../ProtectedRoute'
import { render, mockAuthStore } from '../../../test/utils'
import { createMockUser } from '../../../test/utils/auth.factory'

// Mock the useAuth hook
vi.mock('../../../hooks/useAuth', () => ({
  useAuth: () => mockAuthStore
}))

// Mock Navigate component
const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    Navigate: (props: any) => {
      mockNavigate(props)
      return <div data-testid="navigate" data-to={props.to} data-replace={props.replace} />
    },
    useLocation: () => ({
      pathname: '/dashboard',
      search: '',
      hash: '',
      state: null,
      key: 'default'
    })
  }
})

describe('ProtectedRoute', () => {
  const TestComponent = () => <div data-testid="protected-content">Protected Content</div>

  beforeEach(() => {
    vi.clearAllMocks()
    mockNavigate.mockClear()
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

  describe('Loading State', () => {
    it('should display loading state while checking authentication', () => {
      mockAuthStore.isLoading = true
      mockAuthStore.isAuthenticated = false

      render(
        <ProtectedRoute>
          <TestComponent />
        </ProtectedRoute>
      )

      expect(screen.getByText('Checking authentication...')).toBeInTheDocument()

      // Check for loading spinner by its classes
      const spinner = document.querySelector('.animate-spin')
      expect(spinner).toBeInTheDocument()

      expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument()
      expect(screen.queryByTestId('navigate')).not.toBeInTheDocument()
    })

    it('should show loading spinner with correct styling', () => {
      mockAuthStore.isLoading = true

      render(
        <ProtectedRoute>
          <TestComponent />
        </ProtectedRoute>
      )

      const loadingContainer = screen.getByText('Checking authentication...').closest('div')
      expect(loadingContainer).toHaveClass('text-center')

      const spinner = document.querySelector('.animate-spin')
      expect(spinner).toHaveClass('animate-spin', 'rounded-full', 'h-12', 'w-12', 'border-b-2', 'border-blue-600')
    })

    it('should have proper loading state layout', () => {
      mockAuthStore.isLoading = true

      render(
        <ProtectedRoute>
          <TestComponent />
        </ProtectedRoute>
      )

      const container = screen.getByText('Checking authentication...').closest('.min-h-screen')
      expect(container).toHaveClass('bg-gray-50', 'flex', 'items-center', 'justify-center')
    })
  })

  describe('Unauthenticated Access', () => {
    it('should redirect to login when not authenticated', () => {
      mockAuthStore.isAuthenticated = false
      mockAuthStore.isLoading = false

      render(
        <ProtectedRoute>
          <TestComponent />
        </ProtectedRoute>
      )

      expect(mockNavigate).toHaveBeenCalledWith({
        to: '/login',
        state: { from: expect.objectContaining({ pathname: '/dashboard' }) },
        replace: true
      })

      expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument()
      expect(screen.queryByText('Checking authentication...')).not.toBeInTheDocument()
    })

    it('should preserve location state for post-login redirect', () => {
      mockAuthStore.isAuthenticated = false
      mockAuthStore.isLoading = false

      render(
        <ProtectedRoute>
          <TestComponent />
        </ProtectedRoute>
      )

      expect(mockNavigate).toHaveBeenCalledWith(
        expect.objectContaining({
          state: {
            from: expect.objectContaining({
              pathname: '/dashboard'
            })
          }
        })
      )
    })

    it('should use replace navigation to prevent back button issues', () => {
      mockAuthStore.isAuthenticated = false
      mockAuthStore.isLoading = false

      render(
        <ProtectedRoute>
          <TestComponent />
        </ProtectedRoute>
      )

      expect(mockNavigate).toHaveBeenCalledWith(
        expect.objectContaining({
          replace: true
        })
      )
    })
  })

  describe('Authenticated Access', () => {
    it('should render children when user is authenticated', () => {
      const mockUser = createMockUser({ emailVerified: true })
      mockAuthStore.isAuthenticated = true
      mockAuthStore.isLoading = false
      mockAuthStore.user = mockUser

      render(
        <ProtectedRoute>
          <TestComponent />
        </ProtectedRoute>
      )

      expect(screen.getByTestId('protected-content')).toBeInTheDocument()
      expect(screen.getByText('Protected Content')).toBeInTheDocument()
      expect(screen.queryByText('Checking authentication...')).not.toBeInTheDocument()
      expect(mockNavigate).not.toHaveBeenCalled()
    })

    it('should render multiple children components', () => {
      const mockUser = createMockUser({ emailVerified: true })
      mockAuthStore.isAuthenticated = true
      mockAuthStore.isLoading = false
      mockAuthStore.user = mockUser

      render(
        <ProtectedRoute>
          <div data-testid="child-1">Child 1</div>
          <div data-testid="child-2">Child 2</div>
          <TestComponent />
        </ProtectedRoute>
      )

      expect(screen.getByTestId('child-1')).toBeInTheDocument()
      expect(screen.getByTestId('child-2')).toBeInTheDocument()
      expect(screen.getByTestId('protected-content')).toBeInTheDocument()
    })

    it('should render nested components correctly', () => {
      const mockUser = createMockUser({ emailVerified: true })
      mockAuthStore.isAuthenticated = true
      mockAuthStore.isLoading = false
      mockAuthStore.user = mockUser

      const NestedComponent = () => (
        <div data-testid="nested-container">
          <h1>Nested Header</h1>
          <TestComponent />
        </div>
      )

      render(
        <ProtectedRoute>
          <NestedComponent />
        </ProtectedRoute>
      )

      expect(screen.getByTestId('nested-container')).toBeInTheDocument()
      expect(screen.getByText('Nested Header')).toBeInTheDocument()
      expect(screen.getByTestId('protected-content')).toBeInTheDocument()
    })
  })

  describe('Email Verification Requirement', () => {
    it('should render children when email verification is not required', () => {
      const mockUser = createMockUser({ emailVerified: false })
      mockAuthStore.isAuthenticated = true
      mockAuthStore.isLoading = false
      mockAuthStore.user = mockUser

      render(
        <ProtectedRoute requireEmailVerification={false}>
            <TestComponent />
        </ProtectedRoute>
      )

      expect(screen.getByTestId('protected-content')).toBeInTheDocument()
      expect(mockNavigate).not.toHaveBeenCalled()
    })

    it('should render children when email verification is required and user email is verified', () => {
      const mockUser = createMockUser({ emailVerified: true })
      mockAuthStore.isAuthenticated = true
      mockAuthStore.isLoading = false
      mockAuthStore.user = mockUser

      render(
        <ProtectedRoute requireEmailVerification={true}>
            <TestComponent />
        </ProtectedRoute>
      )

      expect(screen.getByTestId('protected-content')).toBeInTheDocument()
      expect(mockNavigate).not.toHaveBeenCalled()
    })

    it('should redirect to verify-email when email verification is required but user email is not verified', () => {
      const mockUser = createMockUser({ emailVerified: false })
      mockAuthStore.isAuthenticated = true
      mockAuthStore.isLoading = false
      mockAuthStore.user = mockUser

      render(
        <ProtectedRoute requireEmailVerification={true}>
            <TestComponent />
        </ProtectedRoute>
      )

      expect(mockNavigate).toHaveBeenCalledWith({
        to: '/verify-email',
        replace: true
      })

      expect(screen.queryByTestId('protected-content')).not.toBeInTheDocument()
    })

    it('should handle missing user object gracefully when email verification is required', () => {
      mockAuthStore.isAuthenticated = true
      mockAuthStore.isLoading = false
      mockAuthStore.user = null

      render(
        <ProtectedRoute requireEmailVerification={true}>
            <TestComponent />
        </ProtectedRoute>
      )

      // Should render children since user is null (verification check is skipped)
      expect(screen.getByTestId('protected-content')).toBeInTheDocument()
      expect(mockNavigate).not.toHaveBeenCalled()
    })

    it('should default to not requiring email verification', () => {
      const mockUser = createMockUser({ emailVerified: false })
      mockAuthStore.isAuthenticated = true
      mockAuthStore.isLoading = false
      mockAuthStore.user = mockUser

      render(
        <ProtectedRoute>
          <TestComponent />
        </ProtectedRoute>
      )

      expect(screen.getByTestId('protected-content')).toBeInTheDocument()
      expect(mockNavigate).not.toHaveBeenCalled()
    })
  })

  describe('Authentication State Changes', () => {
    it('should handle auth state change from loading to authenticated', () => {
      // Start with loading state
      mockAuthStore.isLoading = true
      mockAuthStore.isAuthenticated = false
      mockAuthStore.user = null

      const { rerender } = render(
        <ProtectedRoute>
            <TestComponent />
        </ProtectedRoute>
      )

      expect(screen.getByText('Checking authentication...')).toBeInTheDocument()

      // Update to authenticated state
      const mockUser = createMockUser({ emailVerified: true })
      Object.assign(mockAuthStore, {
        isLoading: false,
        isAuthenticated: true,
        user: mockUser
      })

      rerender(
        <ProtectedRoute>
            <TestComponent />
        </ProtectedRoute>
      )

      expect(screen.queryByText('Checking authentication...')).not.toBeInTheDocument()
      expect(screen.getByTestId('protected-content')).toBeInTheDocument()
    })

    it('should handle auth state change from loading to unauthenticated', () => {
      // Start with loading state
      mockAuthStore.isLoading = true
      mockAuthStore.isAuthenticated = false

      const { rerender } = render(
        <ProtectedRoute>
            <TestComponent />
        </ProtectedRoute>
      )

      expect(screen.getByText('Checking authentication...')).toBeInTheDocument()

      // Update to unauthenticated state
      Object.assign(mockAuthStore, {
        isLoading: false,
        isAuthenticated: false,
        user: null
      })

      rerender(
        <ProtectedRoute>
            <TestComponent />
        </ProtectedRoute>
      )

      expect(screen.queryByText('Checking authentication...')).not.toBeInTheDocument()
      expect(mockNavigate).toHaveBeenCalledWith({
        to: '/login',
        state: { from: expect.objectContaining({ pathname: '/dashboard' }) },
        replace: true
      })
    })
  })

  describe('Component Props', () => {
    it('should accept and pass through custom children', () => {
      const mockUser = createMockUser({ emailVerified: true })
      mockAuthStore.isAuthenticated = true
      mockAuthStore.isLoading = false
      mockAuthStore.user = mockUser

      const CustomComponent = ({ title }: { title: string }) => (
        <div data-testid="custom-component">{title}</div>
      )

      render(
        <ProtectedRoute>
            <CustomComponent title="Custom Protected Content" />
        </ProtectedRoute>
      )

      expect(screen.getByTestId('custom-component')).toBeInTheDocument()
      expect(screen.getByText('Custom Protected Content')).toBeInTheDocument()
    })

    it('should handle React fragments as children', () => {
      const mockUser = createMockUser({ emailVerified: true })
      mockAuthStore.isAuthenticated = true
      mockAuthStore.isLoading = false
      mockAuthStore.user = mockUser

      render(
        <ProtectedRoute>
            <>
              <div data-testid="fragment-child-1">Fragment Child 1</div>
              <div data-testid="fragment-child-2">Fragment Child 2</div>
            </>
        </ProtectedRoute>
      )

      expect(screen.getByTestId('fragment-child-1')).toBeInTheDocument()
      expect(screen.getByTestId('fragment-child-2')).toBeInTheDocument()
    })

    it('should handle null and undefined children gracefully', () => {
      const mockUser = createMockUser({ emailVerified: true })
      mockAuthStore.isAuthenticated = true
      mockAuthStore.isLoading = false
      mockAuthStore.user = mockUser

      render(
        <ProtectedRoute>
            {null}
            {undefined}
            <TestComponent />
        </ProtectedRoute>
      )

      expect(screen.getByTestId('protected-content')).toBeInTheDocument()
    })
  })

  describe('Integration Scenarios', () => {
    it('should work with different route configurations', () => {
      const mockUser = createMockUser({ emailVerified: true })
      mockAuthStore.isAuthenticated = true
      mockAuthStore.isLoading = false
      mockAuthStore.user = mockUser

      render(
        <ProtectedRoute>
          <div data-testid="protected-page">Protected Page Content</div>
        </ProtectedRoute>
      )

      expect(screen.getByTestId('protected-page')).toBeInTheDocument()
    })

    it('should maintain proper behavior across multiple renders', () => {
      const mockUser = createMockUser({ emailVerified: true })
      mockAuthStore.isAuthenticated = true
      mockAuthStore.isLoading = false
      mockAuthStore.user = mockUser

      const { rerender } = render(
        <ProtectedRoute>
            <TestComponent />
        </ProtectedRoute>
      )

      expect(screen.getByTestId('protected-content')).toBeInTheDocument()

      // Re-render with same state
      rerender(
        <ProtectedRoute>
            <TestComponent />
        </ProtectedRoute>
      )

      expect(screen.getByTestId('protected-content')).toBeInTheDocument()
      expect(mockNavigate).not.toHaveBeenCalled()
    })
  })
})