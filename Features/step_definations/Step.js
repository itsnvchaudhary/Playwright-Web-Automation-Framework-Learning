const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
Given('login to the e commerce web {string} {string} {string}', async function (url, username, password) {
    const loginPage = this.poManager.getLoginPage();
    await loginPage.doLogin(url, username, password);
}
);


When('we add {string} product to cart', async function (productName) {
    const dashBoardPage = this.poManager.getDashBoardPage();
    await dashBoardPage.addTOCart(productName);
    await dashBoardPage.navigateToCartTab();
});


Then('Verify {string} in the cart', async function (productName) {
    const cartPage = this.poManager.getCartPage();
    await cartPage.verifyProductNameOnCartPage(productName);
    await cartPage.gotoCheckoutTab();
});


When('enter valid details and place the order', async function () {
    const checkOutPage = this.poManager.getCheckOutPage();
    await checkOutPage.filladdress();
    await checkOutPage.placeOrder();
});


Then('Verify order is present in the order history', async function () {
    const thankYouPage = this.poManager.getThankYouPage();
    await thankYouPage.verifyThankYou();
});


Given('login to the Practice  web {string} {string} {string}', async function (url, username, password) {
    
    const userName = this.page.locator("#username");
    const userPass = this.page.locator("#password");
    await this.page.goto(url);
    console.log("Page Title:-" + await this.page.title());
    await userName.fill(username);//wrong username
    await userPass.fill(password);
    await this.page.locator("[type = 'submit']").click();
});

Then('Verify invalid login error', async function () {
    console.log(await this.page.locator("[style*= 'block']").textContent());
    await expect(this.page.locator("[style*= 'block']")).toContainText("Incorrect username/password.");
});
