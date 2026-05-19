const {test ,expect} = require('@playwright/test');

async function Login(page){
   await page.goto('https://eventhub.rahulshettyacademy.com/login');
  await page.getByLabel('Email').fill('naveen@gmail.com');
  await page.getByLabel('Password').fill('Nav@1234');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText("Browse Events →")).toBeVisible();
}

async function ticketBooking(numberOfTickets ,page){
    //Navigate to /events
    await page.locator("#nav-events").click();
    //Click Book Now on the very first event card (locate data-testid="event-card" → first → data-testid="book-now-btn")
    await page.locator("#event-card").first().locator("[data-testid='book-now-btn']").click();
    //Fill Full Name, Email (your email), Phone
    await page.getByLabel("Full Name").fill('Naveen Chaoudhary');
    await page.getByLabel("Email").fill("Naveen@gmail.com");
    await page.getByLabel("Phone Number").fill("+91 98674 53256");
    //select the number of tickets
    for (let i = 1 ; i<numberOfTickets ; ++i){
         await page.getByRole("button",{name:'+'}).click();
   }
   //Click confirm button (.confirm-booking-btn)
    await page.locator("#confirm-booking").click();
 }

 async function validateBookingDeatails(page){

   // - Click View My Bookings link
   await  page.getByRole("button",{name:'View My Bookings'}).click();
   // - Click the first View Details link
   await page.locator('#booking-card').first().getByRole("button",{name:"View Details"}).click();
   // - Assert URL is /bookings
   expect(page.url()).toContain('/bookings');
   // - Assert: text Booking Information is visible on the page
   await expect(page.getByText("Booking Information")).toBeVisible();
   // - Read booking ref from page
   const refid = await page.locator(".font-mono").first().textContent();
   // - Read event title from h1
   const eventTitle = await page.locator(".text-2xl").textContent();
   // - Assert validation : "first character of booking ref equals first character of event title"
   expect(refid.charAt(0)).toEqual(eventTitle.charAt(0));
 }

 async function checkRefundEligibility(page){
   //- Click the Check Refund Eligibility button
   await page.getByRole("button" ,{name : 'Check eligibility for refund?'}).click();
   //- Assert: spinner element (#refund-spinner) is immediately visible
   await expect(page.locator("#refund-spinner")).toBeVisible();
   //- Assert: spinner is no longer visible within 6 seconds
   await page.waitForTimeout(6000);
   expect (await page.locator("#refund-spinner").isVisible()).toBeFalsy();
 }




test('Test 1 Single ticket booking is eligible for refund' , async ({page})=>
{
    //Step 1 — Login
    await Login(page);

    //Step 2 — Book first event with 1 ticket (default)
    const numberOfTickets = 1;
    await ticketBooking(numberOfTickets,page);
    
    //Step 3 — Navigate to booking detail
    //Step 4 — Validate booking ref
    await validateBookingDeatails(page);

    //Step 5 — Check refund eligibility
    await checkRefundEligibility(page);

    //Step 6 — Validate result

        // - Locate result element by id #refund-result Assert it is visible
        await expect(page.locator("#refund-result")).toBeVisible();
        // - Assert it contains text Eligible for refund
        await expect(page.getByText("Eligible for refund.")).toBeVisible();
        // - Assert it contains text Single-ticket bookings qualify for a full refund
        await expect(page.getByText("Single-ticket bookings qualify for a full refund.")).toBeVisible();

});

test('Test 2 — Group ticket booking is NOT eligible for refund' , async ({page})=>
{
    //Step 1 — Login
    await Login(page);

    //Step 2 — Book first event with 3 ticket
    const numberOfTickets = 5;
    await ticketBooking(numberOfTickets ,page);

    //Step 3 — Navigate to booking detail
    //Step 4 — Validate booking ref
    await validateBookingDeatails(page);

    //Step 5 — Check refund eligibility
    await checkRefundEligibility(page);

    //Step 6 — Validate result (different assertions)

       //- Assert result contains Not eligible for refund
       await expect(page.getByText("Not eligible for refund.")).toBeVisible();
      //- Assert result contains Group bookings (3 tickets) are non-refundable
       await expect(page.getByText("Group bookings ("+numberOfTickets+" tickets) are non-refundable.")).toBeVisible();
  

});