
const   { POManager } = require ('../pages/POManager');
const  {customtest}  = require ('../utils/CustomTest');

customtest('Playwright client web Test Locator using POM with test datafixture', async ({ page  ,testDataForOder}) => {

    const poManager = new POManager(page);
    //login Page

    const loginPage = poManager.getLoginPage();
    await loginPage.doLogin(testDataForOder.login.url, testDataForOder.login.email, testDataForOder.login.password);

    //dashboard page
    const dashBoardPage = poManager.getDashBoardPage();
    await dashBoardPage.addTOCart(testDataForOder.product.name);
    await dashBoardPage.navigateToCartTab();

    //cartPage
    const cartPage = poManager.getCartPage();
    cartPage.verifyProductNameOnCartPage(testDataForOder.product.name);
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