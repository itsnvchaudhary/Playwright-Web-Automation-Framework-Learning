import { expect  , Page , Locator} from '@playwright/test';
export class CartPage {
    page : Page;
    checkoutButtonLocator : Locator;
    constructor(page : Page) {
        this.page = page;
        this.checkoutButtonLocator = page.getByRole("button", { name: 'Checkout' });
    };
    async verifyProductNameOnCartPage(productName : string) {
        await expect(this.page.getByText(productName)).toBeVisible();
    }
    async gotoCheckoutTab() {
        await this.checkoutButtonLocator.click();
    }


}
