import { LoginPage } from './LoginPage';
import  { DashBoardPage } from './DashBoardPage' ;
import { CartPage } from'./CartPage';
import { CheckOutPage } from './CheckOutPage';
import { ThankYouPage } from './ThankYouPage';
import { Page } from '@playwright/test';
export class POManager {
       loginPage : LoginPage;
       dashBoardPage : DashBoardPage;
       cartPage : CartPage;
       checkOutPage : CheckOutPage;
       thankYouPage : ThankYouPage;
    constructor(page : Page) {
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
