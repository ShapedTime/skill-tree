import { describe, it, expect } from 'vitest'

// Simple smoke test to verify test infrastructure
describe('Test Infrastructure Smoke Test', () => {
  it('should have basic testing functionality', () => {
    expect(true).toBe(true)
    expect(expect).toBeDefined()
  })

  it('should support async tests', async () => {
    const promise = Promise.resolve('hello')
    const result = await promise
    expect(result).toBe('hello')
  })

  it('should have MSW mocks available', async () => {
    // This test verifies that our MSW setup is working
    const response = await fetch('http://localhost:8000/api/health')
    const data = await response.json()

    expect(data.success).toBe(true)
    expect(data.message).toBe('API is healthy')
  })
})