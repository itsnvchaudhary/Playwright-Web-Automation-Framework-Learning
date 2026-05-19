const { test, expect } = require('@playwright/test');

test('@API Playwright request interception using APi', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const email = "naveen@gamil.comk";

    //go to e commorce website and login using your cred 
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Naveen@123");
    await page.locator("#login").click();

    // go to the orders tab
    await page.locator('button[routerlink*="myorders"]').click();

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({ url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6" })
    );

    //click on view button of the first order
    await page.locator("//button[text()='View']").first().click();

  
    
});

