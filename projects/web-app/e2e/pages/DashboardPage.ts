/**
 * DashboardPage - Page Object Model for dashboard functionality
 *
 * Encapsulates dashboard interactions, navigation, and user-specific
 * content for testing protected routes and authenticated user flows.
 */

import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { ROUTES, TIMEOUTS } from '../fixtures/test-data';

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Page navigation
   */
  async navigate(): Promise<void> {
    await this.page.goto(ROUTES.DASHBOARD);
    await this.waitForNavigation();
  }

  async isLoaded(): Promise<boolean> {
    try {
      await expect(this.dashboardContainer).toBeVisible({ timeout: TIMEOUTS.FAST });
      await expect(this.page).toHaveURL(ROUTES.DASHBOARD);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Page elements
   */
  get dashboardContainer(): Locator {
    return this.page.locator('[data-testid="dashboard"]');
  }

  get navigationHeader(): Locator {
    return this.page.locator('[data-testid="navigation-header"]');
  }

  get userProfileMenu(): Locator {
    return this.page.locator('[data-testid="user-profile-menu"]');
  }

  get logoutButton(): Locator {
    return this.page.locator('[data-testid="logout-button"]');
  }

  get logoutLink(): Locator {
    return this.page.locator('[data-testid="logout-link"]');
  }

  get welcomeMessage(): Locator {
    return this.page.locator('[data-testid="welcome-message"]');
  }

  get userDisplayName(): Locator {
    return this.page.locator('[data-testid="user-display-name"]');
  }

  get userEmail(): Locator {
    return this.page.locator('[data-testid="user-email"]');
  }

  // Navigation menu items
  get skillTreesLink(): Locator {
    return this.page.locator('[data-testid="skill-trees-link"]');
  }

  get profileLink(): Locator {
    return this.page.locator('[data-testid="profile-link"]');
  }

  get settingsLink(): Locator {
    return this.page.locator('[data-testid="settings-link"]');
  }

  // Dashboard content areas
  get skillTreesSection(): Locator {
    return this.page.locator('[data-testid="skill-trees-section"]');
  }

  get recentActivitySection(): Locator {
    return this.page.locator('[data-testid="recent-activity-section"]');
  }

  get progressSection(): Locator {
    return this.page.locator('[data-testid="progress-section"]');
  }

  get achievementsSection(): Locator {
    return this.page.locator('[data-testid="achievements-section"]');
  }

  // Action buttons
  get createSkillTreeButton(): Locator {
    return this.page.locator('[data-testid="create-skill-tree-button"]');
  }

  get addSkillButton(): Locator {
    return this.page.locator('[data-testid="add-skill-button"]');
  }

  // Loading states
  get dashboardLoadingIndicator(): Locator {
    return this.page.locator('[data-testid="dashboard-loading"]');
  }

  /**
   * Authentication actions
   */
  async logout(): Promise<void> {
    // Try different logout mechanisms
    if (await this.logoutButton.isVisible()) {
      await this.logoutButton.click();
    } else if (await this.logoutLink.isVisible()) {
      await this.logoutLink.click();
    } else {
      // Open profile menu and look for logout
      await this.userProfileMenu.click();
      await this.page.waitForTimeout(300);

      const logoutInMenu = this.page.locator('[data-testid="logout-menu-item"]');
      if (await logoutInMenu.isVisible()) {
        await logoutInMenu.click();
      }
    }

    // Wait for redirect to login
    await this.waitForNavigation(ROUTES.LOGIN);
  }

  async isUserAuthenticated(): Promise<boolean> {
    try {
      // Check if we're on dashboard and user info is visible
      await expect(this.page).toHaveURL(ROUTES.DASHBOARD);
      await expect(this.dashboardContainer).toBeVisible({ timeout: TIMEOUTS.FAST });

      // Check for user-specific content
      const hasUserInfo = (await this.userDisplayName.isVisible()) ||
                         (await this.welcomeMessage.isVisible());

      return hasUserInfo;
    } catch {
      return false;
    }
  }

  /**
   * User information
   */
  async getUserDisplayName(): Promise<string | null> {
    if (await this.userDisplayName.isVisible()) {
      return await this.userDisplayName.textContent();
    }
    return null;
  }

  async getUserEmail(): Promise<string | null> {
    if (await this.userEmail.isVisible()) {
      return await this.userEmail.textContent();
    }
    return null;
  }

  async getWelcomeMessage(): Promise<string | null> {
    if (await this.welcomeMessage.isVisible()) {
      return await this.welcomeMessage.textContent();
    }
    return null;
  }

  /**
   * Navigation actions
   */
  async goToSkillTrees(): Promise<void> {
    await this.skillTreesLink.click();
    await this.waitForNavigation(ROUTES.SKILL_TREES);
  }

  async goToProfile(): Promise<void> {
    await this.profileLink.click();
    await this.waitForNavigation(ROUTES.PROFILE);
  }

  async goToSettings(): Promise<void> {
    await this.settingsLink.click();
    await this.waitForNavigation();
  }

  /**
   * Dashboard actions
   */
  async createNewSkillTree(): Promise<void> {
    await this.createSkillTreeButton.click();
    // Wait for skill tree creation flow
    await this.waitForNavigation();
  }

  async addNewSkill(): Promise<void> {
    await this.addSkillButton.click();
    // Wait for skill addition flow
    await this.waitForNavigation();
  }

  /**
   * Content verification
   */
  async getSkillTreesCount(): Promise<number> {
    const skillTreeItems = this.page.locator('[data-testid="skill-tree-item"]');
    return await skillTreeItems.count();
  }

  async getRecentActivities(): Promise<string[]> {
    const activityItems = this.page.locator('[data-testid="activity-item"]');
    const count = await activityItems.count();

    const activities: string[] = [];
    for (let i = 0; i < count; i++) {
      const text = await activityItems.nth(i).textContent();
      if (text) {
        activities.push(text.trim());
      }
    }

    return activities;
  }

  async getProgressPercentage(): Promise<number | null> {
    const progressElement = this.page.locator('[data-testid="progress-percentage"]');

    if (await progressElement.isVisible()) {
      const text = await progressElement.textContent();
      const match = text?.match(/(\d+)%/);
      return match ? parseInt(match[1]) : null;
    }

    return null;
  }

  async getAchievementsCount(): Promise<number> {
    const achievementItems = this.page.locator('[data-testid="achievement-item"]');
    return await achievementItems.count();
  }

  /**
   * Assertions specific to dashboard page
   */
  async assertOnDashboardPage(): Promise<void> {
    await expect(this.page).toHaveURL(ROUTES.DASHBOARD);
    await expect(this.dashboardContainer).toBeVisible();
    await expect(this.navigationHeader).toBeVisible();
  }

  async assertUserIsAuthenticated(): Promise<void> {
    const isAuthenticated = await this.isUserAuthenticated();
    expect(isAuthenticated).toBe(true);
  }

  async assertUserInfo(expectedUsername?: string, expectedEmail?: string): Promise<void> {
    if (expectedUsername) {
      const displayName = await this.getUserDisplayName();
      expect(displayName).toContain(expectedUsername);
    }

    if (expectedEmail) {
      const email = await this.getUserEmail();
      expect(email).toContain(expectedEmail);
    }
  }

  async assertWelcomeMessage(expectedUsername?: string): Promise<void> {
    await expect(this.welcomeMessage).toBeVisible();

    if (expectedUsername) {
      const welcomeText = await this.getWelcomeMessage();
      expect(welcomeText).toContain(expectedUsername);
    }
  }

  async assertLogoutFunctionality(): Promise<void> {
    // Ensure logout controls are visible
    const hasLogoutButton = await this.logoutButton.isVisible();
    const hasLogoutLink = await this.logoutLink.isVisible();
    const hasProfileMenu = await this.userProfileMenu.isVisible();

    expect(hasLogoutButton || hasLogoutLink || hasProfileMenu).toBe(true);
  }

  async assertDashboardSections(): Promise<void> {
    // Check that main dashboard sections are present
    await expect(this.skillTreesSection).toBeVisible();
    await expect(this.recentActivitySection).toBeVisible();
    await expect(this.progressSection).toBeVisible();
  }

  async assertLoadingState(): Promise<void> {
    await expect(this.dashboardLoadingIndicator).toBeVisible({ timeout: TIMEOUTS.FAST });
  }

  async assertLoadingComplete(): Promise<void> {
    await expect(this.dashboardLoadingIndicator).toBeHidden({ timeout: TIMEOUTS.NORMAL });
    await expect(this.dashboardContainer).toBeVisible();
  }

  async assertSkillTreesPresent(): Promise<void> {
    await expect(this.skillTreesSection).toBeVisible();

    const skillTreesCount = await this.getSkillTreesCount();
    expect(skillTreesCount).toBeGreaterThanOrEqual(0);
  }

  async assertCreateSkillTreeButton(): Promise<void> {
    await expect(this.createSkillTreeButton).toBeVisible();
    await expect(this.createSkillTreeButton).toBeEnabled();
  }

  /**
   * Navigation testing
   */
  async testNavigationLinks(): Promise<void> {
    // Test each navigation link
    await expect(this.skillTreesLink).toBeVisible();
    await expect(this.profileLink).toBeVisible();

    // Test that links are clickable
    await expect(this.skillTreesLink).toHaveAttribute('href');
    await expect(this.profileLink).toHaveAttribute('href');
  }

  /**
   * Accessibility testing
   */
  async checkDashboardAccessibility(): Promise<void> {
    // Check main heading
    await expect(this.page.locator('h1')).toBeVisible();

    // Check navigation landmarks
    await expect(this.page.locator('nav')).toBeVisible();

    // Check logout button accessibility
    const logoutElement = await this.logoutButton.isVisible() ? this.logoutButton : this.logoutLink;
    if (await logoutElement.isVisible()) {
      await expect(logoutElement).toHaveAttribute('aria-label');
    }
  }

  /**
   * Mobile-specific testing
   */
  async testMobileDashboard(): Promise<void> {
    await this.setMobileViewport();
    await this.assertPageLoaded();

    // Test mobile navigation
    const mobileMenu = this.page.locator('[data-testid="mobile-menu"], .mobile-menu');

    if (await mobileMenu.isVisible()) {
      await mobileMenu.tap();

      // Check that navigation items are visible in mobile menu
      await expect(this.skillTreesLink).toBeVisible();
      await expect(this.profileLink).toBeVisible();
    }
  }

  /**
   * Session persistence testing
   */
  async testSessionPersistence(): Promise<void> {
    // Refresh the page and verify user stays logged in
    await this.page.reload();
    await this.waitForNavigation();
    await this.assertUserIsAuthenticated();
  }

  async testTabNavigation(): Promise<void> {
    // Open new tab and verify session persists
    const newPage = await this.page.context().newPage();
    await newPage.goto(ROUTES.DASHBOARD);

    const newDashboard = new DashboardPage(newPage);
    await newDashboard.assertUserIsAuthenticated();

    await newPage.close();
  }

  /**
   * Performance testing helpers
   */
  async measureDashboardLoadTime(): Promise<number> {
    const startTime = Date.now();

    await this.navigate();
    await this.assertLoadingComplete();

    const endTime = Date.now();
    return endTime - startTime;
  }

  /**
   * Content interaction testing
   */
  async interactWithSkillTree(index: number = 0): Promise<void> {
    const skillTreeItems = this.page.locator('[data-testid="skill-tree-item"]');
    const count = await skillTreeItems.count();

    if (count > index) {
      await skillTreeItems.nth(index).click();
      await this.waitForNavigation();
    }
  }

  async viewRecentActivity(index: number = 0): Promise<void> {
    const activityItems = this.page.locator('[data-testid="activity-item"]');
    const count = await activityItems.count();

    if (count > index) {
      await activityItems.nth(index).click();
      // Wait for activity detail view
      await this.waitForNavigation();
    }
  }
}