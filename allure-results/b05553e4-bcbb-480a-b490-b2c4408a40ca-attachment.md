# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIBookingAssignmentTest.spec.js >> Booking login Test
- Location: tests/UIBookingAssignmentTest.spec.js:4:1

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "/bookings"
Received string:    "https://eventhub.rahulshettyacademy.com/events/38594"
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - link "My Bookings" [active] [ref=e13] [cursor=pointer]:
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
      - generic [ref=e24]:
        - generic [ref=e25]:
          - heading "My Bookings" [level=1] [ref=e26]
          - paragraph [ref=e27]: View and manage all your ticket bookings
        - generic [ref=e28]:
          - button "Clear all bookings" [ref=e29] [cursor=pointer]
          - paragraph [ref=e30]: Do this often for clean test data.
      - generic [ref=e31]:
        - generic [ref=e32]:
          - generic [ref=e33]:
            - generic [ref=e34]:
              - generic [ref=e35]:
                - generic [ref=e36]: A-0LFHKD
                - generic [ref=e37]: confirmed
                - generic [ref=e38]: "#39493"
              - heading "AuraIndia :1779357338035" [level=3] [ref=e39]
              - generic [ref=e40]:
                - generic [ref=e41]: 📅 16 Apr 2027
                - generic [ref=e42]: 🎫 1 ticket
                - generic [ref=e43]: 📍 Delhi
                - generic [ref=e44]: 🗓 Booked 21 May 2026
            - generic [ref=e45]:
              - paragraph [ref=e46]: $10,000
              - paragraph [ref=e47]: total
          - generic [ref=e48]:
            - link "View Details" [ref=e49] [cursor=pointer]:
              - /url: /bookings/39493
              - button "View Details" [ref=e50]
            - button "Cancel Booking" [ref=e51] [cursor=pointer]
        - generic [ref=e52]:
          - generic [ref=e53]:
            - generic [ref=e54]:
              - generic [ref=e55]:
                - generic [ref=e56]: D-9SUTJL
                - generic [ref=e57]: confirmed
                - generic [ref=e58]: "#39488"
              - heading "Dilli Diwali Mela" [level=3] [ref=e59]
              - generic [ref=e60]:
                - generic [ref=e61]: 📅 20 Oct 2026
                - generic [ref=e62]: 🎫 5 tickets
                - generic [ref=e63]: 📍 Delhi
                - generic [ref=e64]: 🗓 Booked 21 May 2026
            - generic [ref=e65]:
              - paragraph [ref=e66]: $1,500
              - paragraph [ref=e67]: total
          - generic [ref=e68]:
            - link "View Details" [ref=e69] [cursor=pointer]:
              - /url: /bookings/39488
              - button "View Details" [ref=e70]
            - button "Cancel Booking" [ref=e71] [cursor=pointer]
        - generic [ref=e72]:
          - generic [ref=e73]:
            - generic [ref=e74]:
              - generic [ref=e75]:
                - generic [ref=e76]: D-KE45IF
                - generic [ref=e77]: confirmed
                - generic [ref=e78]: "#39487"
              - heading "Dilli Diwali Mela" [level=3] [ref=e79]
              - generic [ref=e80]:
                - generic [ref=e81]: 📅 20 Oct 2026
                - generic [ref=e82]: 🎫 1 ticket
                - generic [ref=e83]: 📍 Delhi
                - generic [ref=e84]: 🗓 Booked 21 May 2026
            - generic [ref=e85]:
              - paragraph [ref=e86]: $300
              - paragraph [ref=e87]: total
          - generic [ref=e88]:
            - link "View Details" [ref=e89] [cursor=pointer]:
              - /url: /bookings/39487
              - button "View Details" [ref=e90]
            - button "Cancel Booking" [ref=e91] [cursor=pointer]
        - generic [ref=e92]:
          - generic [ref=e93]:
            - generic [ref=e94]:
              - generic [ref=e95]:
                - generic [ref=e96]: A-1U2OB7
                - generic [ref=e97]: confirmed
                - generic [ref=e98]: "#39486"
              - heading "AuraIndia :1779356985269" [level=3] [ref=e99]
              - generic [ref=e100]:
                - generic [ref=e101]: 📅 16 Apr 2027
                - generic [ref=e102]: 🎫 1 ticket
                - generic [ref=e103]: 📍 Delhi
                - generic [ref=e104]: 🗓 Booked 21 May 2026
            - generic [ref=e105]:
              - paragraph [ref=e106]: $10,000
              - paragraph [ref=e107]: total
          - generic [ref=e108]:
            - link "View Details" [ref=e109] [cursor=pointer]:
              - /url: /bookings/39486
              - button "View Details" [ref=e110]
            - button "Cancel Booking" [ref=e111] [cursor=pointer]
        - generic [ref=e112]:
          - generic [ref=e113]:
            - generic [ref=e114]:
              - generic [ref=e115]:
                - generic [ref=e116]: A-96ED9M
                - generic [ref=e117]: confirmed
                - generic [ref=e118]: "#39485"
              - heading "AuraIndia :1779356951025" [level=3] [ref=e119]
              - generic [ref=e120]:
                - generic [ref=e121]: 📅 16 Apr 2027
                - generic [ref=e122]: 🎫 1 ticket
                - generic [ref=e123]: 📍 Delhi
                - generic [ref=e124]: 🗓 Booked 21 May 2026
            - generic [ref=e125]:
              - paragraph [ref=e126]: $10,000
              - paragraph [ref=e127]: total
          - generic [ref=e128]:
            - link "View Details" [ref=e129] [cursor=pointer]:
              - /url: /bookings/39485
              - button "View Details" [ref=e130]
            - button "Cancel Booking" [ref=e131] [cursor=pointer]
        - generic [ref=e132]:
          - generic [ref=e133]:
            - generic [ref=e134]:
              - generic [ref=e135]:
                - generic [ref=e136]: D-4W2353
                - generic [ref=e137]: confirmed
                - generic [ref=e138]: "#39464"
              - heading "Dilli Diwali Mela" [level=3] [ref=e139]
              - generic [ref=e140]:
                - generic [ref=e141]: 📅 20 Oct 2026
                - generic [ref=e142]: 🎫 5 tickets
                - generic [ref=e143]: 📍 Delhi
                - generic [ref=e144]: 🗓 Booked 21 May 2026
            - generic [ref=e145]:
              - paragraph [ref=e146]: $1,500
              - paragraph [ref=e147]: total
          - generic [ref=e148]:
            - link "View Details" [ref=e149] [cursor=pointer]:
              - /url: /bookings/39464
              - button "View Details" [ref=e150]
            - button "Cancel Booking" [ref=e151] [cursor=pointer]
        - generic [ref=e152]:
          - generic [ref=e153]:
            - generic [ref=e154]:
              - generic [ref=e155]:
                - generic [ref=e156]: D-PAKCPP
                - generic [ref=e157]: confirmed
                - generic [ref=e158]: "#39462"
              - heading "Dilli Diwali Mela" [level=3] [ref=e159]
              - generic [ref=e160]:
                - generic [ref=e161]: 📅 20 Oct 2026
                - generic [ref=e162]: 🎫 1 ticket
                - generic [ref=e163]: 📍 Delhi
                - generic [ref=e164]: 🗓 Booked 21 May 2026
            - generic [ref=e165]:
              - paragraph [ref=e166]: $300
              - paragraph [ref=e167]: total
          - generic [ref=e168]:
            - link "View Details" [ref=e169] [cursor=pointer]:
              - /url: /bookings/39462
              - button "View Details" [ref=e170]
            - button "Cancel Booking" [ref=e171] [cursor=pointer]
        - generic [ref=e172]:
          - generic [ref=e173]:
            - generic [ref=e174]:
              - generic [ref=e175]:
                - generic [ref=e176]: D-VJ1SEV
                - generic [ref=e177]: confirmed
                - generic [ref=e178]: "#39406"
              - heading "Dilli Diwali Mela" [level=3] [ref=e179]
              - generic [ref=e180]:
                - generic [ref=e181]: 📅 20 Oct 2026
                - generic [ref=e182]: 🎫 5 tickets
                - generic [ref=e183]: 📍 Delhi
                - generic [ref=e184]: 🗓 Booked 21 May 2026
            - generic [ref=e185]:
              - paragraph [ref=e186]: $1,500
              - paragraph [ref=e187]: total
          - generic [ref=e188]:
            - link "View Details" [ref=e189] [cursor=pointer]:
              - /url: /bookings/39406
              - button "View Details" [ref=e190]
            - button "Cancel Booking" [ref=e191] [cursor=pointer]
        - generic [ref=e192]:
          - generic [ref=e193]:
            - generic [ref=e194]:
              - generic [ref=e195]:
                - generic [ref=e196]: D-REZITR
                - generic [ref=e197]: confirmed
                - generic [ref=e198]: "#39405"
              - heading "Dilli Diwali Mela" [level=3] [ref=e199]
              - generic [ref=e200]:
                - generic [ref=e201]: 📅 20 Oct 2026
                - generic [ref=e202]: 🎫 1 ticket
                - generic [ref=e203]: 📍 Delhi
                - generic [ref=e204]: 🗓 Booked 21 May 2026
            - generic [ref=e205]:
              - paragraph [ref=e206]: $300
              - paragraph [ref=e207]: total
          - generic [ref=e208]:
            - link "View Details" [ref=e209] [cursor=pointer]:
              - /url: /bookings/39405
              - button "View Details" [ref=e210]
            - button "Cancel Booking" [ref=e211] [cursor=pointer]
  - contentinfo [ref=e212]:
    - generic [ref=e213]:
      - generic [ref=e214]:
        - generic [ref=e215]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e216]
          - paragraph [ref=e217]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e218]:
          - heading "Popular Courses" [level=3] [ref=e219]
          - list [ref=e220]:
            - listitem [ref=e221]:
              - link "Selenium WebDriver with Java" [ref=e222] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e223]:
              - link "Playwright with JavaScript" [ref=e224] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e225]:
              - link "RestAssured API Testing" [ref=e226] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e227]:
              - link "Cypress End-to-End Testing" [ref=e228] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e229]:
              - link "Appium Mobile Testing" [ref=e230] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e231]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e232]
          - paragraph [ref=e233]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e234] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e235]:
          - heading "EventHub Practice App" [level=3] [ref=e236]
          - list [ref=e237]:
            - listitem [ref=e238]:
              - link "Browse Events" [ref=e239] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e240]:
              - link "My Bookings" [ref=e241] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e242]:
              - link "Manage Events" [ref=e243] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e244]:
              - link "API Documentation" [ref=e245] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e246]:
        - paragraph [ref=e247]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e248]:
          - link "rahulshettyacademy.com →" [ref=e249] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e250] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e251]
```

# Test source

```ts
  1  | const {test,expect} = require('@playwright/test');
  2  | 
  3  | 
  4  | test('Booking login Test' , async ({browser})=>{
  5  | 
  6  |     //Step 1 — Login
  7  |     const context = await browser.newContext();
  8  |     const page = await context.newPage();
  9  |     await login(page);
  10 |     await expect(page.getByText("Browse Events →")).toBeVisible();
  11 | 
  12 |     //Step 2 — Create a new event
  13 |     await page.getByRole('button',{name : "Admin"}).click();
  14 |     await page.getByText("Manage Events").first().click();
  15 |     const eventTitle =  "AuraIndia :"+ Date.now();
  16 |     await page.locator('#event-title-input').fill(eventTitle);
  17 |     await page.locator('#admin-event-form textarea').fill("Diljit dosanjh new india tour please book your tickets asasp");
  18 |     await page.getByLabel('City').fill("Delhi");
  19 |     await page.getByLabel('Venue').fill("Gymkhana Club");
  20 |     await page.getByLabel('Price').fill("10000");
  21 |     await page.getByLabel('Total Seats').fill("5000");
  22 |     await page.getByLabel('Event Date & Time').fill("2027-04-16T00:24");
  23 |     await page.locator('#add-event-btn').click();
  24 |     await expect(page.getByText("Event created!")).toBeVisible();
  25 | 
  26 |    //Step 3 — Find the event card and capture seats
  27 |    await page.locator('#nav-events').click();
  28 |    await page.locator('#event-card').first().waitFor();
  29 |    await expect(page.locator('#event-card').getByText(eventTitle)).toBeVisible();
  30 |    await page.getByPlaceholder('Search events, venues…').pressSequentially(eventTitle);
  31 |    await expect(page.locator('#event-card').getByText(eventTitle)).toBeVisible();
  32 |    const totelnumberSeats =  await page.locator('#event-card').filter({hasText :  eventTitle }).getByText("seats available").innerText();
  33 |    const numberSeats =   totelnumberSeats.split(" ")[0];
  34 | 
  35 |    //Step 4 — Start booking
  36 |  
  37 |    await page.locator('#event-card').getByText(eventTitle).click();
  38 |    
  39 | 
  40 |   //Step 5 — Fill booking form
  41 |    await page.locator('#ticket-count').waitFor();
  42 |    await expect(page.locator('#ticket-count')).toContainText('1');
  43 |    await page.getByLabel('Full Name').fill("tina");
  44 |    await page.locator('#customer-email').fill("tina@gmail.com");
  45 |    await page.getByPlaceholder('+91 98765 43210').fill("+91 99217 85632");
  46 |    await page.getByRole("button",{ name : 'Confirm Booking'}).click();
  47 |    await expect (page.getByText('Booking Confirmed!')).toBeVisible();
  48 | 
  49 |   // Step 6 — Verify booking confirmation
  50 |    const refernceid = await page.locator('.booking-ref').textContent();
  51 |    console.log(refernceid);
  52 | 
  53 |    //Step 7 — Verify in My Bookings
  54 |    await page.locator('#nav-bookings').click();
> 55 |    expect(page.url()).toContain('/bookings');
     |                       ^ Error: expect(received).toContain(expected) // indexOf
  56 |    await expect(page.locator('#booking-card').first()).toBeVisible();
  57 |    await expect(page.locator('#booking-card').filter({hasText: refernceid })).toBeVisible();
  58 |    await expect(page.locator('#booking-card').filter({hasText: refernceid })).toContainText(eventTitle)
  59 | 
  60 |    //Step 8 — Verify seat reduction
  61 | 
  62 | 
  63 |    await page.locator('#nav-events').click();
  64 |    await expect(page.locator('#event-card').first()).toBeVisible();
  65 |    await expect(page.locator('#event-card').filter({hasText: eventTitle })).toBeVisible();
  66 |    const totelnumberSeatsafterbooking =  await page.locator('#event-card').filter({hasText :  eventTitle }).getByText("seats available").innerText();
  67 |    const numberSeatsafterbooking =   totelnumberSeatsafterbooking.split(" ")[0];
  68 |    console.log(numberSeatsafterbooking);
  69 |    console.log(numberSeats);
  70 |    
  71 |    expect(Number(numberSeatsafterbooking)).toBe( Number(numberSeats) - 1);
  72 | 
  73 | });
  74 | async function login(page) {
  75 |   await page.goto('https://eventhub.rahulshettyacademy.com/login');
  76 |   await page.getByLabel('Email').fill('naveen@gmail.com');
  77 |   await page.getByLabel('Password').fill('Nav@1234');
  78 |   await page.getByRole('button', { name: 'Sign In' }).click();
  79 | }
  80 | 
  81 | 
  82 | 
  83 | 
  84 | 
```