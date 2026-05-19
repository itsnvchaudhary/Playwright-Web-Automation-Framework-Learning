const {test, expect} = require('@playwright/test');


test('Playwright client web Test' , async ({ browser }) =>
{
   //make a new context 
   const  context = await browser.newContext();
   const page  = await context.newPage();
   const email = "naveen@gamil.comk";

   //go to e commorce website and login using your cred 
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Naveen@123");
   await page.locator("#login").click();

   // wait for login page 
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body").first().waitFor();


   // initilaize the objects on the login page
   const productName = "ZARA COAT 3"
   const products =  await page.locator(".card-body");
   const countsproducts = await products.count();


   // itrate through all the products and 
   for (let i = 0 ; i<countsproducts ; ++i){
      // check for all the products name is equal to our given product
     if( await products.nth(i).locator("b").textContent() === productName){
         await products.nth(i).locator("text=  Add To Cart").click();
         break;
     }
   }

   // go to cart section
   await page.locator("[routerlink ='/dashboard/cart']").click();

   // wait for cart page to load 
   await page.waitForLoadState('networkidle');
   await page.locator(".cartWrap").first().waitFor();

   // initilize objects on cart page
   const cartProducts =  page.locator(".cartWrap");

   // verify our product is added in the cart
   await expect(cartProducts.last()).toContainText(productName);

   // click on check out
   await page.locator("button:has-text('Checkout')").click();


   // fill the shillping location deatils in the check out page
   await page.locator("[ placeholder*=  'Country' ]").pressSequentially("india");

   // wait from the dropdownlist load
    await page.locator(".ta-results").waitFor();

   // initilize objects on the checkout page
   const dropdownValues = await page.locator("button[type = 'button']");
   const countdropdownValues = await dropdownValues.count();

   // triverse all the values and select matching value
   for (let i=0;i<countdropdownValues;i++){
      if( await dropdownValues.nth(i).textContent() === " India"){
         await dropdownValues.nth(i).click();
         break;
      }
   }

   // to verify the email id same is same as login id
   await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);

   // click on place order button
   await page.locator(".action__submit").click();

   // verify order is placed on the thank you page
   await expect (page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

   // grap the order id number form the thank you page
   const inputs = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   const orderId = inputs.split('|')[1].trim();
   console.log(orderId);

   // go to the orders tab
   await page.locator('button[routerlink*="myorders"]').click();

   // wait for ordr table to load
   await page.locator("tbody tr").first().waitFor();

   //initilize objects in order table
   const productTableRow = await page.locator("tbody tr");
   const countProductTableRow = await productTableRow.count();

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
