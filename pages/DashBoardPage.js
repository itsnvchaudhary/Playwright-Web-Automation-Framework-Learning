class DashBoardPage {
    constructor(page) {
        this.page = page;
        this.productrBodyLocators = page.locator(".card-body");
        this.cartLocators = page.getByRole('listitem');
    }
    async addTOCart(productName) {
        // select the given product
        await this.productrBodyLocators.filter({ hasText: productName }).getByRole("button", { name: 'Add To Cart' }).click();

    }
    async navigateToCartTab() {
        // go to cart section
        await this.cartLocators.getByRole("button", { name: "Cart" }).click();
        await this.page.waitForLoadState('networkidle');
    }

};

module.exports = { DashBoardPage };