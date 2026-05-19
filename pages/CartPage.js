const { expect } = require('@playwright/test');
class CartPage {

    constructor(page) {
        this.page = page;
        this.checkoutButtonLocator = page.getByRole("button", { name: 'Checkout' });
    };
    async verifyProductNameOnCartPage(productName) {
        await expect(this.page.getByText(productName)).toBeVisible();
    }
    async gotoCheckoutTab() {
        await this.checkoutButtonLocator.click();
    }


}
module.exports = { CartPage };