const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.js',
// testDir: './testTypeScript',
  timeout: 30 * 1000,
 
compilerOptions: {
    "resolveJsonModule": true,
    "esModuleInterop": true
  },

//  reporter: [
//     [html],
//     ['list'],
//     ['allure-playwright'],
//   ],
 reporter: [
  ['list'],
  ['html'],
  // ['allure-playwright'],
  ['@azure/playwright/reporter']
],

  retries : 2,
  expect: {
    timeout: 30 * 1000,
  },

  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },
});