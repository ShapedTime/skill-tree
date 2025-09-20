/**
 * RegisterPage - Page Object Model for registration functionality
 *
 * Encapsulates all registration form interactions, validations,
 * and navigation for reliable E2E testing.
 */

import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { TestUser, ROUTES, TIMEOUTS, ERROR_MESSAGES, SUCCESS_MESSAGES } from '../fixtures/test-data';

export class RegisterPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Page navigation
   */
  async navigate(): Promise<void> {
    await this.page.goto(ROUTES.REGISTER);
    await this.waitForNavigation();
  }

  async isLoaded(): Promise<boolean> {
    try {
      await expect(this.registerForm).toBeVisible({ timeout: TIMEOUTS.FAST });
      await expect(this.page).toHaveURL(ROUTES.REGISTER);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Page elements
   */
  get registerForm(): Locator {
    return this.page.locator('[data-testid="register-form"]');
  }

  get emailInput(): Locator {
    return this.page.locator('[data-testid="email-input"]');
  }

  get usernameInput(): Locator {
    return this.page.locator('[data-testid="username-input"]');
  }

  get passwordInput(): Locator {
    return this.page.locator('[data-testid="password-input"]');
  }

  get confirmPasswordInput(): Locator {
    return this.page.locator('[data-testid="confirm-password-input"]');
  }

  get registerButton(): Locator {
    return this.page.locator('[data-testid="register-button"]');
  }

  get termsCheckbox(): Locator {
    return this.page.locator('[data-testid="terms-checkbox"]');
  }

  get termsLink(): Locator {
    return this.page.locator('[data-testid="terms-link"]');
  }

  get loginLink(): Locator {
    return this.page.locator('[data-testid="login-link"]');
  }

  get showPasswordButton(): Locator {
    return this.page.locator('[data-testid="show-password-button"]');
  }

  get showConfirmPasswordButton(): Locator {
    return this.page.locator('[data-testid="show-confirm-password-button"]');
  }

  // Error elements
  get emailError(): Locator {
    return this.page.locator('[data-testid="email-error"]');
  }

  get usernameError(): Locator {
    return this.page.locator('[data-testid="username-error"]');
  }

  get passwordError(): Locator {
    return this.page.locator('[data-testid="password-error"]');
  }

  get confirmPasswordError(): Locator {
    return this.page.locator('[data-testid="confirm-password-error"]');
  }

  get termsError(): Locator {
    return this.page.locator('[data-testid="terms-error"]');
  }

  get generalError(): Locator {
    return this.page.locator('[data-testid="register-error"]');
  }

  // Password strength indicator
  get passwordStrengthIndicator(): Locator {
    return this.page.locator('[data-testid="password-strength"]');
  }

  get passwordRequirements(): Locator {
    return this.page.locator('[data-testid="password-requirements"]');
  }

  // Loading states
  get submitLoadingIndicator(): Locator {
    return this.page.locator('[data-testid="register-loading"]');
  }

  /**
   * Form interactions
   */
  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async fillUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async fillConfirmPassword(confirmPassword: string): Promise<void> {
    await this.confirmPasswordInput.fill(confirmPassword);
  }

  async fillUserData(user: TestUser): Promise<void> {
    await this.fillEmail(user.email);
    await this.fillUsername(user.username);
    await this.fillPassword(user.password);

    if (user.confirmPassword !== undefined) {
      await this.fillConfirmPassword(user.confirmPassword);
    } else {
      await this.fillConfirmPassword(user.password);
    }
  }

  async acceptTerms(accept: boolean = true): Promise<void> {
    if (accept) {
      await this.termsCheckbox.check();
    } else {
      await this.termsCheckbox.uncheck();
    }
  }

  async clickRegister(): Promise<void> {
    await this.registerButton.click();
  }

  async submitRegistration(): Promise<void> {
    await this.clickRegister();
    // Wait for form submission to process
    await this.page.waitForTimeout(500);
  }

  async togglePasswordVisibility(): Promise<void> {
    await this.showPasswordButton.click();
  }

  async toggleConfirmPasswordVisibility(): Promise<void> {
    await this.showConfirmPasswordButton.click();
  }

  /**
   * Complete registration flow
   */
  async register(user: TestUser, acceptTerms: boolean = true): Promise<void> {
    await this.fillUserData(user);

    if (acceptTerms) {
      await this.acceptTerms(true);
    }

    await this.submitRegistration();
  }

  async registerAndWaitForDashboard(user: TestUser): Promise<void> {
    await this.register(user);
    await this.waitForNavigation(ROUTES.DASHBOARD);
  }

  async registerWithEnterKey(user: TestUser): Promise<void> {
    await this.fillUserData(user);
    await this.acceptTerms(true);
    await this.pressEnter();
  }

  /**
   * Navigation actions
   */
  async goToLogin(): Promise<void> {
    await this.loginLink.click();
    await this.waitForNavigation(ROUTES.LOGIN);
  }

  async openTermsOfService(): Promise<void> {
    // This might open in a new tab/window
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.termsLink.click()
    ]);

    return newPage;
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

  async getUsernameErrorMessage(): Promise<string | null> {
    if (await this.usernameError.isVisible()) {
      return await this.usernameError.textContent();
    }
    return null;
  }

  async getPasswordErrorMessage(): Promise<string | null> {
    if (await this.passwordError.isVisible()) {
      return await this.passwordError.textContent();
    }
    return null;
  }

  async getConfirmPasswordErrorMessage(): Promise<string | null> {
    if (await this.confirmPasswordError.isVisible()) {
      return await this.confirmPasswordError.textContent();
    }
    return null;
  }

  async getTermsErrorMessage(): Promise<string | null> {
    if (await this.termsError.isVisible()) {
      return await this.termsError.textContent();
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

    const usernameError = await this.getUsernameErrorMessage();
    if (usernameError) errors.push(usernameError);

    const passwordError = await this.getPasswordErrorMessage();
    if (passwordError) errors.push(passwordError);

    const confirmPasswordError = await this.getConfirmPasswordErrorMessage();
    if (confirmPasswordError) errors.push(confirmPasswordError);

    const termsError = await this.getTermsErrorMessage();
    if (termsError) errors.push(termsError);

    const generalError = await this.getGeneralErrorMessage();
    if (generalError) errors.push(generalError);

    return errors;
  }

  /**
   * Form state checking
   */
  async isRegisterButtonEnabled(): Promise<boolean> {
    return await this.registerButton.isEnabled();
  }

  async isRegisterButtonDisabled(): Promise<boolean> {
    return await this.registerButton.isDisabled();
  }

  async isFormValid(): Promise<boolean> {
    const emailValue = await this.emailInput.inputValue();
    const usernameValue = await this.usernameInput.inputValue();
    const passwordValue = await this.passwordInput.inputValue();
    const confirmPasswordValue = await this.confirmPasswordInput.inputValue();
    const termsAccepted = await this.termsCheckbox.isChecked();

    return (
      emailValue.length > 0 &&
      usernameValue.length > 0 &&
      passwordValue.length > 0 &&
      confirmPasswordValue.length > 0 &&
      termsAccepted
    );
  }

  async isLoadingVisible(): Promise<boolean> {
    return await this.submitLoadingIndicator.isVisible();
  }

  async isPasswordVisible(): Promise<boolean> {
    const type = await this.passwordInput.getAttribute('type');
    return type === 'text';
  }

  async isConfirmPasswordVisible(): Promise<boolean> {
    const type = await this.confirmPasswordInput.getAttribute('type');
    return type === 'text';
  }

  async isTermsAccepted(): Promise<boolean> {
    return await this.termsCheckbox.isChecked();
  }

  async getPasswordStrength(): Promise<string | null> {
    if (await this.passwordStrengthIndicator.isVisible()) {
      return await this.passwordStrengthIndicator.textContent();
    }
    return null;
  }

  /**
   * Assertions specific to register page
   */
  async assertOnRegisterPage(): Promise<void> {
    await expect(this.page).toHaveURL(ROUTES.REGISTER);
    await expect(this.registerForm).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.confirmPasswordInput).toBeVisible();
    await expect(this.registerButton).toBeVisible();
    await expect(this.termsCheckbox).toBeVisible();
  }

  async assertEmailError(expectedError?: string): Promise<void> {
    await expect(this.emailError).toBeVisible({ timeout: TIMEOUTS.NORMAL });

    if (expectedError) {
      await expect(this.emailError).toContainText(expectedError);
    }
  }

  async assertUsernameError(expectedError?: string): Promise<void> {
    await expect(this.usernameError).toBeVisible({ timeout: TIMEOUTS.NORMAL });

    if (expectedError) {
      await expect(this.usernameError).toContainText(expectedError);
    }
  }

  async assertPasswordError(expectedError?: string): Promise<void> {
    await expect(this.passwordError).toBeVisible({ timeout: TIMEOUTS.NORMAL });

    if (expectedError) {
      await expect(this.passwordError).toContainText(expectedError);
    }
  }

  async assertConfirmPasswordError(expectedError?: string): Promise<void> {
    await expect(this.confirmPasswordError).toBeVisible({ timeout: TIMEOUTS.NORMAL });

    if (expectedError) {
      await expect(this.confirmPasswordError).toContainText(expectedError);
    }
  }

  async assertTermsError(expectedError?: string): Promise<void> {
    await expect(this.termsError).toBeVisible({ timeout: TIMEOUTS.NORMAL });

    if (expectedError) {
      await expect(this.termsError).toContainText(expectedError);
    }
  }

  async assertGeneralError(expectedError?: string): Promise<void> {
    await expect(this.generalError).toBeVisible({ timeout: TIMEOUTS.NORMAL });

    if (expectedError) {
      await expect(this.generalError).toContainText(expectedError);
    }
  }

  async assertRegistrationSuccess(): Promise<void> {
    // Should redirect to dashboard or login
    await expect(this.page).not.toHaveURL(ROUTES.REGISTER);

    // Could redirect to dashboard (auto-login) or login page (confirm email)
    const currentUrl = this.page.url();
    expect(currentUrl.includes(ROUTES.DASHBOARD) || currentUrl.includes(ROUTES.LOGIN)).toBe(true);
  }

  async assertLoadingState(): Promise<void> {
    await expect(this.submitLoadingIndicator).toBeVisible({ timeout: TIMEOUTS.FAST });
    await expect(this.registerButton).toBeDisabled();
  }

  async assertFormFieldsRequired(): Promise<void> {
    // Clear form and try to submit
    await this.emailInput.fill('');
    await this.usernameInput.fill('');
    await this.passwordInput.fill('');
    await this.confirmPasswordInput.fill('');
    await this.termsCheckbox.uncheck();
    await this.clickRegister();

    // Should show validation errors
    await this.assertEmailError();
    await this.assertUsernameError();
    await this.assertPasswordError();
    await this.assertConfirmPasswordError();
    await this.assertTermsError();
  }

  async assertEmailExistsError(): Promise<void> {
    await this.assertGeneralError(ERROR_MESSAGES.REGISTRATION.EMAIL_EXISTS);
  }

  async assertUsernameExistsError(): Promise<void> {
    await this.assertGeneralError(ERROR_MESSAGES.REGISTRATION.USERNAME_EXISTS);
  }

  async assertPasswordMismatchError(): Promise<void> {
    await this.assertConfirmPasswordError(ERROR_MESSAGES.REGISTRATION.PASSWORDS_MISMATCH);
  }

  async assertWeakPasswordError(): Promise<void> {
    await this.assertPasswordError(ERROR_MESSAGES.REGISTRATION.WEAK_PASSWORD);
  }

  async assertInvalidEmailError(): Promise<void> {
    await this.assertEmailError(ERROR_MESSAGES.REGISTRATION.INVALID_EMAIL);
  }

  async assertTermsRequiredError(): Promise<void> {
    await this.assertTermsError(ERROR_MESSAGES.REGISTRATION.TERMS_REQUIRED);
  }

  /**
   * Password validation testing
   */
  async testPasswordStrength(password: string): Promise<string | null> {
    await this.fillPassword(password);
    // Wait for password strength calculation
    await this.page.waitForTimeout(300);
    return await this.getPasswordStrength();
  }

  async testPasswordMismatch(password: string, confirmPassword: string): Promise<void> {
    await this.fillPassword(password);
    await this.fillConfirmPassword(confirmPassword);
    await this.clickRegister();
    await this.assertPasswordMismatchError();
  }

  /**
   * Accessibility testing
   */
  async checkFormAccessibility(): Promise<void> {
    // Check form labels
    await expect(this.emailInput).toHaveAttribute('aria-label');
    await expect(this.usernameInput).toHaveAttribute('aria-label');
    await expect(this.passwordInput).toHaveAttribute('aria-label');
    await expect(this.confirmPasswordInput).toHaveAttribute('aria-label');

    // Check form validation
    await expect(this.emailInput).toHaveAttribute('type', 'email');
    await expect(this.passwordInput).toHaveAttribute('type', 'password');
    await expect(this.confirmPasswordInput).toHaveAttribute('type', 'password');

    // Check button accessibility
    await expect(this.registerButton).toHaveAttribute('type', 'submit');

    // Check checkbox accessibility
    await expect(this.termsCheckbox).toHaveAttribute('type', 'checkbox');
  }

  /**
   * Mobile-specific interactions
   */
  async testMobileRegistration(user: TestUser): Promise<void> {
    await this.setMobileViewport();
    await this.assertPageLoaded();

    // Test touch interactions
    await this.emailInput.tap();
    await this.fillEmail(user.email);

    await this.usernameInput.tap();
    await this.fillUsername(user.username);

    await this.passwordInput.tap();
    await this.fillPassword(user.password);

    await this.confirmPasswordInput.tap();
    await this.fillConfirmPassword(user.confirmPassword || user.password);

    await this.termsCheckbox.tap();
    await this.registerButton.tap();
  }

  /**
   * Keyboard navigation testing
   */
  async testKeyboardNavigation(): Promise<void> {
    // Tab through form elements
    await this.emailInput.focus();
    await this.pressTab();
    await expect(this.usernameInput).toBeFocused();

    await this.pressTab();
    await expect(this.passwordInput).toBeFocused();

    await this.pressTab();
    await expect(this.confirmPasswordInput).toBeFocused();

    await this.pressTab();
    await expect(this.termsCheckbox).toBeFocused();

    await this.pressTab();
    await expect(this.registerButton).toBeFocused();
  }

  /**
   * Performance testing helpers
   */
  async measureRegistrationPerformance(user: TestUser): Promise<number> {
    const startTime = Date.now();

    await this.register(user);
    await this.waitForNavigation();

    const endTime = Date.now();
    return endTime - startTime;
  }
}