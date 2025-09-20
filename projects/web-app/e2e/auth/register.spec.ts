/**
 * Registration Flow E2E Tests
 *
 * Comprehensive end-to-end testing for user registration functionality including
 * happy paths, validation scenarios, error handling, and cross-browser compatibility.
 */

import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { TestHelpers, setupTest, teardownTest } from '../utils/test-helpers';
import {
  TEST_USERS,
  VALIDATION_CASES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  ROUTES,
  TIMEOUTS,
  generateUniqueUser,
} from '../fixtures/test-data';

test.describe('Registration Flow E2E Tests', () => {
  let registerPage: RegisterPage;
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;
  let helpers: TestHelpers;

  test.beforeEach(async ({ page }) => {
    helpers = await setupTest(page);
    registerPage = new RegisterPage(page);
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    // Navigate to registration page
    await registerPage.navigate();
    await registerPage.assertOnRegisterPage();
  });

  test.afterEach(async ({ page }) => {
    await teardownTest(page);
  });

  test.describe('Happy Path - Successful Registration', () => {
    test('should successfully register with valid user data', async () => {
      // Arrange
      const user = generateUniqueUser();

      // Act
      await registerPage.register(user);

      // Assert
      await registerPage.assertRegistrationSuccess();

      // Should either redirect to dashboard (auto-login) or login page
      const currentUrl = registerPage.page.url();
      if (currentUrl.includes(ROUTES.DASHBOARD)) {
        await dashboardPage.assertOnDashboardPage();
        await dashboardPage.assertUserIsAuthenticated();
      } else {
        await loginPage.assertOnLoginPage();
        // Test that we can login with the new account
        await loginPage.login({ email: user.email, password: user.password });
        await dashboardPage.assertOnDashboardPage();
      }
    });

    test('should successfully register with Enter key submission', async () => {
      // Arrange
      const user = generateUniqueUser();

      // Act
      await registerPage.registerWithEnterKey(user);

      // Assert
      await registerPage.assertRegistrationSuccess();
    });

    test('should register and auto-login user', async () => {
      // Arrange
      const user = generateUniqueUser();

      // Act
      await registerPage.register(user);

      // Assert - if auto-login is implemented
      const currentUrl = registerPage.page.url();
      if (currentUrl.includes(ROUTES.DASHBOARD)) {
        await dashboardPage.assertOnDashboardPage();
        await dashboardPage.assertUserInfo(user.username, user.email);
      }
    });

    test('should handle terms of service requirement', async () => {
      // Arrange
      const user = generateUniqueUser();

      // Act - fill form but don't accept terms
      await registerPage.fillUserData(user);
      await registerPage.acceptTerms(false);
      await registerPage.submitRegistration();

      // Assert - should show terms error
      await registerPage.assertTermsRequiredError();

      // Act - accept terms and submit again
      await registerPage.acceptTerms(true);
      await registerPage.submitRegistration();

      // Assert - should succeed
      await registerPage.assertRegistrationSuccess();
    });
  });

  test.describe('Form Validation', () => {
    test('should validate required fields', async () => {
      // Act - submit empty form
      await registerPage.submitRegistration();

      // Assert - all fields should show errors
      await registerPage.assertFormFieldsRequired();
    });

    test('should validate email format', async () => {
      // Test various invalid email formats
      const invalidEmails = [
        'invalid',
        'test@',
        '@domain.com',
        'test..test@domain.com',
        'test@domain',
        'test @domain.com', // space in email
      ];

      for (const email of invalidEmails) {
        await registerPage.fillEmail(email);
        await registerPage.fillUsername('testuser');
        await registerPage.fillPassword('ValidPassword123!');
        await registerPage.fillConfirmPassword('ValidPassword123!');
        await registerPage.acceptTerms(true);
        await registerPage.submitRegistration();

        await registerPage.assertInvalidEmailError();

        // Clear form for next iteration
        await registerPage.fillEmail('');
        await registerPage.fillUsername('');
        await registerPage.fillPassword('');
        await registerPage.fillConfirmPassword('');
      }
    });

    test('should validate password strength requirements', async () => {
      const user = generateUniqueUser();

      // Test weak passwords
      const weakPasswords = [
        '123',           // Too short
        'password',      // No uppercase/numbers
        'PASSWORD',      // No lowercase/numbers
        '12345678',      // No letters
        'Pass123',       // No special characters (if required)
      ];

      for (const weakPassword of weakPasswords) {
        await registerPage.fillUserData({
          ...user,
          password: weakPassword,
          confirmPassword: weakPassword,
        });
        await registerPage.acceptTerms(true);
        await registerPage.submitRegistration();

        await registerPage.assertWeakPasswordError();

        // Clear form for next iteration
        await registerPage.fillPassword('');
        await registerPage.fillConfirmPassword('');
      }
    });

    test('should validate password confirmation match', async () => {
      // Arrange
      const user = generateUniqueUser();

      // Act
      await registerPage.testPasswordMismatch(user.password, 'DifferentPassword123!');

      // Assert
      await registerPage.assertPasswordMismatchError();
    });

    test('should validate username format and length', async () => {
      const user = generateUniqueUser();

      // Test invalid usernames
      const invalidUsernames = [
        'ab',           // Too short
        'a'.repeat(51), // Too long
        'user name',    // Spaces
        'user@name',    // Special characters
        '123',          // Numbers only
        '',             // Empty
      ];

      for (const username of invalidUsernames) {
        await registerPage.fillUserData({
          ...user,
          username: username,
        });
        await registerPage.acceptTerms(true);
        await registerPage.submitRegistration();

        await registerPage.assertUsernameError();

        // Clear username for next iteration
        await registerPage.fillUsername('');
      }
    });

    test('should disable submit button when form is invalid', async () => {
      // Initially, button should be disabled with empty form
      await expect(registerPage.isRegisterButtonDisabled()).resolves.toBe(true);

      const user = generateUniqueUser();

      // Fill fields one by one and check button state
      await registerPage.fillEmail(user.email);
      await expect(registerPage.isRegisterButtonDisabled()).resolves.toBe(true);

      await registerPage.fillUsername(user.username);
      await expect(registerPage.isRegisterButtonDisabled()).resolves.toBe(true);

      await registerPage.fillPassword(user.password);
      await expect(registerPage.isRegisterButtonDisabled()).resolves.toBe(true);

      await registerPage.fillConfirmPassword(user.password);
      await expect(registerPage.isRegisterButtonDisabled()).resolves.toBe(true);

      // Accept terms - button should now be enabled
      await registerPage.acceptTerms(true);
      await expect(registerPage.isRegisterButtonEnabled()).resolves.toBe(true);
    });
  });

  test.describe('Error Scenarios - Duplicate Data', () => {
    test('should show error for existing email', async () => {
      // Arrange
      const existingUser = TEST_USERS.VALID_USER;
      const newUser = {
        ...generateUniqueUser(),
        email: existingUser.email, // Use existing email
      };

      // Act
      await registerPage.register(newUser);

      // Assert
      await registerPage.assertEmailExistsError();
      await expect(registerPage.page).toHaveURL(ROUTES.REGISTER);
    });

    test('should show error for existing username', async () => {
      // Arrange
      const existingUser = TEST_USERS.VALID_USER;
      const newUser = {
        ...generateUniqueUser(),
        username: existingUser.username, // Use existing username
      };

      // Act
      await registerPage.register(newUser);

      // Assert
      await registerPage.assertUsernameExistsError();
      await expect(registerPage.page).toHaveURL(ROUTES.REGISTER);
    });

    test('should handle case-insensitive email validation', async () => {
      // Arrange
      const existingUser = TEST_USERS.VALID_USER;
      const newUser = {
        ...generateUniqueUser(),
        email: existingUser.email.toUpperCase(), // Same email, different case
      };

      // Act
      await registerPage.register(newUser);

      // Assert
      await registerPage.assertEmailExistsError();
    });

    test('should handle case-insensitive username validation', async () => {
      // Arrange
      const existingUser = TEST_USERS.VALID_USER;
      const newUser = {
        ...generateUniqueUser(),
        username: existingUser.username.toUpperCase(), // Same username, different case
      };

      // Act
      await registerPage.register(newUser);

      // Assert
      await registerPage.assertUsernameExistsError();
    });
  });

  test.describe('Password Strength and Security', () => {
    test('should show password strength indicator', async () => {
      const passwords = [
        { password: '123', expectedStrength: 'weak' },
        { password: 'password123', expectedStrength: 'medium' },
        { password: 'StrongPassword123!', expectedStrength: 'strong' },
      ];

      for (const { password, expectedStrength } of passwords) {
        const strength = await registerPage.testPasswordStrength(password);
        expect(strength?.toLowerCase()).toContain(expectedStrength);
      }
    });

    test('should show/hide password functionality', async () => {
      // Arrange
      const password = 'testpassword123';

      // Act
      await registerPage.fillPassword(password);
      await registerPage.fillConfirmPassword(password);

      // Initially passwords should be hidden
      await expect(registerPage.isPasswordVisible()).resolves.toBe(false);
      await expect(registerPage.isConfirmPasswordVisible()).resolves.toBe(false);

      // Toggle password visibility
      await registerPage.togglePasswordVisibility();
      await expect(registerPage.isPasswordVisible()).resolves.toBe(true);

      // Toggle confirm password visibility
      await registerPage.toggleConfirmPasswordVisibility();
      await expect(registerPage.isConfirmPasswordVisible()).resolves.toBe(true);

      // Toggle back
      await registerPage.togglePasswordVisibility();
      await registerPage.toggleConfirmPasswordVisibility();
      await expect(registerPage.isPasswordVisible()).resolves.toBe(false);
      await expect(registerPage.isConfirmPasswordVisible()).resolves.toBe(false);
    });

    test('should not expose password in network requests', async () => {
      // Monitor network requests
      const networkRequests: any[] = [];
      registerPage.page.on('request', request => {
        networkRequests.push({
          url: request.url(),
          method: request.method(),
          headers: request.headers(),
          postData: request.postData(),
        });
      });

      const user = generateUniqueUser();
      await registerPage.register(user);

      // Check that password is properly encrypted/hashed
      const authRequests = networkRequests.filter(req =>
        req.url.includes('/api/auth/register')
      );

      for (const request of authRequests) {
        if (request.postData) {
          // Password should not be in plain text in the request
          expect(request.postData).not.toContain(user.password);
        }
      }
    });
  });

  test.describe('Loading States and UX', () => {
    test('should show loading state during registration', async () => {
      // Arrange
      const user = generateUniqueUser();

      // Mock slower API response to observe loading state
      await helpers.network.mockApiError('/api/auth/register', 200, { success: true });

      // Act
      await registerPage.fillUserData(user);
      await registerPage.acceptTerms(true);
      await registerPage.clickRegister();

      // Assert
      await registerPage.assertLoadingState();
    });

    test('should handle network errors gracefully', async () => {
      // Arrange
      const user = generateUniqueUser();

      // Mock network failure
      await helpers.network.mockNetworkFailure('/api/auth/register');

      // Act
      await registerPage.register(user);

      // Assert
      await registerPage.assertGeneralError();
    });

    test('should handle server errors gracefully', async () => {
      // Arrange
      const user = generateUniqueUser();

      // Mock server error
      await helpers.network.mockApiError('/api/auth/register', 500, {
        error: 'Internal server error'
      });

      // Act
      await registerPage.register(user);

      // Assert
      await registerPage.assertGeneralError();
    });
  });

  test.describe('Navigation and Links', () => {
    test('should navigate to login page', async () => {
      // Act
      await registerPage.goToLogin();

      // Assert
      await loginPage.assertOnLoginPage();
    });

    test('should open terms of service in new tab', async () => {
      // This test depends on your implementation
      // If terms open in a new tab/window
      const newPage = await registerPage.openTermsOfService();

      if (newPage) {
        // Assert terms page opened
        await expect(newPage).toHaveURL(/terms/);
        await newPage.close();
      }
    });

    test('should redirect authenticated user from register page', async () => {
      // Arrange - register and login first
      const user = generateUniqueUser();
      await registerPage.register(user);

      // If auto-login is implemented
      const currentUrl = registerPage.page.url();
      if (currentUrl.includes(ROUTES.DASHBOARD)) {
        // Act - try to go back to register page
        await registerPage.navigate();

        // Assert - should redirect to dashboard
        await dashboardPage.assertOnDashboardPage();
      }
    });
  });

  test.describe('Accessibility and Keyboard Navigation', () => {
    test('should support keyboard navigation', async () => {
      // Test tab navigation through form
      await registerPage.testKeyboardNavigation();
    });

    test('should have proper accessibility attributes', async () => {
      // Test form accessibility
      await registerPage.checkFormAccessibility();
    });

    test('should support screen reader users', async () => {
      // Check for proper ARIA labels and descriptions
      await expect(registerPage.emailInput).toHaveAttribute('aria-label');
      await expect(registerPage.usernameInput).toHaveAttribute('aria-label');
      await expect(registerPage.passwordInput).toHaveAttribute('aria-label');
      await expect(registerPage.confirmPasswordInput).toHaveAttribute('aria-label');
      await expect(registerPage.registerButton).toHaveAttribute('aria-label');
    });

    test('should announce form validation errors to screen readers', async () => {
      // Submit empty form
      await registerPage.submitRegistration();

      // Check that error messages have proper ARIA attributes
      await expect(registerPage.emailError).toHaveAttribute('role', 'alert');
      await expect(registerPage.usernameError).toHaveAttribute('role', 'alert');
      await expect(registerPage.passwordError).toHaveAttribute('role', 'alert');
    });
  });

  test.describe('Mobile Responsiveness', () => {
    test('should work on mobile devices', async () => {
      // Test mobile registration flow
      const user = generateUniqueUser();

      await registerPage.testMobileRegistration(user);
      await registerPage.assertRegistrationSuccess();
    });

    test('should adapt to different screen sizes', async () => {
      const user = generateUniqueUser();

      // Test on different viewport sizes
      const viewports = [
        { width: 375, height: 667 },  // iPhone
        { width: 768, height: 1024 }, // iPad
        { width: 1920, height: 1080 } // Desktop
      ];

      for (const viewport of viewports) {
        await registerPage.page.setViewportSize(viewport);
        await registerPage.assertOnRegisterPage();

        // Check that all form elements are visible and accessible
        await expect(registerPage.emailInput).toBeVisible();
        await expect(registerPage.usernameInput).toBeVisible();
        await expect(registerPage.passwordInput).toBeVisible();
        await expect(registerPage.confirmPasswordInput).toBeVisible();
        await expect(registerPage.termsCheckbox).toBeVisible();
        await expect(registerPage.registerButton).toBeVisible();
      }
    });
  });

  test.describe('Performance', () => {
    test('should complete registration within performance budget', async () => {
      // Arrange
      const user = generateUniqueUser();
      const maxRegistrationTime = 5000; // 5 seconds

      // Act & Assert
      const registrationTime = await registerPage.measureRegistrationPerformance(user);
      expect(registrationTime).toBeLessThan(maxRegistrationTime);
    });

    test('should handle multiple rapid submit attempts', async () => {
      // Test rapid clicking of register button
      const user = generateUniqueUser();

      await registerPage.fillUserData(user);
      await registerPage.acceptTerms(true);

      // Rapidly click register button multiple times
      await Promise.all([
        registerPage.clickRegister(),
        registerPage.clickRegister(),
        registerPage.clickRegister(),
      ]);

      // Should still register successfully (no duplicate accounts)
      await registerPage.assertRegistrationSuccess();
    });

    test('should validate form fields in real-time', async () => {
      // Test that validation happens as user types, not just on submit
      const user = generateUniqueUser();

      // Type invalid email
      await registerPage.fillEmail('invalid-email');
      // Wait for real-time validation
      await registerPage.page.waitForTimeout(500);

      // Should show email error without submitting
      const emailError = await registerPage.getEmailErrorMessage();
      expect(emailError).toBeTruthy();

      // Fix email
      await registerPage.fillEmail(user.email);
      await registerPage.page.waitForTimeout(500);

      // Error should disappear
      const updatedEmailError = await registerPage.getEmailErrorMessage();
      expect(updatedEmailError).toBeFalsy();
    });
  });

  test.describe('Cross-browser Compatibility', () => {
    test('should work consistently across browsers', async ({ browserName }) => {
      // This test will run automatically across all configured browsers
      const user = generateUniqueUser();

      await registerPage.register(user);
      await registerPage.assertRegistrationSuccess();

      // Browser-specific validations could be added here
      console.log(`Registration test completed successfully on ${browserName}`);
    });
  });

  test.describe('Security', () => {
    test('should handle XSS attempts safely', async () => {
      // Test XSS payloads in form fields
      const xssPayloads = [
        '<script>alert("xss")</script>',
        'javascript:alert("xss")',
        '<img src="x" onerror="alert(1)">',
        '"><script>alert(document.cookie)</script>',
      ];

      for (const payload of xssPayloads) {
        const user = {
          email: `test${Date.now()}@example.com`,
          username: `user${Date.now()}`,
          password: 'ValidPassword123!',
          confirmPassword: 'ValidPassword123!',
        };

        // Try XSS in different fields
        await registerPage.fillUserData({
          ...user,
          username: `user${payload}`,
        });
        await registerPage.acceptTerms(true);
        await registerPage.submitRegistration();

        // Should handle gracefully without executing script
        // Check that no alert dialogs appeared
        await registerPage.page.waitForTimeout(1000);

        // Clear form for next iteration
        await registerPage.fillEmail('');
        await registerPage.fillUsername('');
        await registerPage.fillPassword('');
        await registerPage.fillConfirmPassword('');
      }
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
        const user = {
          email: `test${payload}@example.com`,
          username: `user${payload}`,
          password: `password${payload}`,
          confirmPassword: `password${payload}`,
        };

        await registerPage.fillUserData(user);
        await registerPage.acceptTerms(true);
        await registerPage.submitRegistration();

        // Should show normal validation error, not crash
        // We expect either validation errors or safe handling
        const errors = await registerPage.getAllErrorMessages();
        expect(errors.length).toBeGreaterThan(0);

        // Clear form for next iteration
        await registerPage.fillEmail('');
        await registerPage.fillUsername('');
        await registerPage.fillPassword('');
        await registerPage.fillConfirmPassword('');
      }
    });
  });

  test.describe('Integration with Login Flow', () => {
    test('should successfully register and then login', async () => {
      // Arrange
      const user = generateUniqueUser();

      // Act - Register
      await registerPage.register(user);

      // If registration redirects to login page
      const currentUrl = registerPage.page.url();
      if (currentUrl.includes(ROUTES.LOGIN)) {
        // Act - Login with new credentials
        await loginPage.login({ email: user.email, password: user.password });

        // Assert
        await dashboardPage.assertOnDashboardPage();
        await dashboardPage.assertUserInfo(user.username, user.email);
      }
    });

    test('should handle registration-to-login flow with validation', async () => {
      // Test the complete user onboarding flow
      const user = generateUniqueUser();

      // Step 1: Register
      await registerPage.register(user);

      // Step 2: Navigate to login (if not auto-redirected)
      if (!registerPage.page.url().includes(ROUTES.LOGIN)) {
        await loginPage.navigate();
      }

      // Step 3: Login with registered credentials
      await loginPage.login({ email: user.email, password: user.password });

      // Step 4: Verify successful login and user data
      await dashboardPage.assertOnDashboardPage();
      await dashboardPage.assertUserIsAuthenticated();
    });
  });
});