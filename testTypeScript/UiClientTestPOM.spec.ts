import { test } from '@playwright/test';
import { POManager } from '../pagesTypeScript/POManager';
import testdata from '../testdata/UiClientTestPom.data.json';

type TestData = {
  login: {
    url: string;
    email: string;
    password: string;
  };
  product: {
    name: string;
  };
};

const testdataArray: TestData[] = testdata as TestData[];


for (const data of testdataArray) {
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
    await cartPage.verifyProductNameOnCartPage(data.product.name);
    await cartPage.gotoCheckoutTab();

    //CheckoutPage
    const checkOutPage = poManager.getCheckOutPage();
    await checkOutPage.filladdress();
    await checkOutPage.placeOrder();

    //thank you page
    const thankYouPage = poManager.getThankYouPage();
    await thankYouPage.verifyThankYou();

  }
  );
}
