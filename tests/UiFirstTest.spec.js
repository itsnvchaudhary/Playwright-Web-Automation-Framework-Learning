const {test, expect} = require('@playwright/test');


test('BrowserContext Playwright Test' , async ({ browser }) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("#username");
    const userPass = page.locator("#password");
    const allElements = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log("Page Title:-" +  await page.title() );
    
    await userName.fill("Naveenshetty");//wrong username
    await userPass.fill("Learning@830$3mK2");

    await page.locator("[type = 'submit']").click();

    console.log(await page.locator("[style*= 'block']").textContent());
    await expect(page.locator("[style*= 'block']")).toContainText("Incorrect username/password.");

    await userName.fill("");

    await userName.fill("rahulshettyacademy");
    await page.locator("[type = 'submit']").click();

    console.log( await allElements.first().textContent());
    // console.log( await page.locator(".card-body a").nth(1).textContent());
    // console.log( await page.locator(".card-body a").last().textContent());

    const allelementText = await allElements.allTextContents();
    console.log(allelementText);

}
);

test('Page Playwright Test' , async ({ page }) =>
{
    await page.goto("https://www.google.com/");
    console.log("Page Title:-" + await page.title() );
    await expect(page).toHaveTitle("Google");

}
);

test('UI Control Test' , async ({ page }) =>
{
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   //initiliaze objects 
   const userName =  page.locator("#username");
   const userPass =  page.locator("#password");
   const dropDown = page.locator("select.form-control");
   const dcumentLink =page.locator("[href*='documents-request']");
   //selecting the value from dropdow
   await dropDown.selectOption("Consultant");

   //selecting the radio button
   await page.locator("[type ='radio']").last().click();

   //handling the web based pop up
   await page.locator("#okayBtn").click();
    
   //verify the radio button is slecting using assersation
   console.log( await page.locator("[type ='radio']").first().isChecked());
   await expect(  page.locator("[type ='radio']").last()).toBeChecked();

   //Verify the first radio button is unchecked creating own assersation cause we dont have .isUnchecked assersation
    expect( await page.locator("[type ='radio']").first().isChecked()).toBeFalsy();
   //selecting the checkbox
   await page.locator("#terms").click();

   //verify the checkbox is checked using assersation
   await expect(  page.locator("#terms")).toBeChecked();
   
   //verify the document link is blinking or not

   await expect (dcumentLink).toHaveAttribute("class","blinkingText");

}
);

test('Child window handling' ,async ({browser}) =>
{
      const context =  await browser.newContext();
      const page = await context.newPage();
      const dropDown = page.locator("select.form-control");
      const dcumentLink =page.locator("[href*='documents-request']");


      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

      const [newpage] = await Promise.all([
         context.waitForEvent('page'),
        dcumentLink.click()
      ])


     const textValue = await newpage.locator("p.red").textContent();
     const testarray  =  textValue.split("@")[1];
     const domain = testarray.split(" ")[0];
  

     await page.locator("#username").fill(domain);
     console.log(await page.locator("#username").inputValue());

    


});