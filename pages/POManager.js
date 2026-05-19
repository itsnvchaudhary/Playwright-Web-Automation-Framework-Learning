const { LoginPage } = require('../pages/LoginPage');
const { DashBoardPage } = require('../pages/DashBoardPage');
const { CartPage } = require('../pages/CartPage.js');
const { CheckOutPage } = require('../pages/CheckOutPage');
const { ThankYouPage } = require('../pages/ThankYouPage');
class POManager {
    constructor(page) {
        this.loginPage = new LoginPage(page);
        this.dashBoardPage = new DashBoardPage(page);
        this.cartPage = new CartPage(page);
        this.checkOutPage = new CheckOutPage(page);
        this.thankYouPage = new ThankYouPage(page);
    };
    getLoginPage() {
        return this.loginPage;
    };
    getDashBoardPage() {
        return this.dashBoardPage;
    };
    getDashBoardPage() {
        return this.dashBoardPage;
    };
    getCartPage() {
        return this.cartPage;
    };
    getCheckOutPage() {
        return this.checkOutPage;
    };
    getThankYouPage() {
        return this.thankYouPage;
    };

};
module.exports = { POManager };