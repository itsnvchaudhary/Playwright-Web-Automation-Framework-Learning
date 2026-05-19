const {test,expect} = require('@playwright/test');


test('Booking login Test' , async ({browser})=>{

    //Step 1 — Login
    const context = await browser.newContext();
    const page = await context.newPage();
    await login(page);
    await expect(page.getByText("Browse Events →")).toBeVisible();

    //Step 2 — Create a new event
    await page.getByRole('button',{name : "Admin"}).click();
    await page.getByText("Manage Events").first().click();
    const eventTitle =  "AuraIndia :"+ Date.now();
    await page.locator('#event-title-input').fill(eventTitle);
    await page.locator('#admin-event-form textarea').fill("Diljit dosanjh new india tour please book your tickets asasp");
    await page.getByLabel('City').fill("Delhi");
    await page.getByLabel('Venue').fill("Gymkhana Club");
    await page.getByLabel('Price').fill("10000");
    await page.getByLabel('Total Seats').fill("5000");
    await page.getByLabel('Event Date & Time').fill("2027-04-16T00:24");
    await page.locator('#add-event-btn').click();
    await expect(page.getByText("Event created!")).toBeVisible();

   //Step 3 — Find the event card and capture seats
   await page.locator('#nav-events').click();
   await page.locator('#event-card').first().waitFor();
   await expect(page.locator('#event-card').getByText(eventTitle)).toBeVisible();
   await page.getByPlaceholder('Search events, venues…').pressSequentially(eventTitle);
   await expect(page.locator('#event-card').getByText(eventTitle)).toBeVisible();
   const totelnumberSeats =  await page.locator('#event-card').filter({hasText :  eventTitle }).getByText("seats available").innerText();
   const numberSeats =   totelnumberSeats.split(" ")[0];

   //Step 4 — Start booking
 
   await page.locator('#event-card').getByText(eventTitle).click();
   

  //Step 5 — Fill booking form
   await page.locator('#ticket-count').waitFor();
   await expect(page.locator('#ticket-count')).toContainText('1');
   await page.getByLabel('Full Name').fill("tina");
   await page.locator('#customer-email').fill("tina@gmail.com");
   await page.getByPlaceholder('+91 98765 43210').fill("+91 99217 85632");
   await page.getByRole("button",{ name : 'Confirm Booking'}).click();
   await expect (page.getByText('Booking Confirmed!')).toBeVisible();

  // Step 6 — Verify booking confirmation
   const refernceid = await page.locator('.booking-ref').textContent();
   console.log(refernceid);

   //Step 7 — Verify in My Bookings
   await page.locator('#nav-bookings').click();
   expect(page.url()).toContain('/bookings');
   await expect(page.locator('#booking-card').first()).toBeVisible();
   await expect(page.locator('#booking-card').filter({hasText: refernceid })).toBeVisible();
   await expect(page.locator('#booking-card').filter({hasText: refernceid })).toContainText(eventTitle)

   //Step 8 — Verify seat reduction


   await page.locator('#nav-events').click();
   await expect(page.locator('#event-card').first()).toBeVisible();
   await expect(page.locator('#event-card').filter({hasText: eventTitle })).toBeVisible();
   const totelnumberSeatsafterbooking =  await page.locator('#event-card').filter({hasText :  eventTitle }).getByText("seats available").innerText();
   const numberSeatsafterbooking =   totelnumberSeatsafterbooking.split(" ")[0];
   console.log(numberSeatsafterbooking);
   console.log(numberSeats);
   
   expect(Number(numberSeatsafterbooking)).toBe( Number(numberSeats) - 1);

});
async function login(page) {
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  await page.getByLabel('Email').fill('naveen@gmail.com');
  await page.getByLabel('Password').fill('Nav@1234');
  await page.getByRole('button', { name: 'Sign In' }).click();
}




