const {test,expect} = require('@playwright/test');

test('Playwright Calender Test', async ({page})=>
{
    const date = "5";
    const month = "2";
    const year = "2027";
    //navigate to the web page where calender is 
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    //click on the dates section to open the date picker
    await page.locator(".react-date-picker__wrapper").click();
    // two times click on the label of the picker on the header to open the year picker
    await page.locator(".react-calendar__navigation__label").dblclick();
    //click on the yaear using the click operations
    await page.getByText(year).click();
    //click on the month using numbers in array
    await page.locator(".react-calendar__year-view__months__month").nth(Number(month)-1).click();
    //click on the date using x path
    await page.locator("//abbr[text() = '"+date+"']").click()
    

    const formattedDate = year+"-"+month.padStart(2, "0")+"-"+date.padStart(2, "0");

    await expect(page.locator("input[type='date']")).toHaveAttribute('value',formattedDate);

});

