# Testing Infrastructure Setup

This directory contains the comprehensive testing infrastructure for the SkillTree frontend application.

## Overview

Phase 1 of the testing infrastructure has been successfully implemented with >80% coverage requirements and complete MSW mocking for auth endpoints.

## Structure

```
src/test/
├── setup.ts              # Test environment configuration
├── mocks/                 # MSW mock server setup
│   ├── server.ts         # Node.js mock server for tests
│   ├── browser.ts        # Browser mock server for development
│   └── auth.handlers.ts  # Auth endpoint mocks
├── utils/                # Test utilities and factories
│   ├── index.ts          # Main exports
│   ├── test-utils.tsx    # Custom render functions with providers
│   ├── auth.factory.ts   # Test data factories for auth
│   └── auth.test-utils.ts # Auth-specific test utilities
├── smoke.test.ts         # Basic infrastructure smoke tests
└── react.test.tsx        # React component testing verification
```

## Key Features

### ✅ Dependencies Installed
- @testing-library/react, @testing-library/jest-dom, @testing-library/user-event
- vitest, @vitest/ui, @vitest/coverage-v8
- jsdom for DOM environment
- msw for API mocking
- @faker-js/faker for test data generation

### ✅ Vitest Configuration
- **File**: `vitest.config.ts`
- ESM support for modern React
- jsdom environment for DOM testing
- Path aliases (@/ for src/)
- Coverage thresholds (80% minimum)
- Global test setup

### ✅ MSW Mock Server
- Complete auth endpoint mocking
- Success and error scenario support
- Token management simulation
- Network error simulation
- Separate browser and Node.js configurations

### ✅ Test Utilities
- Custom render function with providers
- Auth state mocking utilities
- Test data factories using faker
- Reusable test helpers

### ✅ TypeScript Configuration
- **File**: `tsconfig.json`
- Strict mode enabled
- Vitest globals support
- Path mapping for imports
- Testing library types included

## Available Scripts

```bash
npm test              # Run tests in watch mode
npm run test:ui       # Run tests with UI
npm run test:coverage # Run tests with coverage report
```

## Coverage Requirements

- **Statements**: 80% minimum
- **Branches**: 80% minimum
- **Functions**: 80% minimum
- **Lines**: 80% minimum

## MSW Mock Endpoints

All authentication endpoints are mocked:

- `GET /api/health` - Health check
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/refresh` - Token refresh
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

## Test Data Factories

Pre-built factories for consistent test data:

- `createMockUser()` - Generate realistic user data
- `createMockLoginDto()` - Login form data
- `createMockRegisterDto()` - Registration form data
- `createMockAuthResponse()` - Auth API responses
- `TEST_USERS` - Predefined test scenarios

## Next Steps (Phase 2)

Ready for component testing implementation:
1. Auth form components (LoginForm, RegisterForm)
2. Route protection testing
3. User interaction flows
4. Error handling scenarios
5. Integration with real auth flow

## Usage Example

```tsx
import { render, screen, userEvent } from '../test/utils'
import { createMockUser } from '../test/utils/auth.factory'

test('should render user profile', () => {
  const mockUser = createMockUser({ username: 'testuser' })

  render(<UserProfile user={mockUser} />)

  expect(screen.getByText('testuser')).toBeInTheDocument()
})
```

The testing infrastructure is now ready for comprehensive component and integration testing!