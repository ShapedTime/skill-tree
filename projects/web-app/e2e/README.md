# E2E Testing Framework - SkillTree Authentication

This directory contains comprehensive end-to-end testing for the SkillTree authentication system using Playwright.

## 🏗️ Architecture Overview

The E2E testing framework follows a structured approach with Page Object Models, test utilities, and comprehensive test coverage:

```
e2e/
├── auth/                     # Authentication test suites
│   ├── login.spec.ts         # Login flow tests
│   ├── register.spec.ts      # Registration flow tests
│   └── protected-routes.spec.ts # Route protection tests
├── pages/                    # Page Object Models
│   ├── BasePage.ts          # Common page functionality
│   ├── LoginPage.ts         # Login page interactions
│   ├── RegisterPage.ts      # Registration page interactions
│   └── DashboardPage.ts     # Dashboard page interactions
├── fixtures/                 # Test data and fixtures
│   └── test-data.ts         # Centralized test data
├── utils/                    # Test utilities and helpers
│   └── test-helpers.ts      # Common test functions
└── README.md                # This file
```

## 🧪 Test Suites

### 1. Login Flow Tests (`auth/login.spec.ts`)
- **Happy Path**: Successful login scenarios
- **Error Scenarios**: Invalid credentials, network errors
- **Form Validation**: Email format, required fields, client-side validation
- **Loading States**: UI feedback during authentication
- **Session Management**: Remember me, session persistence
- **Security**: XSS/CSRF protection, password security
- **Accessibility**: Keyboard navigation, screen reader support
- **Performance**: Login speed benchmarks
- **Cross-browser**: Chrome, Firefox, Safari compatibility
- **Mobile**: Responsive design testing

### 2. Registration Flow Tests (`auth/register.spec.ts`)
- **Happy Path**: Successful registration and account creation
- **Form Validation**: Email format, password strength, field requirements
- **Error Scenarios**: Duplicate email/username, server errors
- **Password Security**: Strength indicators, confirmation matching
- **Terms of Service**: Acceptance requirement and validation
- **Loading States**: UI feedback during registration
- **Integration**: Registration-to-login flow
- **Security**: Input sanitization, XSS protection
- **Accessibility**: Complete form accessibility testing
- **Mobile**: Touch interactions and responsive design

### 3. Protected Routes Tests (`auth/protected-routes.spec.ts`)
- **Access Control**: Unauthenticated redirect to login
- **Route Protection**: Dashboard, profile, skill trees access
- **Session Management**: Token refresh, session persistence
- **Logout Functionality**: Complete session cleanup
- **Security**: CSRF protection, permission validation
- **Edge Cases**: Corrupted tokens, network failures
- **Performance**: Route navigation speed
- **Cross-browser**: Consistent protection across browsers

## 🔧 Key Features

### Page Object Model Pattern
- **Encapsulation**: All page interactions in dedicated classes
- **Reusability**: Common functionality shared across tests
- **Maintainability**: Changes to UI update in one place
- **Type Safety**: Full TypeScript support with interfaces

### Comprehensive Test Data Management
- **Fixtures**: Centralized test data for consistency
- **Dynamic Generation**: Unique users for test isolation
- **Validation Cases**: Predefined scenarios for edge testing
- **Error Messages**: Expected error text for assertions

### Advanced Test Utilities
- **Setup/Teardown**: Automatic authentication state management
- **Assertions**: Custom assertions for common patterns
- **Network Mocking**: API response simulation for error testing
- **Performance Monitoring**: Built-in timing measurements

### Cross-browser Testing
- **Chromium**: Desktop Chrome testing
- **Firefox**: Desktop Firefox testing
- **WebKit**: Desktop Safari testing
- **Mobile Chrome**: Android device simulation
- **Mobile Safari**: iOS device simulation
- **Tablet**: iPad Pro device simulation

## 🚀 Running Tests

### Basic Commands

```bash
# Run all E2E tests
npm run test:e2e

# Run with UI mode (interactive)
npm run test:e2e:ui

# Run in debug mode
npm run test:e2e:debug

# Run with browser visible (headed mode)
npm run test:e2e:headed
```

### Browser-specific Testing

```bash
# Test on specific browsers
npm run test:e2e:chromium
npm run test:e2e:firefox
npm run test:e2e:webkit

# Test on mobile devices
npm run test:e2e:mobile
```

### Test Suite Specific

```bash
# Run only authentication tests
npm run test:e2e:auth

# Run all tests (unit + E2E)
npm run test:all

# View test reports
npm run test:e2e:report
```

## 📊 Test Configuration

The Playwright configuration (`playwright.config.ts`) includes:

### Execution Settings
- **Parallel Execution**: All tests run in parallel for speed
- **Retries**: Automatic retry on failure (CI: 2 retries, local: 0)
- **Timeouts**: 30s per test, 5s for assertions
- **Workers**: All CPU cores locally, 1 worker on CI

### Recording and Debugging
- **Screenshots**: Captured on failure
- **Videos**: Recorded on failure
- **Traces**: Collected on first retry for debugging
- **Console Logs**: Captured for analysis

### Browser Matrix
- **Desktop**: Chrome, Firefox, Safari
- **Mobile**: Pixel 5 (Chrome), iPhone 12 (Safari)
- **Tablet**: iPad Pro for responsive testing

## 🛠️ Development Server Integration

Tests automatically start the development server:
- **URL**: `http://localhost:3000`
- **Command**: `npm run dev`
- **Timeout**: 2 minutes for server startup
- **Reuse**: Existing server reused in development

## 📝 Writing New Tests

### Test Structure Template

```typescript
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestHelpers, setupTest, teardownTest } from '../utils/test-helpers';

test.describe('Feature Tests', () => {
  let loginPage: LoginPage;
  let helpers: TestHelpers;

  test.beforeEach(async ({ page }) => {
    helpers = await setupTest(page);
    loginPage = new LoginPage(page);
  });

  test.afterEach(async ({ page }) => {
    await teardownTest(page);
  });

  test('should test feature functionality', async () => {
    // Arrange
    // Act
    // Assert
  });
});
```

### Page Object Template

```typescript
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class FeaturePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Page elements
  get elementSelector(): Locator {
    return this.page.locator('[data-testid="element"]');
  }

  // Page actions
  async performAction(): Promise<void> {
    await this.elementSelector.click();
  }

  // Page assertions
  async assertExpectedState(): Promise<void> {
    await expect(this.elementSelector).toBeVisible();
  }
}
```

## 🎯 Best Practices

### Test Data Management
- **Use unique data**: Generate unique users for each test
- **Centralize fixtures**: Keep test data in `fixtures/test-data.ts`
- **Clean up**: Clear authentication state between tests

### Page Object Guidelines
- **Single responsibility**: One page object per page/component
- **Descriptive methods**: Clear method names for actions and assertions
- **Error handling**: Proper timeout and error handling
- **Type safety**: Use TypeScript interfaces and types

### Test Organization
- **Group related tests**: Use `test.describe()` for logical grouping
- **Descriptive names**: Clear test names explaining what is tested
- **Independent tests**: Each test should be able to run independently
- **Setup/cleanup**: Use beforeEach/afterEach for consistent state

### Performance Considerations
- **Parallel execution**: Tests run in parallel by default
- **Selective testing**: Use `test.only()` for development (remove before commit)
- **Timeout management**: Set appropriate timeouts for slow operations
- **Resource cleanup**: Clean up resources in afterEach hooks

## 🔍 Debugging Tests

### Local Debugging
```bash
# Run in debug mode (step through tests)
npm run test:e2e:debug

# Run with browser visible
npm run test:e2e:headed

# Run specific test file
npx playwright test e2e/auth/login.spec.ts --debug
```

### CI/CD Debugging
- **Artifacts**: Screenshots and videos saved on failure
- **Traces**: Detailed execution traces for analysis
- **Logs**: Console output captured and saved

### Common Issues
1. **Timeouts**: Increase timeout for slow operations
2. **Flaky tests**: Add proper wait conditions
3. **Element not found**: Check selectors and timing
4. **Authentication issues**: Verify test data and setup

## 📈 Coverage and Metrics

The E2E test suite covers:

### Authentication Flows
- ✅ User login (happy path + error scenarios)
- ✅ User registration (validation + edge cases)
- ✅ Session management (persistence + cleanup)
- ✅ Route protection (access control + security)

### Browser Compatibility
- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari/WebKit (latest)
- ✅ Mobile Chrome (Android)
- ✅ Mobile Safari (iOS)

### Device Coverage
- ✅ Desktop (1920x1080, 1280x720)
- ✅ Tablet (iPad Pro)
- ✅ Mobile (iPhone, Pixel)

### Security Testing
- ✅ XSS protection
- ✅ CSRF protection
- ✅ SQL injection prevention
- ✅ Session security
- ✅ Input validation

## 🤝 Contributing

When adding new E2E tests:

1. **Follow patterns**: Use existing Page Objects and utilities
2. **Add test data**: Update `fixtures/test-data.ts` as needed
3. **Document changes**: Update this README for new features
4. **Test thoroughly**: Verify tests pass on all browsers
5. **Code review**: Have tests reviewed before merging

## 📚 Related Documentation

- [Project Brief](../../docs/SkillTree%20-%20Project%20Brief%20v2.0.md)
- [Frontend Architecture](../../docs/architecture/decisions/ADR-001-frontend-technology-stack.md)
- [Unit Testing](../src/test/README.md)
- [API Documentation](../../api-gateway/docs/api.md)

---

This E2E testing framework ensures the SkillTree authentication system works reliably across all supported browsers and devices, providing confidence in the user experience and security of the application.