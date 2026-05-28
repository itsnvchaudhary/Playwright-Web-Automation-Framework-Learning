const { test, expect } = require('@playwright/test');

test('Playwright Locator Test', async ({ page }) => {

  await page.goto("https://rahulshettyacademy.com/angularpractice/");

  

  // getByPlaceholder
  await page.getByPlaceholder('Password').fill('Naveen@123');

  // getByLabel - checkbox
  await page.getByLabel('Check me out if you Love IceCreams!').check();

  // getByLabel - dropdown
  await page.getByLabel('Gender').selectOption('Female');

  // getByRole - radio button
  await page.getByLabel('Employed').check();


  
  // submit button
  await page.getByRole('button', { name: 'Submit' }).click();

  // assertion using getByText
  await expect( page.getByText('Success! The Form has been submitted successfully!.') ).toBeVisible();

  // go to the shop tab
  await page.getByRole('link', { name: "Shop" }).click();

  //chaining 
  await page.locator("app-card").filter({ hasText: 'Nokia Edge' }).getByRole("button").click();


});