const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  reporter: [
  ['list'],
  ['html'],
  ['@azure/playwright/reporter']
],
  retries : 1,
  workers : 5,

  use: {
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'on'
  },

  projects: [
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        headless: true,
        ignoreHTTPSErrors: true,
        permissions: ['geolocation'],
        viewport: { width: 720, height: 720 },
        ...devices['iPhone 14 Pro Max']
      }
    },
    {
      name: 'chrome-mobile',
      use: {
        browserName: 'chromium',
        headless: false,
      }
    }
  ]
});