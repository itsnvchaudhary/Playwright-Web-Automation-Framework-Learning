const { expect } = require('@playwright/test');
class ThankYouPage{
  constructor(page){
    this.page = page;
    this.realtext = page.getByText("Thankyou for the order.");
  };
  async verifyThankYou(){
    await expect(this.realtext).toBeVisible();
  }
};
module.exports = {ThankYouPage};