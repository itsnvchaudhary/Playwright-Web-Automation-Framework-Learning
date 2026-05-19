const {test ,expect} = require ("@playwright/test");


test('@API Playwright Api Request Abort and Page on method', async ({browser})=>{
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

   // it will abort all tha api call that are loading css on the current page
  await page.route("**/*.css" , route=> route.abort());

  // it will listen on the api calls on the page and print the url on the current page
  page.on('request' ,request=> console.log(request.url()));
  // it will click on the document link and wait for the event page and capture that page
  const [newpage] = await Promise.all([
     context.waitForEvent('page'),
     page.locator("[href*='documents-request']").click()
  ]);

  // it will abort all tha pi call that are loading images on the new page
  await newpage.route('**/*.{png,jpg,jpeg}' , route=> route.abort());

  // it will listen on the api calls on the newpage and print the url and the response status together
  newpage.on('response' ,response=> console.log(response.url(), response.status()));

});