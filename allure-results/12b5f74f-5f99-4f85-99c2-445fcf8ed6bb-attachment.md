# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIBookingAssignmentTest.spec.js >> Booking login Test
- Location: tests\UIBookingAssignmentTest.spec.js:4:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 4999
Received: 5000
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
        - link "Events" [active] [ref=e12] [cursor=pointer]:
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
      - generic [ref=e24]:
        - heading "Upcoming Events" [level=1] [ref=e25]
        - paragraph [ref=e26]: Find your next unforgettable experience
      - generic [ref=e28]:
        - textbox "Search events, venues…" [ref=e30]
        - combobox [ref=e32] [cursor=pointer]:
          - option "All Categories" [selected]
          - option "🎙 Conference"
          - option "🎵 Concert"
          - option "⚽ Sports"
          - option "🛠 Workshop"
          - option "🎉 Festival"
        - combobox [ref=e34] [cursor=pointer]:
          - option "All Cities" [selected]
          - option "Mumbai"
          - option "Bangalore"
          - option "Delhi"
          - option "Hyderabad"
          - option "Chennai"
          - option "Pune"
      - generic [ref=e35]:
        - img [ref=e36]
        - generic [ref=e38]:
          - text: Your sandbox holds up to
          - strong [ref=e39]: 9 bookings
          - text: and you can create up to
          - strong [ref=e40]: 6 custom events
          - text: . When either limit is reached, the oldest entry is automatically replaced.
      - generic [ref=e41]:
        - article [ref=e42]:
          - generic [ref=e43]:
            - img "Dilli Diwali Mela" [ref=e44]
            - generic [ref=e46]: Festival
            - generic [ref=e47]: Featured
          - generic [ref=e48]:
            - link "Dilli Diwali Mela" [ref=e49] [cursor=pointer]:
              - /url: /events/3
              - heading "Dilli Diwali Mela" [level=3] [ref=e50]
            - generic [ref=e51]:
              - generic [ref=e52]:
                - img [ref=e53]
                - generic [ref=e55]: Tue, 20 Oct
              - generic [ref=e56]:
                - img [ref=e57]
                - generic [ref=e59]: Pragati Maidan Exhibition Grounds, Delhi
            - generic [ref=e60]:
              - generic [ref=e61]:
                - paragraph [ref=e62]: $300
                - generic [ref=e63]: 9977 seats available
              - link "Book Now" [ref=e64] [cursor=pointer]:
                - /url: /events/3
        - article [ref=e65]:
          - generic [ref=e66]:
            - img "Hollywood Monsoon Night — Los Angeles" [ref=e67]
            - generic [ref=e69]: Concert
            - generic [ref=e70]: Featured
          - generic [ref=e71]:
            - link "Hollywood Monsoon Night — Los Angeles" [ref=e72] [cursor=pointer]:
              - /url: /events/2
              - heading "Hollywood Monsoon Night — Los Angeles" [level=3] [ref=e73]
            - generic [ref=e74]:
              - generic [ref=e75]:
                - img [ref=e76]
                - generic [ref=e78]: Sun, 12 Jul
              - generic [ref=e79]:
                - img [ref=e80]
                - generic [ref=e82]: Dome, NSCI SVP Stadium, Worli, Los Angeles
            - generic [ref=e83]:
              - generic [ref=e84]:
                - paragraph [ref=e85]: $2,500
                - generic [ref=e86]: 3000 seats available
              - link "Book Now" [ref=e87] [cursor=pointer]:
                - /url: /events/2
        - article [ref=e88]:
          - generic [ref=e89]:
            - img "World Tech Summit" [ref=e90]
            - generic [ref=e92]: Conference
            - generic [ref=e93]: Featured
          - generic [ref=e94]:
            - link "World Tech Summit" [ref=e95] [cursor=pointer]:
              - /url: /events/1
              - heading "World Tech Summit" [level=3] [ref=e96]
            - generic [ref=e97]:
              - generic [ref=e98]:
                - img [ref=e99]
                - generic [ref=e101]: Sat, 18 Apr
              - generic [ref=e102]:
                - img [ref=e103]
                - generic [ref=e105]: Hyderabad, Hitech city, Hyderabad
            - generic [ref=e106]:
              - generic [ref=e107]:
                - paragraph [ref=e108]: $1,500
                - generic [ref=e109]: 500 seats available
              - link "Book Now" [ref=e110] [cursor=pointer]:
                - /url: /events/1
        - article [ref=e111]:
          - generic [ref=e112]:
            - img [ref=e114]
            - generic [ref=e117]: Conference
          - generic [ref=e118]:
            - link "AuraIndia :1778151861332" [ref=e119] [cursor=pointer]:
              - /url: /events/31196
              - heading "AuraIndia :1778151861332" [level=3] [ref=e120]
            - generic [ref=e121]:
              - generic [ref=e122]:
                - img [ref=e123]
                - generic [ref=e125]: Fri, 16 Apr
              - generic [ref=e126]:
                - img [ref=e127]
                - generic [ref=e129]: Gymkhana Club, Delhi
            - generic [ref=e130]:
              - generic [ref=e131]:
                - paragraph [ref=e132]: $10,000
                - generic [ref=e133]: 4999 seats available
              - link "Book Now" [ref=e134] [cursor=pointer]:
                - /url: /events/31196
        - article [ref=e135]:
          - generic [ref=e136]:
            - img [ref=e138]
            - generic [ref=e141]: Conference
          - generic [ref=e142]:
            - link "AuraIndia :1778151800074" [ref=e143] [cursor=pointer]:
              - /url: /events/31194
              - heading "AuraIndia :1778151800074" [level=3] [ref=e144]
            - generic [ref=e145]:
              - generic [ref=e146]:
                - img [ref=e147]
                - generic [ref=e149]: Fri, 16 Apr
              - generic [ref=e150]:
                - img [ref=e151]
                - generic [ref=e153]: Gymkhana Club, Delhi
            - generic [ref=e154]:
              - generic [ref=e155]:
                - paragraph [ref=e156]: $10,000
                - generic [ref=e157]: 5000 seats available
              - link "Book Now" [ref=e158] [cursor=pointer]:
                - /url: /events/31194
        - article [ref=e159]:
          - generic [ref=e160]:
            - img [ref=e162]
            - generic [ref=e165]: Conference
          - generic [ref=e166]:
            - link "AuraIndia :1778151722166" [ref=e167] [cursor=pointer]:
              - /url: /events/31192
              - heading "AuraIndia :1778151722166" [level=3] [ref=e168]
            - generic [ref=e169]:
              - generic [ref=e170]:
                - img [ref=e171]
                - generic [ref=e173]: Fri, 16 Apr
              - generic [ref=e174]:
                - img [ref=e175]
                - generic [ref=e177]: Gymkhana Club, Delhi
            - generic [ref=e178]:
              - generic [ref=e179]:
                - paragraph [ref=e180]: $10,000
                - generic [ref=e181]: 4999 seats available
              - link "Book Now" [ref=e182] [cursor=pointer]:
                - /url: /events/31192
        - article [ref=e183]:
          - generic [ref=e184]:
            - img [ref=e186]
            - generic [ref=e189]: Conference
          - generic [ref=e190]:
            - link "AuraIndia :1778146441500" [ref=e191] [cursor=pointer]:
              - /url: /events/31170
              - heading "AuraIndia :1778146441500" [level=3] [ref=e192]
            - generic [ref=e193]:
              - generic [ref=e194]:
                - img [ref=e195]
                - generic [ref=e197]: Fri, 16 Apr
              - generic [ref=e198]:
                - img [ref=e199]
                - generic [ref=e201]: Gymkhana Club, Delhi
            - generic [ref=e202]:
              - generic [ref=e203]:
                - paragraph [ref=e204]: $10,000
                - generic [ref=e205]: 5000 seats available
              - link "Book Now" [ref=e206] [cursor=pointer]:
                - /url: /events/31170
        - article [ref=e207]:
          - generic [ref=e208]:
            - img [ref=e210]
            - generic [ref=e213]: Conference
          - generic [ref=e214]:
            - link "AuraIndia :1778146402167" [ref=e215] [cursor=pointer]:
              - /url: /events/31169
              - heading "AuraIndia :1778146402167" [level=3] [ref=e216]
            - generic [ref=e217]:
              - generic [ref=e218]:
                - img [ref=e219]
                - generic [ref=e221]: Fri, 16 Apr
              - generic [ref=e222]:
                - img [ref=e223]
                - generic [ref=e225]: Gymkhana Club, Delhi
            - generic [ref=e226]:
              - generic [ref=e227]:
                - paragraph [ref=e228]: $10,000
                - generic [ref=e229]: 5000 seats available
              - link "Book Now" [ref=e230] [cursor=pointer]:
                - /url: /events/31169
        - article [ref=e231]:
          - generic [ref=e232]:
            - img [ref=e234]
            - generic [ref=e237]: Conference
          - generic [ref=e238]:
            - link "AuraIndia :1778146358929" [ref=e239] [cursor=pointer]:
              - /url: /events/31168
              - heading "AuraIndia :1778146358929" [level=3] [ref=e240]
            - generic [ref=e241]:
              - generic [ref=e242]:
                - img [ref=e243]
                - generic [ref=e245]: Fri, 16 Apr
              - generic [ref=e246]:
                - img [ref=e247]
                - generic [ref=e249]: Gymkhana Club, Delhi
            - generic [ref=e250]:
              - generic [ref=e251]:
                - paragraph [ref=e252]: $10,000
                - generic [ref=e253]: 5000 seats available
              - link "Book Now" [ref=e254] [cursor=pointer]:
                - /url: /events/31168
      - link "Add New Event" [ref=e256] [cursor=pointer]:
        - /url: /admin/events
        - button "Add New Event" [ref=e257]:
          - img [ref=e258]
          - text: Add New Event
  - contentinfo [ref=e260]:
    - generic [ref=e261]:
      - generic [ref=e262]:
        - generic [ref=e263]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e264]
          - paragraph [ref=e265]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e266]:
          - heading "Popular Courses" [level=3] [ref=e267]
          - list [ref=e268]:
            - listitem [ref=e269]:
              - link "Selenium WebDriver with Java" [ref=e270] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e271]:
              - link "Playwright with JavaScript" [ref=e272] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e273]:
              - link "RestAssured API Testing" [ref=e274] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e275]:
              - link "Cypress End-to-End Testing" [ref=e276] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e277]:
              - link "Appium Mobile Testing" [ref=e278] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e279]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e280]
          - paragraph [ref=e281]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e282] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e283]:
          - heading "EventHub Practice App" [level=3] [ref=e284]
          - list [ref=e285]:
            - listitem [ref=e286]:
              - link "Browse Events" [ref=e287] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e288]:
              - link "My Bookings" [ref=e289] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e290]:
              - link "Manage Events" [ref=e291] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e292]:
              - link "API Documentation" [ref=e293] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e294]:
        - paragraph [ref=e295]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e296]:
          - link "rahulshettyacademy.com →" [ref=e297] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e298] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e299]
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
  55 |    expect(page.url()).toContain('/bookings');
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
> 71 |    expect(Number(numberSeatsafterbooking)).toBe( Number(numberSeats) - 1);
     |                                            ^ Error: expect(received).toBe(expected) // Object.is equality
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