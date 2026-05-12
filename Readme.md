# Step-by-Step guide to trigger your Playwright tests using Accessibility Tool — TestMu AI (Formerly LambdaTest)

## Prerequisites

- Your [TestMu AI Username and Access key](/support/docs/using-environment-variables-for-authentication-credentials/)
- Setup your local machine as per your testing framework.

### Step 1: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

```bash
git clone <URL_OF_THE_REPO>
```

If you are using your own project, make sure you update the **Hub endpoint** in your tests file. By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

Configure the desired capabilities based on your test requirements. For example:

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("browserName", "chrome");
capabilities.setCapability("version", "70.0");
capabilities.setCapability("platform", "win10"); # If this cap isn't specified, it will just get the any available one
capabilities.setCapability("build", "LambdaTestSampleApp");
capabilities.setCapability("name", "LambdaTestJavaSample");
```

> You can generate capabilities for your test requirements with the help of our inbuilt 🔗 [Capabilities Generator](https://www.testmuai.com/capabilities-generator/).

### Step 2: Establish User Authentication

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [TestMu AI Profile page](https://accounts.lambdatest.com/detail/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

For Linux/macOS

```bash
export LT_USERNAME=<LAMBDATEST_USERNAME>
export LT_ACCESS_KEY=<LAMBDATEST_ACCESS_KEY>
```

For Windows

```bash
set LT_USERNAME=YOUR_LAMBDATEST_USERNAME
set LT_ACCESS_KEY=YOUR_LAMBDATEST_ACCESS_KEY
```

### Step 3: Configure the Necessary Capabilities

To enable the accessibility testing within your automated test suite, set the `accessibility: true` in your configuration file. You can also define other settings capabilities as described below.

```javascript
const capabilities = {
  "accessibility": true, // Enable accessibility testing
  "accessibility.wcagVersion": "wcag21a", // Specify WCAG version (e.g., WCAG 2.1 Level A)
  "accessibility.bestPractice": false, // Exclude best practice issues from results
  "accessibility.needsReview": true // Include issues that need review
};
```

### Step 4: Add the following add-on Script

TestMu AI uses an internal Chrome extension that powers accessibility scans and generates accessibility reports. In your `lambdatest-setup.js` file add these three lines after your page creation command as shown below:

```javascript
// Load the extension for report generation of the accessibility tests
await ltPage.goto("chrome://extensions/?id=johgkfjmgfeapgnbkmfkfkaholjbcnah");
const secondToggleButton = ltPage.locator('#crToggle').nth(0); 
await secondToggleButton.click();
```

### Step 5: Execute and Monitor your Test

Now execute your tests and visit the [Automation Dashboard](https://accounts.lambdatest.com/dashboard). Click on the Accessibility tab and check the report generated.

```bash
npx playwright test --config=./playwright.config.js
```

<img src="images/playwright-accessibility-1.png"> <br />

You can access the detailed accessibility report from the [Accessibility Automation Reports Dashboard](https://accessibility.lambdatest.com/automation)

<img src="images/playwright-accessibility.png">

## 🚀 [LambdaTest is Now TestMu AI](https://www.testmuai.com/lambdatest-is-now-testmuai/)

👋 Welcome to TestMu AI, the next evolution of LambdaTest. As of January 2026, LambdaTest has officially rebranded to TestMu AI. We have evolved from a cross-browser testing cloud into a unified, AI-native quality engineering platform designed for the modern DevOps era.

Whether you have been part of the LambdaTest community for years or are just discovering TestMu AI, our mission remains the same: to help you ship faster with high-scale test execution, autonomous testing, and deep quality analytics.

**🔄 Our Rebrand Journey**

We chose the name TestMu AI to reflect our shift towards intelligent, autonomous testing. While our identity has changed, our core technology and commitment to the testing community stay the same.

**✨ Specialties**

- 🤖 AI-Native Test Execution (Formerly LambdaTest)
- ⚡ Autonomous Test Automation
- 🌐 Cross-Browser & Mobile Testing
- 📊 Unified Quality Intelligence

👉 Find [LambdaTest's New Home](https://www.testmuai.com/).