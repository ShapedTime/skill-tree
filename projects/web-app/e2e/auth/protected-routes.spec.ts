/**
 * Protected Routes E2E Tests
 *
 * Comprehensive end-to-end testing for protected route access control,
 * authentication redirects, session management, and security verification.
 */

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { DashboardPage } from '../pages/DashboardPage';
import { TestHelpers, setupTest, teardownTest } from '../utils/test-helpers';
import {
  TEST_USERS,
  ROUTES,
  TIMEOUTS,
  generateUniqueUser,
  generateUniqueCredentials,
} from '../fixtures/test-data';

test.describe('Protected Routes E2E Tests', () => {
  let loginPage: LoginPage;
  let registerPage: RegisterPage;
  let dashboardPage: DashboardPage;
  let helpers: TestHelpers;

  test.beforeEach(async ({ page }) => {
    helpers = await setupTest(page);
    loginPage = new LoginPage(page);
    registerPage = new RegisterPage(page);
    dashboardPage = new DashboardPage(page);
  });

  test.afterEach(async ({ page }) => {
    await teardownTest(page);
  });

  test.describe('Unauthenticated Access - Redirects to Login', () => {
    const protectedRoutes = [
      { route: ROUTES.DASHBOARD, name: 'Dashboard' },
      { route: ROUTES.PROFILE, name: 'Profile' },
      { route: ROUTES.SKILL_TREES, name: 'Skill Trees' },
    ];

    protectedRoutes.forEach(({ route, name }) => {
      test(`should redirect unauthenticated user from ${name} to login`, async ({ page }) => {
        // Act - try to access protected route directly
        await page.goto(route);

        // Assert - should redirect to login
        await loginPage.assertOnLoginPage();
      });

      test(`should preserve intended route after login for ${name}`, async ({ page }) => {
        // Arrange
        const credentials = TEST_USERS.VALID_USER;

        // Act - try to access protected route (redirected to login)
        await page.goto(route);
        await loginPage.assertOnLoginPage();

        // Login
        await loginPage.login(credentials);

        // Assert - should redirect back to intended route
        await helpers.navigation.waitForNavigation(route);
        await expect(page).toHaveURL(route);
      });
    });

    test('should redirect from any protected route to login', async ({ page }) => {
      // Test with a dynamic route that should be protected
      const dynamicProtectedRoutes = [
        '/dashboard/settings',
        '/skill-trees/123',
        '/profile/edit',
        '/admin',
      ];

      for (const route of dynamicProtectedRoutes) {
        await page.goto(route);

        // Should redirect to login (or show 404 if route doesn't exist)
        const currentUrl = page.url();
        expect(
          currentUrl.includes(ROUTES.LOGIN) || currentUrl.includes('404')
        ).toBe(true);
      }
    });
  });

  test.describe('Authenticated Access - Allow Access', () => {
    test('should allow authenticated user to access dashboard', async () => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Act
      await loginPage.navigate();
      await loginPage.login(credentials);

      // Assert
      await dashboardPage.assertOnDashboardPage();
      await dashboardPage.assertUserIsAuthenticated();
    });

    test('should allow authenticated user to access profile', async ({ page }) => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Act
      await loginPage.navigate();
      await loginPage.login(credentials);
      await page.goto(ROUTES.PROFILE);

      // Assert
      await expect(page).toHaveURL(ROUTES.PROFILE);
      // Additional profile-specific assertions could be added
    });

    test('should allow authenticated user to access skill trees', async ({ page }) => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Act
      await loginPage.navigate();
      await loginPage.login(credentials);
      await page.goto(ROUTES.SKILL_TREES);

      // Assert
      await expect(page).toHaveURL(ROUTES.SKILL_TREES);
      // Additional skill trees-specific assertions could be added
    });

    test('should allow direct navigation to protected routes when authenticated', async ({ page }) => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Setup authentication
      await helpers.auth.setupAuthenticatedState(credentials);

      // Test direct navigation to various protected routes
      const protectedRoutes = [ROUTES.DASHBOARD, ROUTES.PROFILE, ROUTES.SKILL_TREES];

      for (const route of protectedRoutes) {
        await page.goto(route);
        await expect(page).toHaveURL(route);
        // Should not redirect to login
        await expect(page).not.toHaveURL(ROUTES.LOGIN);
      }
    });
  });

  test.describe('Session Management and Persistence', () => {
    test('should maintain authentication across page refreshes', async ({ page }) => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Act - login and navigate to dashboard
      await loginPage.navigate();
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Refresh the page
      await page.reload();
      await helpers.navigation.waitForNavigation();

      // Assert - should still be authenticated
      await dashboardPage.assertUserIsAuthenticated();
      await expect(page).toHaveURL(ROUTES.DASHBOARD);
    });

    test('should maintain authentication across browser tabs', async ({ page }) => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Act - login in first tab
      await loginPage.navigate();
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Open new tab and navigate to protected route
      const newPage = await page.context().newPage();
      await newPage.goto(ROUTES.DASHBOARD);

      const newDashboard = new DashboardPage(newPage);
      await newDashboard.assertUserIsAuthenticated();

      await newPage.close();
    });

    test('should handle session expiration gracefully', async ({ page }) => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Login
      await loginPage.navigate();
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Simulate session expiration by clearing auth tokens
      await page.evaluate(() => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('refresh_token');
        sessionStorage.clear();
      });

      // Act - try to access protected route
      await page.goto(ROUTES.PROFILE);

      // Assert - should redirect to login
      await loginPage.assertOnLoginPage();
    });

    test('should handle token refresh automatically', async ({ page }) => {
      // This test depends on your token refresh implementation
      const credentials = TEST_USERS.VALID_USER;

      // Login
      await loginPage.navigate();
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Mock expired access token but valid refresh token
      await page.evaluate(() => {
        const expiredToken = 'expired.jwt.token';
        localStorage.setItem('auth_token', expiredToken);
        // Keep refresh token valid
      });

      // Act - access protected route (should trigger token refresh)
      await page.goto(ROUTES.PROFILE);

      // Assert - should still access the route (token was refreshed)
      await expect(page).toHaveURL(ROUTES.PROFILE);
    });

    test('should logout user when refresh token is invalid', async ({ page }) => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Login
      await loginPage.navigate();
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Mock both tokens as expired/invalid
      await page.evaluate(() => {
        localStorage.setItem('auth_token', 'expired.jwt.token');
        localStorage.setItem('refresh_token', 'expired.refresh.token');
      });

      // Act - access protected route
      await page.goto(ROUTES.PROFILE);

      // Assert - should redirect to login
      await loginPage.assertOnLoginPage();
    });
  });

  test.describe('Logout Functionality', () => {
    test('should redirect to login after logout from dashboard', async () => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Act
      await loginPage.navigate();
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Logout
      await dashboardPage.logout();

      // Assert
      await loginPage.assertOnLoginPage();
    });

    test('should prevent access to protected routes after logout', async ({ page }) => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Login
      await loginPage.navigate();
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Logout
      await dashboardPage.logout();
      await loginPage.assertOnLoginPage();

      // Act - try to access protected routes
      const protectedRoutes = [ROUTES.DASHBOARD, ROUTES.PROFILE, ROUTES.SKILL_TREES];

      for (const route of protectedRoutes) {
        await page.goto(route);
        await loginPage.assertOnLoginPage();
      }
    });

    test('should clear all authentication data on logout', async ({ page }) => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Login
      await loginPage.navigate();
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Logout
      await dashboardPage.logout();

      // Assert - check that auth data is cleared
      const authToken = await page.evaluate(() => localStorage.getItem('auth_token'));
      const refreshToken = await page.evaluate(() => localStorage.getItem('refresh_token'));
      const sessionData = await page.evaluate(() => sessionStorage.length);

      expect(authToken).toBeNull();
      expect(refreshToken).toBeNull();
      expect(sessionData).toBe(0);
    });

    test('should logout from all tabs when user logs out from one tab', async ({ page }) => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Login in first tab
      await loginPage.navigate();
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Open second tab
      const secondPage = await page.context().newPage();
      await secondPage.goto(ROUTES.DASHBOARD);
      const secondDashboard = new DashboardPage(secondPage);
      await secondDashboard.assertUserIsAuthenticated();

      // Logout from first tab
      await dashboardPage.logout();

      // Check second tab - should also be logged out
      await secondPage.reload();
      await secondPage.waitForURL(ROUTES.LOGIN);
      const secondLogin = new LoginPage(secondPage);
      await secondLogin.assertOnLoginPage();

      await secondPage.close();
    });
  });

  test.describe('Public Routes Access', () => {
    const publicRoutes = [
      { route: ROUTES.HOME, name: 'Home' },
      { route: ROUTES.LOGIN, name: 'Login' },
      { route: ROUTES.REGISTER, name: 'Register' },
    ];

    publicRoutes.forEach(({ route, name }) => {
      test(`should allow unauthenticated access to ${name}`, async ({ page }) => {
        // Act
        await page.goto(route);

        // Assert
        await expect(page).toHaveURL(route);
      });

      test(`should allow authenticated access to ${name}`, async ({ page }) => {
        // Arrange
        const credentials = TEST_USERS.VALID_USER;
        await helpers.auth.setupAuthenticatedState(credentials);

        // Act
        await page.goto(route);

        // Assert
        await expect(page).toHaveURL(route);
      });
    });

    test('should redirect authenticated user away from auth pages', async ({ page }) => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Login first
      await loginPage.navigate();
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Act - try to access login page
      await page.goto(ROUTES.LOGIN);

      // Assert - should redirect to dashboard
      await dashboardPage.assertOnDashboardPage();

      // Act - try to access register page
      await page.goto(ROUTES.REGISTER);

      // Assert - should redirect to dashboard
      await dashboardPage.assertOnDashboardPage();
    });
  });

  test.describe('Route Guards and Security', () => {
    test('should handle malicious URL manipulation', async ({ page }) => {
      // Test various URL manipulation attempts
      const maliciousUrls = [
        '/dashboard/../admin',
        '/profile/../../sensitive-data',
        '/skill-trees?redirect=/admin',
        '/dashboard#../admin',
      ];

      for (const url of maliciousUrls) {
        await page.goto(url);

        // Should either redirect to login or handle safely
        const currentUrl = page.url();
        const isHandledSafely = currentUrl.includes(ROUTES.LOGIN) ||
                               currentUrl.includes('404') ||
                               currentUrl.includes('error');

        expect(isHandledSafely).toBe(true);
      }
    });

    test('should validate user permissions for specific routes', async ({ page }) => {
      // This test assumes you have role-based access control
      const credentials = TEST_USERS.VALID_USER;

      // Login as regular user
      await loginPage.navigate();
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Try to access admin routes (should be denied)
      const adminRoutes = ['/admin', '/admin/users', '/admin/settings'];

      for (const route of adminRoutes) {
        await page.goto(route);

        // Should either redirect to unauthorized page or dashboard
        const currentUrl = page.url();
        const isAccessDenied = currentUrl.includes('unauthorized') ||
                              currentUrl.includes('403') ||
                              currentUrl.includes(ROUTES.DASHBOARD);

        expect(isAccessDenied).toBe(true);
      }
    });

    test('should prevent CSRF attacks on protected routes', async ({ page }) => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;
      await helpers.auth.setupAuthenticatedState(credentials);

      // Monitor requests for CSRF tokens
      const requests: any[] = [];
      page.on('request', request => {
        if (request.method() === 'POST' || request.method() === 'PUT' || request.method() === 'DELETE') {
          requests.push({
            url: request.url(),
            headers: request.headers(),
          });
        }
      });

      // Act - perform actions that should include CSRF protection
      await page.goto(ROUTES.DASHBOARD);

      // Simulate form submission or API call
      await page.evaluate(() => {
        fetch('/api/user/update', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: 'Updated Name' }),
        });
      });

      // Assert - check for CSRF token in requests
      const apiRequests = requests.filter(req => req.url.includes('/api/'));

      for (const request of apiRequests) {
        // Should have CSRF token in headers
        const hasCsrfToken = request.headers['x-csrf-token'] ||
                            request.headers['x-xsrf-token'] ||
                            request.headers['csrf-token'];

        expect(hasCsrfToken).toBeTruthy();
      }
    });
  });

  test.describe('Cross-browser Route Protection', () => {
    test('should work consistently across browsers', async ({ browserName, page }) => {
      // Test route protection across different browsers
      const credentials = TEST_USERS.VALID_USER;

      // Test unauthenticated access
      await page.goto(ROUTES.DASHBOARD);
      await loginPage.assertOnLoginPage();

      // Test authenticated access
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Test logout
      await dashboardPage.logout();
      await loginPage.assertOnLoginPage();

      console.log(`Route protection test completed successfully on ${browserName}`);
    });
  });

  test.describe('Mobile Route Protection', () => {
    test('should protect routes on mobile devices', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });

      // Test unauthenticated access
      await page.goto(ROUTES.DASHBOARD);
      await loginPage.assertOnLoginPage();

      // Test mobile login flow
      const credentials = TEST_USERS.VALID_USER;
      await loginPage.testMobileLogin(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Test mobile logout
      await dashboardPage.testMobileDashboard();
    });
  });

  test.describe('Performance and Load Testing', () => {
    test('should handle rapid route navigation', async ({ page }) => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;
      await helpers.auth.setupAuthenticatedState(credentials);

      // Act - rapidly navigate between routes
      const routes = [ROUTES.DASHBOARD, ROUTES.PROFILE, ROUTES.SKILL_TREES, ROUTES.DASHBOARD];

      for (const route of routes) {
        const startTime = Date.now();
        await page.goto(route);
        await helpers.navigation.waitForNavigation();
        const loadTime = Date.now() - startTime;

        // Assert - should load within reasonable time
        expect(loadTime).toBeLessThan(3000); // 3 seconds
      }
    });

    test('should handle concurrent authentication checks', async ({ page }) => {
      // Test multiple simultaneous authentication checks
      const credentials = TEST_USERS.VALID_USER;

      // Login
      await loginPage.navigate();
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Perform multiple simultaneous route navigations
      const navigationPromises = [
        page.goto(ROUTES.PROFILE),
        page.goto(ROUTES.SKILL_TREES),
        page.goto(ROUTES.DASHBOARD),
      ];

      // Should handle all navigations without errors
      await Promise.all(navigationPromises);

      // Should end up at the last navigation
      await expect(page).toHaveURL(ROUTES.DASHBOARD);
      await dashboardPage.assertUserIsAuthenticated();
    });
  });

  test.describe('Edge Cases and Error Handling', () => {
    test('should handle corrupted authentication data', async ({ page }) => {
      // Arrange - set corrupted auth data
      await page.evaluate(() => {
        localStorage.setItem('auth_token', 'corrupted.token.data');
        localStorage.setItem('user_data', 'invalid-json-data');
      });

      // Act - try to access protected route
      await page.goto(ROUTES.DASHBOARD);

      // Assert - should redirect to login
      await loginPage.assertOnLoginPage();
    });

    test('should handle network failures during authentication', async ({ page }) => {
      // Arrange - mock network failure for auth endpoints
      await page.route('**/api/auth/**', route => route.abort('failed'));

      const credentials = TEST_USERS.VALID_USER;

      // Act - try to login
      await loginPage.navigate();
      await loginPage.login(credentials);

      // Assert - should show error and remain on login page
      await loginPage.assertNetworkError();
      await loginPage.assertOnLoginPage();
    });

    test('should handle server errors during authentication', async ({ page }) => {
      // Arrange - mock server error
      await page.route('**/api/auth/**', route => {
        route.fulfill({
          status: 500,
          body: JSON.stringify({ error: 'Internal server error' }),
        });
      });

      const credentials = TEST_USERS.VALID_USER;

      // Act - try to login
      await loginPage.navigate();
      await loginPage.login(credentials);

      // Assert - should show error and remain on login page
      await loginPage.assertServerError();
      await loginPage.assertOnLoginPage();
    });

    test('should handle unexpected logouts gracefully', async ({ page }) => {
      // Arrange
      const credentials = TEST_USERS.VALID_USER;

      // Login
      await loginPage.navigate();
      await loginPage.login(credentials);
      await dashboardPage.assertOnDashboardPage();

      // Simulate unexpected logout (server-side session invalidation)
      await page.route('**/api/**', route => {
        if (route.request().headers()['authorization']) {
          route.fulfill({
            status: 401,
            body: JSON.stringify({ error: 'Unauthorized' }),
          });
        } else {
          route.continue();
        }
      });

      // Act - try to perform action that requires authentication
      await page.goto(ROUTES.PROFILE);

      // Assert - should redirect to login
      await loginPage.assertOnLoginPage();
    });
  });
});