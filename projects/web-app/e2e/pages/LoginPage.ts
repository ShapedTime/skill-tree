/**
 * LoginPage - Page Object Model for login functionality
 *
 * Encapsulates all login form interactions, validations,
 * and navigation for reliable E2E testing.
 */

import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { TestCredentials, ROUTES, TIMEOUTS, ERROR_MESSAGES, SUCCESS_MESSAGES } from '../fixtures/test-data';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Page navigation
   */
  async navigate(): Promise<void> {
    await this.page.goto(ROUTES.LOGIN);
    await this.waitForNavigation();
  }

  async isLoaded(): Promise<boolean> {
    try {
      await expect(this.loginForm).toBeVisible({ timeout: TIMEOUTS.FAST });
      await expect(this.page).toHaveURL(ROUTES.LOGIN);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Page elements
   */
  get loginForm(): Locator {
    return this.page.locator('[data-testid="login-form"]');
  }

  get emailInput(): Locator {
    return this.page.locator('[data-testid="email-input"]');
  }

  get passwordInput(): Locator {
    return this.page.locator('[data-testid="password-input"]');
  }

  get loginButton(): Locator {
    return this.page.locator('[data-testid="login-button"]');
  }

  get rememberMeCheckbox(): Locator {
    return this.page.locator('[data-testid="remember-me-checkbox"]');
  }

  get forgotPasswordLink(): Locator {
    return this.page.locator('[data-testid="forgot-password-link"]');
  }

  get registerLink(): Locator {
    return this.page.locator('[data-testid="register-link"]');
  }

  get showPasswordButton(): Locator {
    return this.page.locator('[data-testid="show-password-button"]');
  }

  // Error elements
  get emailError(): Locator {
    return this.page.locator('[data-testid="email-error"]');
  }

  get passwordError(): Locator {
    return this.page.locator('[data-testid="password-error"]');
  }

  get generalError(): Locator {
    return this.page.locator('[data-testid="login-error"]');
  }

  // Loading states
  get submitLoadingIndicator(): Locator {
    return this.page.locator('[data-testid="login-loading"]');
  }

  /**
   * Form interactions
   */
  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async fillCredentials(credentials: TestCredentials): Promise<void> {
    await this.fillEmail(credentials.email);
    await this.fillPassword(credentials.password);
  }

  async toggleRememberMe(checked: boolean = true): Promise<void> {
    if (checked) {
      await this.rememberMeCheckbox.check();
    } else {
      await this.rememberMeCheckbox.uncheck();
    }
  }

  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async submitLogin(): Promise<void> {
    await this.clickLogin();
    // Wait for form submission to process
    await this.page.waitForTimeout(500);
  }

  async togglePasswordVisibility(): Promise<void> {
    await this.showPasswordButton.click();
  }

  /**
   * Complete login flow
   */
  async login(credentials: TestCredentials, remember: boolean = false): Promise<void> {
    await this.fillCredentials(credentials);

    if (remember) {
      await this.toggleRememberMe(true);
    }

    await this.submitLogin();
  }

  async loginAndWaitForDashboard(credentials: TestCredentials): Promise<void> {
    await this.login(credentials);
    await this.waitForNavigation(ROUTES.DASHBOARD);
  }

  async loginWithEnterKey(credentials: TestCredentials): Promise<void> {
    await this.fillCredentials(credentials);
    await this.pressEnter();
  }

  /**
   * Navigation actions
   */
  async goToRegister(): Promise<void> {
    await this.registerLink.click();
    await this.waitForNavigation(ROUTES.REGISTER);
  }

  async goToForgotPassword(): Promise<void> {
    await this.forgotPasswordLink.click();
    // Assuming forgot password has its own route
    await this.waitForNavigation();
  }

  /**
   * Validation and error checking
   */
  async getEmailErrorMessage(): Promise<string | null> {
    if (await this.emailError.isVisible()) {
      return await this.emailError.textContent();
    }
    return null;
  }

  async getPasswordErrorMessage(): Promise<string | null> {
    if (await this.passwordError.isVisible()) {
      return await this.passwordError.textContent();
    }
    return null;
  }

  async getGeneralErrorMessage(): Promise<string | null> {
    if (await this.generalError.isVisible()) {
      return await this.generalError.textContent();
    }
    return null;
  }

  async getAllErrorMessages(): Promise<string[]> {
    const errors: string[] = [];

    const emailError = await this.getEmailErrorMessage();
    if (emailError) errors.push(emailError);

    const passwordError = await this.getPasswordErrorMessage();
    if (passwordError) errors.push(passwordError);

    const generalError = await this.getGeneralErrorMessage();
    if (generalError) errors.push(generalError);

    return errors;
  }

  /**
   * Form state checking
   */
  async isLoginButtonEnabled(): Promise<boolean> {
    return await this.loginButton.isEnabled();
  }

  async isLoginButtonDisabled(): Promise<boolean> {
    return await this.loginButton.isDisabled();
  }

  async isFormValid(): Promise<boolean> {
    const emailValue = await this.emailInput.inputValue();
    const passwordValue = await this.passwordInput.inputValue();

    return emailValue.length > 0 && passwordValue.length > 0;
  }

  async isLoadingVisible(): Promise<boolean> {
    return await this.submitLoadingIndicator.isVisible();
  }

  async isPasswordVisible(): Promise<boolean> {
    const type = await this.passwordInput.getAttribute('type');
    return type === 'text';
  }

  async isRememberMeChecked(): Promise<boolean> {
    return await this.rememberMeCheckbox.isChecked();
  }

  /**
   * Assertions specific to login page
   */
  async assertOnLoginPage(): Promise<void> {
    await expect(this.page).toHaveURL(ROUTES.LOGIN);
    await expect(this.loginForm).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async assertEmailError(expectedError?: string): Promise<void> {
    await expect(this.emailError).toBeVisible({ timeout: TIMEOUTS.NORMAL });

    if (expectedError) {
      await expect(this.emailError).toContainText(expectedError);
    }
  }

  async assertPasswordError(expectedError?: string): Promise<void> {
    await expect(this.passwordError).toBeVisible({ timeout: TIMEOUTS.NORMAL });

    if (expectedError) {
      await expect(this.passwordError).toContainText(expectedError);
    }
  }

  async assertGeneralError(expectedError?: string): Promise<void> {
    await expect(this.generalError).toBeVisible({ timeout: TIMEOUTS.NORMAL });

    if (expectedError) {
      await expect(this.generalError).toContainText(expectedError);
    }
  }

  async assertLoginSuccess(): Promise<void> {
    // Should redirect to dashboard
    await this.waitForNavigation(ROUTES.DASHBOARD);
    await expect(this.page).toHaveURL(ROUTES.DASHBOARD);
  }

  async assertLoadingState(): Promise<void> {
    await expect(this.submitLoadingIndicator).toBeVisible({ timeout: TIMEOUTS.FAST });
    await expect(this.loginButton).toBeDisabled();
  }

  async assertFormFieldsRequired(): Promise<void> {
    // Clear form and try to submit
    await this.emailInput.fill('');
    await this.passwordInput.fill('');
    await this.clickLogin();

    // Should show validation errors
    await this.assertEmailError();
    await this.assertPasswordError();
  }

  async assertInvalidCredentialsError(): Promise<void> {
    await this.assertGeneralError(ERROR_MESSAGES.LOGIN.INVALID_CREDENTIALS);
  }

  async assertNetworkError(): Promise<void> {
    await this.assertGeneralError(ERROR_MESSAGES.LOGIN.NETWORK_ERROR);
  }

  async assertServerError(): Promise<void> {
    await this.assertGeneralError(ERROR_MESSAGES.LOGIN.SERVER_ERROR);
  }

  /**
   * Accessibility testing
   */
  async checkFormAccessibility(): Promise<void> {
    // Check form labels
    await expect(this.emailInput).toHaveAttribute('aria-label');
    await expect(this.passwordInput).toHaveAttribute('aria-label');

    // Check form validation
    await expect(this.emailInput).toHaveAttribute('type', 'email');
    await expect(this.passwordInput).toHaveAttribute('type', 'password');

    // Check button accessibility
    await expect(this.loginButton).toHaveAttribute('type', 'submit');
  }

  /**
   * Mobile-specific interactions
   */
  async testMobileLogin(credentials: TestCredentials): Promise<void> {
    await this.setMobileViewport();
    await this.assertPageLoaded();

    // Test touch interactions
    await this.emailInput.tap();
    await this.fillEmail(credentials.email);

    await this.passwordInput.tap();
    await this.fillPassword(credentials.password);

    await this.loginButton.tap();
  }

  /**
   * Keyboard navigation testing
   */
  async testKeyboardNavigation(): Promise<void> {
    // Tab through form elements
    await this.emailInput.focus();
    await this.pressTab();
    await expect(this.passwordInput).toBeFocused();

    await this.pressTab();
    if (await this.rememberMeCheckbox.isVisible()) {
      await expect(this.rememberMeCheckbox).toBeFocused();
      await this.pressTab();
    }

    await expect(this.loginButton).toBeFocused();
  }

  /**
   * Performance testing helpers
   */
  async measureLoginPerformance(credentials: TestCredentials): Promise<number> {
    const startTime = Date.now();

    await this.login(credentials);
    await this.waitForNavigation(ROUTES.DASHBOARD);

    const endTime = Date.now();
    return endTime - startTime;
  }
}