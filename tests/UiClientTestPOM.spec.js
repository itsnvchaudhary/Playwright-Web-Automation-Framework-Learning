const { test } = require('@playwright/test');
const { POManager } = require('../pages/POManager.js');
const testdata = require('../testdata/UiClientTestPom.data.json');

for (const data of testdata) {
  test(`Playwright client web Test Locator using POM ${data.product.name}`, async ({ page }) => {

    const poManager = new POManager(page);
    //login Page

    const loginPage = poManager.getLoginPage();
    await loginPage.doLogin(data.login.url, data.login.email, data.login.password);

    //dashboard page
    const dashBoardPage = poManager.getDashBoardPage();
    await dashBoardPage.addTOCart(data.product.name);
    await dashBoardPage.navigateToCartTab();

    //cartPage
    const cartPage = poManager.getCartPage();
    cartPage.verifyProductNameOnCartPage(data.product.name);
    cartPage.gotoCheckoutTab();

    //CheckoutPage
    const checkOutPage = poManager.getCheckOutPage();
    await checkOutPage.filladdress();
    await checkOutPage.placeOrder();

    //thank you page
    const thankYouPage = poManager.getThankYouPage();
    await thankYouPage.verifyThankYou();

  }
  );
};