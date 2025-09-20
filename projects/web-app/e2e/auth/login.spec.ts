/**
 * Login Flow E2E Tests
 *
 * Comprehensive end-to-end testing for user login functionality including
 * happy paths, error scenarios, form validation, and cross-browser compatibility.
 */

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { TestHelpers, setupTest, teardownTest } from '../utils/test-helpers';
import {
  TEST_USERS,
  INVALID_CREDENTIALS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  ROUTES,
  TIMEOUTS,
  generateUniqueCredentials,
} from '../fixtures/test-data';

test.describe('Login Flow E2E Tests', () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;
  let helpers: TestHelpers;

  test.beforeEach(async ({ page }) => {
    helpers = await setupTest(page);
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    // Navigate to login page
    await loginPage.navigate();
    await loginPage.assertOnLoginPage();
  });

  test.afterEach(async ({ page }) => {
    await teardownTest(page);
  });

  test.describe('Happy Path - Successful Login', () => {
    test('should successfully log in with valid credentials', async () => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Act
      await loginPage.login(credentials);

      // Assert
      await loginPage.assertLoginSuccess();
      await dashboardPage.assertOnDashboardPage();
      await dashboardPage.assertUserIsAuthenticated();
      await dashboardPage.assertUserInfo(credentials.username, credentials.email);
    });

    test('should successfully log in with Enter key submission', async () => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Act
      await loginPage.loginWithEnterKey(credentials);

      // Assert
      await loginPage.assertLoginSuccess();
      await dashboardPage.assertOnDashboardPage();
      await dashboardPage.assertUserIsAuthenticated();
    });

    test('should successfully log in with Remember Me checked', async () => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Act
      await loginPage.login(credentials, true);

      // Assert
      await loginPage.assertLoginSuccess();
      await dashboardPage.assertOnDashboardPage();

      // Verify session persistence
      await dashboardPage.testSessionPersistence();
    });

    test('should redirect to intended page after login', async ({ page }) => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;
      const intendedRoute = ROUTES.PROFILE;

      // Try to access protected route first (should redirect to login)
      await page.goto(intendedRoute);
      await loginPage.assertOnLoginPage();

      // Act
      await loginPage.login(credentials);

      // Assert - should redirect to originally intended page
      await helpers.navigation.waitForNavigation(intendedRoute);
      await expect(page).toHaveURL(intendedRoute);
    });
  });

  test.describe('Error Scenarios - Invalid Credentials', () => {
    test('should show error for wrong password', async () => {
      // Arrange
      const credentials = INVALID_CREDENTIALS.WRONG_PASSWORD;

      // Act
      await loginPage.login(credentials);

      // Assert
      await loginPage.assertInvalidCredentialsError();
      await expect(loginPage.page).toHaveURL(ROUTES.LOGIN);
    });

    test('should show error for nonexistent user', async () => {
      // Arrange
      const credentials = INVALID_CREDENTIALS.NONEXISTENT_USER;

      // Act
      await loginPage.login(credentials);

      // Assert
      await loginPage.assertInvalidCredentialsError();
      await expect(loginPage.page).toHaveURL(ROUTES.LOGIN);
    });

    test('should show error for invalid email format', async () => {
      // Arrange
      const credentials = INVALID_CREDENTIALS.INVALID_EMAIL;

      // Act
      await loginPage.fillCredentials(credentials);
      await loginPage.submitLogin();

      // Assert
      await loginPage.assertEmailError();
    });

    test('should show error for empty credentials', async () => {
      // Arrange
      const credentials = INVALID_CREDENTIALS.EMPTY_FIELDS;

      // Act
      await loginPage.fillCredentials(credentials);
      await loginPage.submitLogin();

      // Assert
      await loginPage.assertFormFieldsRequired();
      await loginPage.assertEmailError();
      await loginPage.assertPasswordError();
    });
  });

  test.describe('Form Validation', () => {
    test('should validate email field format', async () => {
      // Test various invalid email formats
      const invalidEmails = ['invalid', 'test@', '@domain.com', 'test..test@domain.com'];

      for (const email of invalidEmails) {
        await loginPage.fillEmail(email);
        await loginPage.fillPassword('validpassword');
        await loginPage.submitLogin();

        await loginPage.assertEmailError();

        // Clear form for next iteration
        await loginPage.fillEmail('');
        await loginPage.fillPassword('');
      }
    });

    test('should validate required fields', async () => {
      // Test empty email
      await loginPage.fillEmail('');
      await loginPage.fillPassword('validpassword');
      await loginPage.submitLogin();
      await loginPage.assertEmailError();

      // Test empty password
      await loginPage.fillEmail('test@example.com');
      await loginPage.fillPassword('');
      await loginPage.submitLogin();
      await loginPage.assertPasswordError();
    });

    test('should disable submit button when form is invalid', async () => {
      // Initially, button should be disabled with empty form
      await expect(loginPage.isLoginButtonDisabled()).resolves.toBe(true);

      // Fill email only
      await loginPage.fillEmail('test@example.com');
      await expect(loginPage.isLoginButtonDisabled()).resolves.toBe(true);

      // Fill password - button should now be enabled
      await loginPage.fillPassword('password');
      await expect(loginPage.isLoginButtonEnabled()).resolves.toBe(true);
    });

    test('should show/hide password functionality', async () => {
      // Arrange
      const password = 'testpassword123';

      // Act
      await loginPage.fillPassword(password);

      // Initially password should be hidden
      await expect(loginPage.isPasswordVisible()).resolves.toBe(false);

      // Toggle visibility
      await loginPage.togglePasswordVisibility();
      await expect(loginPage.isPasswordVisible()).resolves.toBe(true);

      // Toggle back
      await loginPage.togglePasswordVisibility();
      await expect(loginPage.isPasswordVisible()).resolves.toBe(false);
    });
  });

  test.describe('Loading States and UX', () => {
    test('should show loading state during login', async () => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Mock slower API response to observe loading state
      await helpers.network.mockApiError('/api/auth/login', 200, { success: true });

      // Act
      await loginPage.fillCredentials(credentials);
      await loginPage.clickLogin();

      // Assert
      await loginPage.assertLoadingState();
    });

    test('should handle network errors gracefully', async () => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Mock network failure
      await helpers.network.mockNetworkFailure('/api/auth/login');

      // Act
      await loginPage.login(credentials);

      // Assert
      await loginPage.assertNetworkError();
    });

    test('should handle server errors gracefully', async () => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Mock server error
      await helpers.network.mockApiError('/api/auth/login', 500, {
        error: 'Internal server error'
      });

      // Act
      await loginPage.login(credentials);

      // Assert
      await loginPage.assertServerError();
    });
  });

  test.describe('Navigation and Links', () => {
    test('should navigate to register page', async () => {
      // Act
      await loginPage.goToRegister();

      // Assert
      await expect(loginPage.page).toHaveURL(ROUTES.REGISTER);
    });

    test('should navigate to forgot password page', async () => {
      // Act
      await loginPage.goToForgotPassword();

      // Assert
      // URL will depend on your forgot password implementation
      await helpers.navigation.waitForNavigation();
    });

    test('should redirect authenticated user from login page', async () => {
      // Arrange - login first
      const credentials = TEST_USERS.VALID_USER;
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Act - try to go back to login page
      await loginPage.navigate();

      // Assert - should redirect to dashboard
      await dashboardPage.assertOnDashboardPage();
    });
  });

  test.describe('Session Management', () => {
    test('should maintain session across page refresh', async () => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Act
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Refresh page
      await loginPage.page.reload();
      await helpers.navigation.waitForNavigation();

      // Assert - should still be logged in
      await dashboardPage.assertUserIsAuthenticated();
    });

    test('should maintain session across new tabs', async () => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Act
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Open new tab
      const newPage = await loginPage.page.context().newPage();
      await newPage.goto(ROUTES.DASHBOARD);

      const newDashboard = new DashboardPage(newPage);
      await newDashboard.assertUserIsAuthenticated();

      await newPage.close();
    });

    test('should handle concurrent logins gracefully', async () => {
      // This test simulates a user logging in from multiple devices
      const credentials = TEST_USERS.VALID_USER;

      // Login in first browser context
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Create new browser context (simulates different device)
      const newContext = await loginPage.page.context().browser()?.newContext();
      if (newContext) {
        const newPage = await newContext.newPage();
        const newLoginPage = new LoginPage(newPage);
        const newDashboardPage = new DashboardPage(newPage);

        await newLoginPage.navigate();
        await newLoginPage.login(credentials);
        await newDashboardPage.assertOnDashboardPage();

        // Both sessions should remain valid
        await dashboardPage.assertUserIsAuthenticated();
        await newDashboardPage.assertUserIsAuthenticated();

        await newContext.close();
      }
    });
  });

  test.describe('Accessibility and Keyboard Navigation', () => {
    test('should support keyboard navigation', async () => {
      // Test tab navigation through form
      await loginPage.testKeyboardNavigation();
    });

    test('should have proper accessibility attributes', async () => {
      // Test form accessibility
      await loginPage.checkFormAccessibility();
    });

    test('should support screen reader users', async () => {
      // Check for proper ARIA labels and descriptions
      await expect(loginPage.emailInput).toHaveAttribute('aria-label');
      await expect(loginPage.passwordInput).toHaveAttribute('aria-label');
      await expect(loginPage.loginButton).toHaveAttribute('aria-label');
    });
  });

  test.describe('Performance', () => {
    test('should complete login within performance budget', async () => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;
      const maxLoginTime = 3000; // 3 seconds

      // Act & Assert
      const loginTime = await loginPage.measureLoginPerformance(credentials);
      expect(loginTime).toBeLessThan(maxLoginTime);
    });

    test('should handle multiple rapid login attempts', async () => {
      // Test rapid clicking of login button
      const credentials = TEST_USERS.VALID_USER;

      await loginPage.fillCredentials(credentials);

      // Rapidly click login button multiple times
      await Promise.all([
        loginPage.clickLogin(),
        loginPage.clickLogin(),
        loginPage.clickLogin(),
      ]);

      // Should still login successfully (no duplicate requests)
      await loginPage.assertLoginSuccess();
      await dashboardPage.assertOnDashboardPage();
    });
  });

  test.describe('Cross-browser Compatibility', () => {
    test('should work consistently across browsers', async ({ browserName }) => {
      // This test will run automatically across all configured browsers
      const credentials = TEST_USERS.VALID_USER;

      await loginPage.login(credentials);
      await loginPage.assertLoginSuccess();
      await dashboardPage.assertOnDashboardPage();

      // Browser-specific validations could be added here
      console.log(`Login test completed successfully on ${browserName}`);
    });
  });

  test.describe('Mobile Responsiveness', () => {
    test('should work on mobile devices', async () => {
      // Test mobile login flow
      const credentials = TEST_USERS.VALID_USER;

      await loginPage.testMobileLogin(credentials);
      await dashboardPage.assertOnDashboardPage();
    });

    test('should adapt to different screen sizes', async () => {
      const credentials = TEST_USERS.VALID_USER;

      // Test on different viewport sizes
      const viewports = [
        { width: 375, height: 667 },  // iPhone
        { width: 768, height: 1024 }, // iPad
        { width: 1920, height: 1080 } // Desktop
      ];

      for (const viewport of viewports) {
        await loginPage.page.setViewportSize(viewport);
        await loginPage.assertOnLoginPage();

        await loginPage.login(credentials);
        await dashboardPage.assertOnDashboardPage();

        // Reset for next iteration
        await helpers.auth.logout();
        await loginPage.navigate();
      }
    });
  });

  test.describe('Security', () => {
    test('should not expose password in URL or console', async () => {
      const credentials = TEST_USERS.VALID_USER;

      // Monitor console for any password leaks
      const consoleMessages: string[] = [];
      loginPage.page.on('console', msg => {
        consoleMessages.push(msg.text());
      });

      await loginPage.login(credentials);

      // Check that password is not in URL
      const currentUrl = loginPage.page.url();
      expect(currentUrl).not.toContain(credentials.password);

      // Check that password is not in console
      const hasPasswordInConsole = consoleMessages.some(msg =>
        msg.includes(credentials.password)
      );
      expect(hasPasswordInConsole).toBe(false);
    });

    test('should handle SQL injection attempts safely', async () => {
      // Test SQL injection payloads
      const sqlInjectionPayloads = [
        "'; DROP TABLE users; --",
        "admin'--",
        "' OR '1'='1",
        "' UNION SELECT password FROM users --"
      ];

      for (const payload of sqlInjectionPayloads) {
        await loginPage.fillEmail(`test${payload}@example.com`);
        await loginPage.fillPassword(`password${payload}`);
        await loginPage.submitLogin();

        // Should show normal validation error, not crash
        await loginPage.assertInvalidCredentialsError();

        // Clear form for next iteration
        await loginPage.fillEmail('');
        await loginPage.fillPassword('');
      }
    });
  });
});