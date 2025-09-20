import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for E2E testing with Docker Compose
 *
 * This configuration is designed to work with the full-stack Docker environment
 * where services are already running via docker-compose.e2e.yml
 */
export default defineConfig({
  // Test directory structure
  testDir: './e2e',

  // Global timeout settings
  timeout: 30 * 1000, // 30 seconds per test
  globalTimeout: 10 * 60 * 1000, // 10 minutes for entire test suite
  expect: {
    timeout: 10 * 1000, // 10 seconds for assertions (increased for Docker)
  },

  // Test execution settings
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1, // Retry once even locally for Docker stability
  workers: process.env.CI ? 1 : 4, // Limit workers to avoid overwhelming Docker

  // Test reporter configuration
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/docker-results.json' }],
    ...(process.env.CI ? [['github']] : [['list']]),
  ],

  // Global test configuration
  use: {
    // Base URLs for Docker services
    baseURL: process.env.FRONTEND_URL || 'http://localhost:3001',

    // API URL for backend requests
    extraHTTPHeaders: {
      'Accept': 'application/json',
    },

    // Browser context options
    viewport: { width: 1280, height: 720 },

    // Capture screenshots and videos on failure
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    // Collect traces on failure for debugging
    trace: 'on-first-retry',

    // Slower actions for Docker environment
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
  },

  // Test output and artifacts
  outputDir: 'test-results/',

  // Project configurations - simplified for Docker testing
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Custom context options for Docker environment
        contextOptions: {
          ignoreHTTPSErrors: true, // For self-signed certs in test env
        },
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        contextOptions: {
          ignoreHTTPSErrors: true,
        },
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        contextOptions: {
          ignoreHTTPSErrors: true,
        },
      },
    },
    // Mobile testing
    {
      name: 'mobile',
      use: {
        ...devices['Pixel 5'],
        contextOptions: {
          ignoreHTTPSErrors: true,
        },
      },
    },
  ],

  // NO webServer configuration - services are managed by Docker Compose
  // The E2E test script should ensure services are running before tests start
});