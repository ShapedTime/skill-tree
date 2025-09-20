import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for SkillTree authentication E2E testing
 *
 * This configuration supports:
 * - Multi-browser testing (Chromium, Firefox, WebKit)
 * - Mobile device testing
 * - Video recording on failure
 * - Screenshot capture on failure
 * - Parallel execution with retries
 */
export default defineConfig({
  // Test directory structure
  testDir: './e2e',

  // Global timeout settings
  timeout: 30 * 1000, // 30 seconds per test
  globalTimeout: 10 * 60 * 1000, // 10 minutes for entire test suite
  expect: {
    timeout: 5 * 1000, // 5 seconds for assertions
  },

  // Test execution settings
  fullyParallel: true,
  forbidOnly: !!process.env.CI, // Fail if test.only() is committed
  retries: process.env.CI ? 2 : 0, // Retry on CI environments
  workers: process.env.CI ? 1 : undefined, // Use all CPUs locally, 1 worker on CI

  // Test reporter configuration
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
    ...(process.env.CI ? [['github']] : [['list']]),
  ],

  // Global test configuration
  use: {
    // Base URL for the application
    baseURL: 'http://localhost:3000',

    // Browser context options
    viewport: { width: 1280, height: 720 },

    // Capture screenshots and videos on failure
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    // Collect traces on failure for debugging
    trace: 'on-first-retry',

    // API request tracing
    extraHTTPHeaders: {
      'Accept': 'application/json',
    },
  },

  // Test output and artifacts
  outputDir: 'test-results/',

  // Project configurations for different browsers and devices
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // Mobile testing
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 12'] },
    },

    // Tablet testing
    {
      name: 'tablet',
      use: { ...devices['iPad Pro'] },
    },
  ],

  // Development server configuration
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000, // 2 minutes to start the dev server
  },
});