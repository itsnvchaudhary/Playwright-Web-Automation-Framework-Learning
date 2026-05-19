import {Page ,Locator} from '@playwright/test';

export class LoginPage {
   page : Page;
   emailLocator : Locator;
   passwordLocator : Locator;
   submitButtonLocator : Locator;
  constructor(page : Page) {
    this.page = page;
    this.emailLocator = page.getByPlaceholder("email@example.com");
    this.passwordLocator = page.getByPlaceholder("enter your passsword");
    this.submitButtonLocator = page.getByRole("button", { name: 'login' });
  };
  async doLogin(url : string, username :string, password : string) {
    await this.page.goto(url);
    await this.emailLocator.fill(username);
    await this.passwordLocator.fill(password);
    await this.submitButtonLocator.click();
    await this.page.waitForLoadState('networkidle');
  };
};