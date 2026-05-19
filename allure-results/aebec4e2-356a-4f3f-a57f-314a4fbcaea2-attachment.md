# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIRefundAssignmentTest.spec.js >> Test 1 Single ticket booking is eligible for refund
- Location: tests\UIRefundAssignmentTest.spec.js:59:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - link "EventHub" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e7]
        - generic [ref=e9]: EventHub
      - generic [ref=e10]:
        - link "Home" [ref=e11] [cursor=pointer]:
          - /url: /
        - link "Events" [ref=e12] [cursor=pointer]:
          - /url: /events
        - link "My Bookings" [ref=e13] [cursor=pointer]:
          - /url: /bookings
        - link "API Docs" [ref=e14] [cursor=pointer]:
          - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - button "Admin" [ref=e16] [cursor=pointer]:
          - text: Admin
          - img [ref=e17]
        - generic [ref=e19]:
          - generic "naveen@gmail.com" [ref=e20]
          - button "Logout" [ref=e21] [cursor=pointer]
  - main [ref=e22]:
    - generic [ref=e23]:
      - navigation [ref=e24]:
        - link "My Bookings" [ref=e25] [cursor=pointer]:
          - /url: /bookings
        - generic [ref=e26]: /
        - generic [ref=e27]: D-TQ5TUK
      - generic [ref=e28]:
        - generic [ref=e29]:
          - generic [ref=e30]:
            - generic [ref=e31]: D-TQ5TUK
            - generic [ref=e32]: confirmed
          - heading "Dilli Diwali Mela" [level=1] [ref=e33]
        - button "Cancel Booking" [ref=e34] [cursor=pointer]
      - generic [ref=e35]:
        - generic [ref=e36]:
          - heading "Event Details" [level=2] [ref=e37]
          - generic [ref=e38]:
            - generic [ref=e39]:
              - generic [ref=e40]: Event
              - generic [ref=e41]: Dilli Diwali Mela
            - generic [ref=e42]:
              - generic [ref=e43]: Category
              - generic [ref=e44]: Festival
            - generic [ref=e45]:
              - generic [ref=e46]: Date
              - generic [ref=e47]: Tuesday, 20 October 2026
            - generic [ref=e48]:
              - generic [ref=e49]: Venue
              - generic [ref=e50]: Pragati Maidan Exhibition Grounds
            - generic [ref=e51]:
              - generic [ref=e52]: City
              - generic [ref=e53]: Delhi
        - generic [ref=e54]:
          - heading "Customer Details" [level=2] [ref=e55]
          - generic [ref=e56]:
            - generic [ref=e57]:
              - generic [ref=e58]: Name
              - generic [ref=e59]: Naveen Chaoudhary
            - generic [ref=e60]:
              - generic [ref=e61]: Email
              - generic [ref=e62]: naveen@gmail.com
            - generic [ref=e63]:
              - generic [ref=e64]: Phone
              - generic [ref=e65]: +91 98674 53256
        - generic [ref=e66]:
          - heading "Payment Summary" [level=2] [ref=e67]
          - generic [ref=e68]:
            - generic [ref=e69]:
              - generic [ref=e70]: Tickets
              - generic [ref=e71]: "1"
            - generic [ref=e72]:
              - generic [ref=e73]: Price per ticket
              - generic [ref=e74]: $300
            - generic [ref=e75]:
              - generic [ref=e76]: Total Paid
              - generic [ref=e77]: $300
        - generic [ref=e78]:
          - heading "Refund" [level=2] [ref=e79]
          - generic [ref=e80]:
            - img [ref=e81]
            - generic [ref=e83]:
              - strong [ref=e84]: Eligible for refund.
              - text: Single-ticket bookings qualify for a full refund.
        - generic [ref=e85]:
          - heading "Booking Information" [level=2] [ref=e86]
          - generic [ref=e87]:
            - generic [ref=e88]:
              - generic [ref=e89]: Booked on
              - generic [ref=e90]: Thursday, 7 May 2026
            - generic [ref=e91]:
              - generic [ref=e92]: Booking ID
              - generic [ref=e93]: "#30851"
      - link "← Back to My Bookings" [ref=e95] [cursor=pointer]:
        - /url: /bookings
        - button "← Back to My Bookings" [ref=e96]
  - contentinfo [ref=e97]:
    - generic [ref=e98]:
      - generic [ref=e99]:
        - generic [ref=e100]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e101]
          - paragraph [ref=e102]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e103]:
          - heading "Popular Courses" [level=3] [ref=e104]
          - list [ref=e105]:
            - listitem [ref=e106]:
              - link "Selenium WebDriver with Java" [ref=e107] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e108]:
              - link "Playwright with JavaScript" [ref=e109] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e110]:
              - link "RestAssured API Testing" [ref=e111] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e112]:
              - link "Cypress End-to-End Testing" [ref=e113] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e114]:
              - link "Appium Mobile Testing" [ref=e115] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e116]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e117]
          - paragraph [ref=e118]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e119] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e120]:
          - heading "EventHub Practice App" [level=3] [ref=e121]
          - list [ref=e122]:
            - listitem [ref=e123]:
              - link "Browse Events" [ref=e124] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e125]:
              - link "My Bookings" [ref=e126] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e127]:
              - link "Manage Events" [ref=e128] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e129]:
              - link "API Documentation" [ref=e130] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e131]:
        - paragraph [ref=e132]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e133]:
          - link "rahulshettyacademy.com →" [ref=e134] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e135] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e136]
```

# Test source

```ts
  1   | const {test ,expect} = require('@playwright/test');
  2   | 
  3   | async function Login(page){
  4   |    await page.goto('https://eventhub.rahulshettyacademy.com/login');
  5   |   await page.getByLabel('Email').fill('naveen@gmail.com');
  6   |   await page.getByLabel('Password').fill('Nav@1234');
  7   |   await page.getByRole('button', { name: 'Sign In' }).click();
  8   |   await expect(page.getByText("Browse Events →")).toBeVisible();
  9   | }
  10  | 
  11  | async function ticketBooking(numberOfTickets ,page){
  12  |     //Navigate to /events
  13  |     await page.locator("#nav-events").click();
  14  |     //Click Book Now on the very first event card (locate data-testid="event-card" → first → data-testid="book-now-btn")
  15  |     await page.locator("#event-card").first().locator("[data-testid='book-now-btn']").click();
  16  |     //Fill Full Name, Email (your email), Phone
  17  |     await page.getByLabel("Full Name").fill('Naveen Chaoudhary');
  18  |     await page.getByLabel("Email").fill("Naveen@gmail.com");
  19  |     await page.getByLabel("Phone Number").fill("+91 98674 53256");
  20  |     //select the number of tickets
  21  |     for (let i = 1 ; i<numberOfTickets ; ++i){
  22  |          await page.getByRole("button",{name:'+'}).click();
  23  |    }
  24  |    //Click confirm button (.confirm-booking-btn)
  25  |     await page.locator("#confirm-booking").click();
  26  |  }
  27  | 
  28  |  async function validateBookingDeatails(page){
  29  | 
  30  |    // - Click View My Bookings link
  31  |    await  page.getByRole("button",{name:'View My Bookings'}).click();
  32  |    // - Click the first View Details link
  33  |    await page.locator('#booking-card').first().getByRole("button",{name:"View Details"}).click();
  34  |    // - Assert URL is /bookings
  35  |    expect(page.url()).toContain('/bookings');
  36  |    // - Assert: text Booking Information is visible on the page
  37  |    await expect(page.getByText("Booking Information")).toBeVisible();
  38  |    // - Read booking ref from page
  39  |    const refid = await page.locator(".font-mono").first().textContent();
  40  |    // - Read event title from h1
  41  |    const eventTitle = await page.locator(".text-2xl").textContent();
  42  |    // - Assert validation : "first character of booking ref equals first character of event title"
  43  |    expect(refid.charAt(0)).toEqual(eventTitle.charAt(0));
  44  |  }
  45  | 
  46  |  async function checkRefundEligibility(page){
  47  |    //- Click the Check Refund Eligibility button
  48  |    await page.getByRole("button" ,{name : 'Check eligibility for refund?'}).click();
  49  |    //- Assert: spinner element (#refund-spinner) is immediately visible
  50  |    await expect(page.locator("#refund-spinner")).toBeVisible();
  51  |    //- Assert: spinner is no longer visible within 6 seconds
> 52  |    await page.waitForTimeout(6000);
      |               ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  53  |    expect (await page.locator("#refund-spinner").isVisible()).toBeFalsy();
  54  |  }
  55  | 
  56  | 
  57  | 
  58  | 
  59  | test('Test 1 Single ticket booking is eligible for refund' , async ({page})=>
  60  | {
  61  |     //Step 1 — Login
  62  |     await Login(page);
  63  | 
  64  |     //Step 2 — Book first event with 1 ticket (default)
  65  |     const numberOfTickets = 1;
  66  |     await ticketBooking(numberOfTickets,page);
  67  |     
  68  |     //Step 3 — Navigate to booking detail
  69  |     //Step 4 — Validate booking ref
  70  |     await validateBookingDeatails(page);
  71  | 
  72  |     //Step 5 — Check refund eligibility
  73  |     await checkRefundEligibility(page);
  74  | 
  75  |     //Step 6 — Validate result
  76  | 
  77  |         // - Locate result element by id #refund-result Assert it is visible
  78  |         await expect(page.locator("#refund-result")).toBeVisible();
  79  |         // - Assert it contains text Eligible for refund
  80  |         await expect(page.getByText("Eligible for refund.")).toBeVisible();
  81  |         // - Assert it contains text Single-ticket bookings qualify for a full refund
  82  |         await expect(page.getByText("Single-ticket bookings qualify for a full refund.")).toBeVisible();
  83  | 
  84  | });
  85  | 
  86  | test('Test 2 — Group ticket booking is NOT eligible for refund' , async ({page})=>
  87  | {
  88  |     //Step 1 — Login
  89  |     await Login(page);
  90  | 
  91  |     //Step 2 — Book first event with 3 ticket
  92  |     const numberOfTickets = 5;
  93  |     await ticketBooking(numberOfTickets ,page);
  94  | 
  95  |     //Step 3 — Navigate to booking detail
  96  |     //Step 4 — Validate booking ref
  97  |     await validateBookingDeatails(page);
  98  | 
  99  |     //Step 5 — Check refund eligibility
  100 |     await checkRefundEligibility(page);
  101 | 
  102 |     //Step 6 — Validate result (different assertions)
  103 | 
  104 |        //- Assert result contains Not eligible for refund
  105 |        await expect(page.getByText("Not eligible for refund.")).toBeVisible();
  106 |       //- Assert result contains Group bookings (3 tickets) are non-refundable
  107 |        await expect(page.getByText("Group bookings ("+numberOfTickets+" tickets) are non-refundable.")).toBeVisible();
  108 |   
  109 | 
  110 | });
```