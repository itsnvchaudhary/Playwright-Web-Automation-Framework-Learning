const { test, expect } = require('@playwright/test');
const { APIUtils } = require('../utils/APIUtils');

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

let token;
let orderId;

test.beforeAll(async ({ playwright }) => {
 
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

   // wait for login page 
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body").first().waitFor();


   // initilaize the objects on the login page
   const productName = "ZARA COAT 3"
 

   // go to the orders tab
   await page.locator('button[routerlink*="myorders"]').click();

   // wait for ordr table to load
   await page.locator("tbody tr").first().waitFor();

   //initilize objects in order table
   const productTableRow = await page.locator("tbody tr");
   const countProductTableRow = await productTableRow.count();

   //orderId is coming from the from the api data creation global variable

   //triverse in the table
   for ( let i=0;i<countProductTableRow;i++){
      const rowid = await productTableRow.nth(i).locator("th").textContent();
      if(rowid.includes(orderId)){
            await productTableRow.nth(i).locator("button:has-text('View')").click();
            break;
      }
   }

   //wait for the order summary page
   await page.locator(".col-md-6 .-main").waitFor();

   // verify orderid assersations on order summary page 
    await expect(page.locator(".col-md-6 .-main")).toHaveText(orderId);

  
}
);
