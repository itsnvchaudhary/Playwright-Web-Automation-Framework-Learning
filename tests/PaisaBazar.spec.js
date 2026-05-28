const {test,expect} = require('@playwright/test');

test('Playwright Test Paisa bazar', async ({page})=>{

    await page.goto('https://creditreport.paisabazaar.com/credit-report/apply', { waitUntil: 'domcontentloaded', timeout: 60000 } );
    await page.frameLocator("#sso-sign-in-widget-iframe").getByPlaceholder("Mobile Number").fill("9876543221");


});