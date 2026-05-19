const {test,expect} = require('@playwright/test');

//test.describe.configure({mode : "parallel"});

test.describe.configure({mode : "serial"});
test('Hidden Elements validation', async ({page})=>{
    // to verify the element is hidden
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   await page.goBack();
   await page.goForward();
   await expect(page.locator("#displayed-text")).toBeVisible();
   await page.locator("#hide-textbox").click();
   await expect(page.locator("#displayed-text")).toBeHidden();
   // to verify the java/javascript popups 
   page.on('dialog', Dailog => Dailog.accept());
   await page.locator("#alertbtn").click();
   //to hover the mouse on any element 
   await page.locator("#mousehover").hover();
   await page.locator("//a[text()='Top']").click();
   //handling frames 
   const frame = page.frameLocator('#courses-iframe');
  await frame.getByRole('link', { name: /all access/i }).click();
  const wholeString = await frame.locator(".text h2").innerText();
  const word = wholeString.split(" ")[1];
  console.log(word);

});

test('taking screenthot' ,async({page})=>{

   await page.goto("https://www.google.com/");
   //whole page screen shot
   await page.screenshot({path : 'GoogleHome.png'});
   //element screen shot on the page
   await page.locator("svg.lnXdpd").screenshot({path : 'GoogleHome1.png'});

   //visual compariason of scrrenshot
   expect(await page.locator("svg.lnXdpd").screenshot()).toMatchSnapshot('GoogleHome.png');


});
test('visual testing using screenthot' ,async({page})=>{

   await page.goto("https://www.google.com/");
   //visual compariason of scrrenshot
   expect(await page.locator("svg.lnXdpd").screenshot()).toMatchSnapshot('GoogleHomePic.png');


});
