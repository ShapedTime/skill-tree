/**
 * BasePage - Common page functionality for all page objects
 *
 * Provides shared functionality like navigation, error handling,
 * and common UI interactions that all pages inherit.
 */

import { Page, Locator, expect } from '@playwright/test';
import { TIMEOUTS, ROUTES } from '../fixtures/test-data';

export abstract class BasePage {
  constructor(protected page: Page) {}

  /**
   * Navigate to the page URL
   */
  abstract navigate(): Promise<void>;

  /**
   * Verify the page is loaded correctly
   */
  abstract isLoaded(): Promise<boolean>;

  /**
   * Common UI elements present on most pages
   */
  get loadingIndicator(): Locator {
    return this.page.locator('[data-testid="loading"], .loading, .spinner');
  }

  get errorMessage(): Locator {
    return this.page.locator('[data-testid="error-message"], .error-message');
  }

  get successMessage(): Locator {
    return this.page.locator('[data-testid="success-message"], .success-message');
  }

  get pageTitle(): Locator {
    return this.page.locator('h1, [data-testid="page-title"]');
  }

  /**
   * Navigation utilities
   */
  async waitForNavigation(url?: string): Promise<void> {
    if (url) {
      await this.page.waitForURL(url, { timeout: TIMEOUTS.NAVIGATION });
    } else {
      await this.page.waitForLoadState('networkidle', { timeout: TIMEOUTS.NAVIGATION });
    }
  }

  async goToHome(): Promise<void> {
    await this.page.goto(ROUTES.HOME);
    await this.waitForNavigation();
  }

  async goToLogin(): Promise<void> {
    await this.page.goto(ROUTES.LOGIN);
    await this.waitForNavigation();
  }

  async goToRegister(): Promise<void> {
    await this.page.goto(ROUTES.REGISTER);
    await this.waitForNavigation();
  }

  async goToDashboard(): Promise<void> {
    await this.page.goto(ROUTES.DASHBOARD);
    await this.waitForNavigation();
  }

  /**
   * Common assertions
   */
  async assertPageLoaded(): Promise<void> {
    const isLoaded = await this.isLoaded();
    expect(isLoaded).toBe(true);
  }

  async assertErrorDisplayed(errorText?: string): Promise<void> {
    await expect(this.errorMessage).toBeVisible({ timeout: TIMEOUTS.NORMAL });

    if (errorText) {
      await expect(this.errorMessage).toContainText(errorText);
    }
  }

  async assertSuccessDisplayed(successText?: string): Promise<void> {
    await expect(this.successMessage).toBeVisible({ timeout: TIMEOUTS.NORMAL });

    if (successText) {
      await expect(this.successMessage).toContainText(successText);
    }
  }

  async assertLoadingDisplayed(): Promise<void> {
    await expect(this.loadingIndicator).toBeVisible({ timeout: TIMEOUTS.FAST });
  }

  async assertLoadingHidden(): Promise<void> {
    await expect(this.loadingIndicator).toBeHidden({ timeout: TIMEOUTS.NORMAL });
  }

  /**
   * Form utilities
   */
  async fillField(selector: string, value: string): Promise<void> {
    await this.page.fill(selector, value);
  }

  async clickButton(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  async checkCheckbox(selector: string): Promise<void> {
    await this.page.check(selector);
  }

  async selectOption(selector: string, value: string): Promise<void> {
    await this.page.selectOption(selector, value);
  }

  /**
   * Wait utilities
   */
  async waitForElement(selector: string, timeout: number = TIMEOUTS.NORMAL): Promise<Locator> {
    const element = this.page.locator(selector);
    await expect(element).toBeVisible({ timeout });
    return element;
  }

  async waitForElementHidden(selector: string, timeout: number = TIMEOUTS.NORMAL): Promise<void> {
    const element = this.page.locator(selector);
    await expect(element).toBeHidden({ timeout });
  }

  async waitForText(text: string, timeout: number = TIMEOUTS.NORMAL): Promise<void> {
    await expect(this.page.locator(`text="${text}"`)).toBeVisible({ timeout });
  }

  /**
   * Network utilities
   */
  async waitForApiResponse(urlPattern: string, timeout: number = TIMEOUTS.NORMAL): Promise<void> {
    await this.page.waitForResponse(
      response => response.url().includes(urlPattern),
      { timeout }
    );
  }

  async mockApiResponse(urlPattern: string, response: any, status: number = 200): Promise<void> {
    await this.page.route(`**${urlPattern}`, route => {
      route.fulfill({
        status,
        contentType: 'application/json',
        body: JSON.stringify(response),
      });
    });
  }

  /**
   * Screenshot utilities for visual testing
   */
  async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({
      path: `test-results/screenshots/${name}.png`,
      fullPage: true,
    });
  }

  /**
   * Keyboard and mouse utilities
   */
  async pressKey(key: string): Promise<void> {
    await this.page.keyboard.press(key);
  }

  async pressEnter(): Promise<void> {
    await this.pressKey('Enter');
  }

  async pressEscape(): Promise<void> {
    await this.pressKey('Escape');
  }

  async pressTab(): Promise<void> {
    await this.pressKey('Tab');
  }

  /**
   * Mobile and responsive testing utilities
   */
  async setMobileViewport(): Promise<void> {
    await this.page.setViewportSize({ width: 375, height: 667 }); // iPhone size
  }

  async setTabletViewport(): Promise<void> {
    await this.page.setViewportSize({ width: 768, height: 1024 }); // iPad size
  }

  async setDesktopViewport(): Promise<void> {
    await this.page.setViewportSize({ width: 1280, height: 720 }); // Desktop size
  }

  /**
   * Accessibility utilities
   */
  async checkAccessibility(): Promise<void> {
    // Basic accessibility checks
    await expect(this.page.locator('h1')).toBeVisible(); // Page should have a heading

    // Check for alt text on images
    const images = this.page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const image = images.nth(i);
      const alt = await image.getAttribute('alt');
      expect(alt).toBeTruthy(); // All images should have alt text
    }
  }

  /**
   * Local storage utilities
   */
  async getLocalStorageItem(key: string): Promise<string | null> {
    return await this.page.evaluate((key) => localStorage.getItem(key), key);
  }

  async setLocalStorageItem(key: string, value: string): Promise<void> {
    await this.page.evaluate(
      ({ key, value }) => localStorage.setItem(key, value),
      { key, value }
    );
  }

  async clearLocalStorage(): Promise<void> {
    await this.page.evaluate(() => localStorage.clear());
  }

  /**
   * Session storage utilities
   */
  async getSessionStorageItem(key: string): Promise<string | null> {
    return await this.page.evaluate((key) => sessionStorage.getItem(key), key);
  }

  async setSessionStorageItem(key: string, value: string): Promise<void> {
    await this.page.evaluate(
      ({ key, value }) => sessionStorage.setItem(key, value),
      { key, value }
    );
  }

  async clearSessionStorage(): Promise<void> {
    await this.page.evaluate(() => sessionStorage.clear());
  }
}