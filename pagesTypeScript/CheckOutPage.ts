import {Page ,Locator} from '@playwright/test';
export class CheckOutPage{
   page : Page;
   countryTextBox : Locator;
   coruntryFromDropdown : Locator;
   submitButtonLocator : Locator;
   constructor(page : Page){
     this.page  = page;
     this.countryTextBox =  page.getByPlaceholder("Select Country");
     this.coruntryFromDropdown = page.getByRole("button", { name: 'India' }).nth(1);
     this.submitButtonLocator =  page.locator('.action__submit');
   };
   async filladdress(){
        await this.countryTextBox.pressSequentially("india");
        await this.coruntryFromDropdown.click();
   };
   async placeOrder(){
      await this.submitButtonLocator.click();
   };  
};
