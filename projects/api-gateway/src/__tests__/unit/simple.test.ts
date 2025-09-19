import { describe, it, expect } from '@jest/globals'

describe('Simple Test', () => {
  it('should pass basic arithmetic test', () => {
    expect(2 + 2).toBe(4)
  })

  it('should handle basic string operations', () => {
    const str = 'hello'
    expect(str.toUpperCase()).toBe('HELLO')
  })
})