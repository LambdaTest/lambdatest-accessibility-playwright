const { devices } = require('@playwright/test')

// Playwright config to run tests on LambdaTest platform and local
const config = {
  testDir: 'tests',
  testMatch: '**/*.spec.js',
  timeout: 300000,
  workers: 4,
  use: {},
  projects: [
    // -- LambdaTest Config --
    // Accessibility Testing for Playwright is currently only supported on the Chrome browser
    //Browsers allowed: `Chrome`
    // name in the format: browserName:browserVersion:platform@lambdatest
    {
      name: 'chrome:latest:MacOS Ventura@lambdatest',
      use: {
        viewport: { width: 1920, height: 1080 }
      }
    },
    {
      name: 'chrome:latest:Windows 11@lambdatest',
      use: {
        viewport: { width: 1280, height: 720 }
      }
    },
  ]
}

module.exports = config
