/**
 * Test utility functions for E2E authentication testing
 *
 * Provides common test setup, cleanup, and assertion utilities
 * for consistent and reliable E2E testing.
 */

import { Page, expect } from '@playwright/test';
import { TestUser, TestCredentials, TIMEOUTS, ROUTES } from '../fixtures/test-data';

/**
 * Navigation utilities
 */
export class NavigationHelpers {
  constructor(private page: Page) {}

  async goToLogin(): Promise<void> {
    await this.page.goto(ROUTES.LOGIN);
    await this.page.waitForLoadState('networkidle');
  }

  async goToRegister(): Promise<void> {
    await this.page.goto(ROUTES.REGISTER);
    await this.page.waitForLoadState('networkidle');
  }

  async goToDashboard(): Promise<void> {
    await this.page.goto(ROUTES.DASHBOARD);
    await this.page.waitForLoadState('networkidle');
  }

  async goToHome(): Promise<void> {
    await this.page.goto(ROUTES.HOME);
    await this.page.waitForLoadState('networkidle');
  }

  async waitForNavigation(expectedUrl?: string): Promise<void> {
    if (expectedUrl) {
      await this.page.waitForURL(expectedUrl, { timeout: TIMEOUTS.NAVIGATION });
    } else {
      await this.page.waitForLoadState('networkidle');
    }
  }
}

/**
 * Authentication state utilities
 */
export class AuthHelpers {
  constructor(private page: Page) {}

  /**
   * Check if user is authenticated by looking for dashboard elements
   */
  async isAuthenticated(): Promise<boolean> {
    try {
      // Try to access a protected route and check for redirect
      await this.page.goto(ROUTES.DASHBOARD, { waitUntil: 'networkidle' });

      // If we're still on dashboard and not redirected to login, user is authenticated
      const currentUrl = this.page.url();
      return currentUrl.includes(ROUTES.DASHBOARD);
    } catch {
      return false;
    }
  }

  /**
   * Perform complete logout
   */
  async logout(): Promise<void> {
    // Look for logout button/link and click it
    const logoutButton = this.page.locator('[data-testid="logout-button"], [data-testid="logout-link"], text="Logout", text="Log out"').first();

    if (await logoutButton.isVisible()) {
      await logoutButton.click();
      await this.page.waitForURL(ROUTES.LOGIN, { timeout: TIMEOUTS.NAVIGATION });
    } else {
      // Alternative: clear storage manually
      await this.clearAuthState();
      await this.page.goto(ROUTES.LOGIN);
    }
  }

  /**
   * Clear authentication state from browser storage
   */
  async clearAuthState(): Promise<void> {
    await this.page.evaluate(() => {
      // Clear localStorage
      localStorage.clear();

      // Clear sessionStorage
      sessionStorage.clear();

      // Clear any auth cookies
      document.cookie.split(";").forEach(cookie => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      });
    });
  }

  /**
   * Set up authenticated state by performing login
   */
  async setupAuthenticatedState(credentials: TestCredentials): Promise<void> {
    const navigation = new NavigationHelpers(this.page);

    await navigation.goToLogin();

    // Fill login form
    await this.page.fill('[data-testid="email-input"]', credentials.email);
    await this.page.fill('[data-testid="password-input"]', credentials.password);

    // Submit form
    await this.page.click('[data-testid="login-button"]');

    // Wait for successful login
    await navigation.waitForNavigation(ROUTES.DASHBOARD);

    // Verify authentication
    const isAuth = await this.isAuthenticated();
    expect(isAuth).toBe(true);
  }
}

/**
 * Form interaction utilities
 */
export class FormHelpers {
  constructor(private page: Page) {}

  /**
   * Fill login form with credentials
   */
  async fillLoginForm(credentials: TestCredentials): Promise<void> {
    await this.page.fill('[data-testid="email-input"]', credentials.email);
    await this.page.fill('[data-testid="password-input"]', credentials.password);
  }

  /**
   * Fill registration form with user data
   */
  async fillRegistrationForm(user: TestUser): Promise<void> {
    await this.page.fill('[data-testid="email-input"]', user.email);
    await this.page.fill('[data-testid="password-input"]', user.password);

    if (user.confirmPassword !== undefined) {
      await this.page.fill('[data-testid="confirm-password-input"]', user.confirmPassword);
    }

    await this.page.fill('[data-testid="username-input"]', user.username);
  }

  /**
   * Submit login form
   */
  async submitLoginForm(): Promise<void> {
    await this.page.click('[data-testid="login-button"]');
  }

  /**
   * Submit registration form
   */
  async submitRegistrationForm(): Promise<void> {
    // Check terms of service if present
    const termsCheckbox = this.page.locator('[data-testid="terms-checkbox"]');
    if (await termsCheckbox.isVisible()) {
      await termsCheckbox.check();
    }

    await this.page.click('[data-testid="register-button"]');
  }

  /**
   * Get form validation error messages
   */
  async getFormErrors(): Promise<string[]> {
    const errorElements = this.page.locator('[data-testid*="error"], .error-message, .field-error');
    const errorCount = await errorElements.count();

    const errors: string[] = [];
    for (let i = 0; i < errorCount; i++) {
      const errorText = await errorElements.nth(i).textContent();
      if (errorText) {
        errors.push(errorText.trim());
      }
    }

    return errors;
  }
}

/**
 * Assertion utilities
 */
export class AssertionHelpers {
  constructor(private page: Page) {}

  /**
   * Assert user is on login page
   */
  async assertOnLoginPage(): Promise<void> {
    await expect(this.page).toHaveURL(ROUTES.LOGIN);
    await expect(this.page.locator('[data-testid="login-form"]')).toBeVisible();
  }

  /**
   * Assert user is on registration page
   */
  async assertOnRegisterPage(): Promise<void> {
    await expect(this.page).toHaveURL(ROUTES.REGISTER);
    await expect(this.page.locator('[data-testid="register-form"]')).toBeVisible();
  }

  /**
   * Assert user is on dashboard page
   */
  async assertOnDashboardPage(): Promise<void> {
    await expect(this.page).toHaveURL(ROUTES.DASHBOARD);
    await expect(this.page.locator('[data-testid="dashboard"]')).toBeVisible();
  }

  /**
   * Assert error message is displayed
   */
  async assertErrorMessage(expectedMessage: string): Promise<void> {
    const errorLocator = this.page.locator(`text="${expectedMessage}"`);
    await expect(errorLocator).toBeVisible({ timeout: TIMEOUTS.NORMAL });
  }

  /**
   * Assert success message is displayed
   */
  async assertSuccessMessage(expectedMessage: string): Promise<void> {
    const successLocator = this.page.locator(`text="${expectedMessage}"`);
    await expect(successLocator).toBeVisible({ timeout: TIMEOUTS.NORMAL });
  }

  /**
   * Assert loading state
   */
  async assertLoadingState(): Promise<void> {
    const loadingIndicator = this.page.locator('[data-testid="loading"], .loading, .spinner');
    await expect(loadingIndicator).toBeVisible({ timeout: TIMEOUTS.FAST });
  }

  /**
   * Assert form field has error
   */
  async assertFieldError(fieldTestId: string, expectedError?: string): Promise<void> {
    const fieldError = this.page.locator(`[data-testid="${fieldTestId}-error"]`);
    await expect(fieldError).toBeVisible();

    if (expectedError) {
      await expect(fieldError).toContainText(expectedError);
    }
  }
}

/**
 * Network and API utilities
 */
export class NetworkHelpers {
  constructor(private page: Page) {}

  /**
   * Wait for specific API call to complete
   */
  async waitForApiCall(endpoint: string): Promise<void> {
    await this.page.waitForResponse(response =>
      response.url().includes(endpoint) && response.status() < 400
    );
  }

  /**
   * Mock API response for testing error scenarios
   */
  async mockApiError(endpoint: string, status: number, body?: any): Promise<void> {
    await this.page.route(`**${endpoint}`, route => {
      route.fulfill({
        status,
        body: JSON.stringify(body || { error: 'Mocked error' }),
        headers: { 'Content-Type': 'application/json' },
      });
    });
  }

  /**
   * Mock network failure
   */
  async mockNetworkFailure(endpoint: string): Promise<void> {
    await this.page.route(`**${endpoint}`, route => {
      route.abort('failed');
    });
  }
}

/**
 * Combined utility class for easy access
 */
export class TestHelpers {
  public navigation: NavigationHelpers;
  public auth: AuthHelpers;
  public forms: FormHelpers;
  public assertions: AssertionHelpers;
  public network: NetworkHelpers;

  constructor(private page: Page) {
    this.navigation = new NavigationHelpers(page);
    this.auth = new AuthHelpers(page);
    this.forms = new FormHelpers(page);
    this.assertions = new AssertionHelpers(page);
    this.network = new NetworkHelpers(page);
  }
}

/**
 * Test setup and teardown utilities
 */
export async function setupTest(page: Page): Promise<TestHelpers> {
  // Clear any existing authentication state
  const helpers = new TestHelpers(page);
  await helpers.auth.clearAuthState();

  return helpers;
}

export async function teardownTest(page: Page): Promise<void> {
  const helpers = new TestHelpers(page);
  await helpers.auth.clearAuthState();
}