const { Before, After, BeforeStep, AfterStep ,setDefaultTimeout  } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const { POManager } = require("../../pages/POManager");
setDefaultTimeout(60 * 1000); 
// ✅ Runs BEFORE EACH SCENARIO (not all scenarios)
Before(async function () {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    this.poManager = new POManager(this.page);

    console.log(">>> Before Scenario: Browser launched");
});

// ✅ Runs AFTER EACH SCENARIO
After(async function () {
    if (this.browser) {
        await this.browser.close();
    }

    console.log(">>> After Scenario: Browser closed");
});

// ✅ Runs BEFORE EVERY STEP
BeforeStep(async function ({ pickleStep }) {
    console.log(">>> Before Step:", pickleStep.text);
});

// ✅ Runs AFTER EVERY STEP
AfterStep(async function ({ pickleStep, result }) {
    console.log(">>> After Step:", pickleStep.text);

    // ✅ Capture screenshot on failure
    if (result.status === "FAILED") {
        const screenshot = await this.page.screenshot({
            path: `./screenshots/failure-${Date.now()}.png`,
            fullPage: true
        });

        console.log("Screenshot captured for failed step");
    }
});