import { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { Locator } from "@playwright/test";
export class ThankYouPage{
  page:Page;
  realtext:Locator;
  constructor(page : Page){
    this.page = page;
    this.realtext = page.getByText("Thankyou for the order.");
  };
  async verifyThankYou(){
    await expect(this.realtext).toBeVisible();
  };
};
