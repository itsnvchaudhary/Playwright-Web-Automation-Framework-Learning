import { test, expect } from '@playwright/test';

const YahooPayload = { email: "naveen@Yhaoo.com", password: "Nav@1234" };
const GmailPayLoad = { email: "naveen@gmail.com", password: "Nav@1234" };


let tokenYahoo, eventIdYahoo, bookingIdYhoo;

async function loginAndGoToEvents(page, data) {
    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    await page.getByPlaceholder("you@email.com").fill(data.email);
    await page.getByText("Password").fill(data.password);
    await page.getByRole("button", { type: "Submit" }).click();
    await page.locator('#nav-events').click();
}


test('@API Security Testing using API', async ({ page, playwright }) => {

    // Step 1 — Login as Yahoo user via API  -
    await loginAndGoToEvents(page, YahooPayload)

    const apiContext = await playwright.request.newContext({
        ignoreHTTPSErrors: true,
    });
    const Loginresponse = await apiContext.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login", {
        data: YahooPayload
    });

    expect(Loginresponse.ok()).toBeTruthy();
    const jsonLoginresponse = await Loginresponse.json();
    tokenYahoo = jsonLoginresponse.token;
    console.log(tokenYahoo)


    // Step 2 — Fetch events via API to get a valid event ID


    const Eventresponse = await apiContext.get(
        'https://api.eventhub.rahulshettyacademy.com/api/events',
        {
            headers: {
                Authorization: `Bearer ${tokenYahoo}`
            }
        }
    );
    expect(Eventresponse.ok()).toBeTruthy();
    const jsonEventresponse = await Eventresponse.json();
    eventIdYahoo = jsonEventresponse.data[0].id;
    console.log(eventIdYahoo);

    // Step 3 — Create a booking via API as Yahoo user

    const Bookingresponse = await apiContext.post("https://api.eventhub.rahulshettyacademy.com/api/bookings", {
        headers: {
            Authorization: `Bearer ${tokenYahoo}`
        },
        data: {
            customerName: "sameshta",
            customerEmail: "sameshta@gamil.com",
            customerPhone: "+91 85775 07438",
            quantity: 1,
            eventId: eventIdYahoo
        }
    });

    expect(Bookingresponse.ok()).toBeTruthy();
    const BookingresponseJson = await Bookingresponse.json();
    bookingIdYhoo = BookingresponseJson.data.id;
    console.log(bookingIdYhoo)

    // Step 4 — Login as Gmail user via browser UI
    await loginAndGoToEvents(page, GmailPayLoad);

    // Step 5 — Navigate to Yahoo's booking URL as Gmail user


    await page.locator("#nav-bookings").click();

   
    await page.route("https://eventhub.rahulshettyacademy.com/bookings/*",
        route => route.continue({ url: "https://eventhub.rahulshettyacademy.com/bookings/" + bookingIdYhoo })
    );
     await page.locator("//button[text()='View Details']").first().click();


    // Step 6 — Validate Access Denied
    await expect(page.getByText("Access Denied")).toBeVisible();
    await expect(page.getByText("You are not authorized to view this booking.")).toBeVisible();
});




