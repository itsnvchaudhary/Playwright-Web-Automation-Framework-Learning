const {test, expect} = require('@playwright/test');


test('Playwright client web Test Locator' , async ({ browser }) =>
{
   //make a new context 
   const  context = await browser.newContext();
   const page  = await context.newPage();
   const email = "naveen@gamil.comk";

   //go to e commorce website and login using your cred 
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("enter your passsword").fill("Naveen@123");
   await page.getByRole("button",{name : 'login'}).click();

   // wait for login page 
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body").first().waitFor();


   // initilaize the objects on the login page
   const productName = "ZARA COAT 3";

   // select the given product
   await page.locator(".card-body").filter({ hasText: productName}).getByRole("button" ,{name : 'Add To Cart' }).click();
   

   // go to cart section
   await page.getByRole('listitem').getByRole("button", {name : "Cart"}).click();
   

   // wait for cart page to load 
   await page.waitForLoadState('networkidle');
   await page.locator(".cartWrap").first().waitFor();

   // initilize objects on cart page
   const cartProducts =  page.locator(".cartWrap");

   //verify our product is added in the cart
    await expect(page.getByText(productName)).toBeVisible();

   // click on check out
    await page.getByRole("button",{ name : 'Checkout'}).click();

   // fill the shillping location deatils in the check out page
    await page.getByPlaceholder("Select Country").pressSequentially("india");

   // Select india from the given values
    await page.getByRole("button",{ name : 'India'}).nth(1).click();

   // click on place order button
    await page.locator('.action__submit').click();

   // verify order is placed on the thank you page
     await expect (page.getByText("Thankyou for the order.")).toBeVisible();

}
);
