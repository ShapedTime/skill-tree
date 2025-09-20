import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'

// Simple React component for testing
const TestComponent: React.FC<{ message: string }> = ({ message }) => {
  return <div data-testid="test-message">{message}</div>
}

// React component smoke tests
describe('React Component Testing', () => {
  it('should render a React component', () => {
    render(<TestComponent message="Hello Testing World!" />)

    expect(screen.getByTestId('test-message')).toBeInTheDocument()
    expect(screen.getByText('Hello Testing World!')).toBeInTheDocument()
  })

  it('should support component props', () => {
    const customMessage = 'Custom test message'
    render(<TestComponent message={customMessage} />)

    expect(screen.getByText(customMessage)).toBeInTheDocument()
  })

  it('should have access to testing-library utilities', () => {
    render(<TestComponent message="Test" />)

    // Test query methods
    expect(screen.getByTestId('test-message')).toBeInTheDocument()
    expect(screen.queryByTestId('non-existent')).not.toBeInTheDocument()
    expect(screen.getAllByTestId('test-message')).toHaveLength(1)
  })
})