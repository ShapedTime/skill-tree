import React, { PropsWithChildren } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { vi } from 'vitest'

// Mock the auth store for testing
export const mockAuthStore = {
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
}

// Create a custom render function that includes providers
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  initialEntries?: string[]
  withRouter?: boolean
  authState?: Partial<typeof mockAuthStore>
}

function createWrapper(options: CustomRenderOptions = {}) {
  const { initialEntries = ['/'], withRouter = true, authState } = options

  return function Wrapper({ children }: PropsWithChildren) {
    // Update mock auth store if authState is provided
    if (authState) {
      Object.assign(mockAuthStore, authState)
    }

    if (withRouter) {
      return (
        <BrowserRouter>
          {children}
        </BrowserRouter>
      )
    }

    return <>{children}</>
  }
}

export function renderWithProviders(
  ui: React.ReactElement,
  options: CustomRenderOptions = {}
) {
  const { withRouter, authState, ...renderOptions } = options

  return render(ui, {
    wrapper: createWrapper({ withRouter, authState }),
    ...renderOptions,
  })
}

// Helper to wait for loading states
export async function waitForLoadingToFinish() {
  // Wait for any pending promises to resolve
  await new Promise((resolve) => setTimeout(resolve, 0))
}

// Helper to simulate user interactions with delays
export const userEvent = {
  async click(element: Element) {
    const { userEvent: testingLibraryUserEvent } = await import('@testing-library/user-event')
    const user = testingLibraryUserEvent.setup()
    await user.click(element)
  },

  async type(element: Element, text: string) {
    const { userEvent: testingLibraryUserEvent } = await import('@testing-library/user-event')
    const user = testingLibraryUserEvent.setup()
    await user.type(element, text)
  },

  async clear(element: Element) {
    const { userEvent: testingLibraryUserEvent } = await import('@testing-library/user-event')
    const user = testingLibraryUserEvent.setup()
    await user.clear(element)
  },

  async selectOptions(element: Element, values: string | string[]) {
    const { userEvent: testingLibraryUserEvent } = await import('@testing-library/user-event')
    const user = testingLibraryUserEvent.setup()
    await user.selectOptions(element, values)
  },

  async upload(element: Element, file: File | File[]) {
    const { userEvent: testingLibraryUserEvent } = await import('@testing-library/user-event')
    const user = testingLibraryUserEvent.setup()
    await user.upload(element, file)
  },
}

// Export everything from testing-library
export * from '@testing-library/react'
export { vi } from 'vitest'

// Re-export our custom render
export { renderWithProviders as render }