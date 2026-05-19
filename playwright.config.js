const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
// testDir: './testTypeScript',
  timeout: 30 * 1000,
 
compilerOptions: {
    "resolveJsonModule": true,
    "esModuleInterop": true
  },

//  reporter: [
//     ['list'],
//     ['allure-playwright'],
//   ],
  reporter : 'html',

  retries : 2,
  expect: {
    timeout: 30 * 1000,
  },

  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on'
  },
});