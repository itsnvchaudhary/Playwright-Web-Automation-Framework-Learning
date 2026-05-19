const { test, expect } = require('@playwright/test');
const { APIUtils } = require('../utils/APIUtils');
const { json } = require('node:stream/consumers');

const loginPayload = {
  userEmail: 'naveen@gamil.comk',
  userPassword: 'Naveen@123'
};

const orderPayload = {
  orders: [{
    country: 'Argentina',
    productOrderedId: '6960eac0c941646b7a8b3e68'
  }]
};
const fakeResponsePayload = {data:[],message:"No Orders"};

let token;
let orderId;

test.beforeAll(async ({ playwright  }) => {
 
 const apiContext = await playwright.request.newContext({
    ignoreHTTPSErrors: true,
  });

  const apiUtils = new APIUtils(apiContext,loginPayload);

  token = await apiUtils.getToken();

  orderId = await apiUtils.createOrder(orderPayload , token);
});



test('@API Playwright client web Test API' , async ({ page }) =>
{
   
   //go to e commorce website and login using APi Token
   await page.addInitScript( value =>{
      window.localStorage.setItem('token' ,value)
   },token);
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

  //re routing the response of orders using playwright
   await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*", 
    async route => {
     const response = await route.fetch({ ignoreHTTPSErrors: true });
     await route.fulfill({
      status: response.status(),
      contentType: 'application/json',
      body: JSON.stringify(fakeResponsePayload),
     });
   });
   // go to the orders tab
   await page.locator('button[routerlink*="myorders"]').click();
   await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
   // verify orderid assersations on order summary page 
    await expect(page.getByText(" You have No Orders to show at this time.")).toBeVisible();

  
});
