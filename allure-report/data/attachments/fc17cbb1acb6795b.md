# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIBookingAssignmentTest.spec.js >> Booking login Test
- Location: tests\UIBookingAssignmentTest.spec.js:4:1

# Error details

```
Test timeout of 30000ms exceeded.
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
      - generic [ref=e24]:
        - heading "Upcoming Events" [level=1] [ref=e25]
        - paragraph [ref=e26]: Find your next unforgettable experience
      - generic [ref=e28]:
        - textbox "Search events, venues…" [ref=e30]: AuraIndia :1778146441500
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
        - button "Clear filters" [ref=e35] [cursor=pointer]
      - article [ref=e37]:
        - generic [ref=e38]:
          - img [ref=e40]
          - generic [ref=e43]: Conference
        - generic [ref=e44]:
          - link "AuraIndia :1778146441500" [ref=e45] [cursor=pointer]:
            - /url: /events/31170
            - heading "AuraIndia :1778146441500" [level=3] [ref=e46]
          - generic [ref=e47]:
            - generic [ref=e48]:
              - img [ref=e49]
              - generic [ref=e51]: Fri, 16 Apr
            - generic [ref=e52]:
              - img [ref=e53]
              - generic [ref=e55]: Gymkhana Club, Delhi
          - generic [ref=e56]:
            - generic [ref=e57]:
              - paragraph [ref=e58]: $10,000
              - generic [ref=e59]: 5000 seats available
            - link "Book Now" [ref=e60] [cursor=pointer]:
              - /url: /events/31170
      - link "Add New Event" [ref=e62] [cursor=pointer]:
        - /url: /admin/events
        - button "Add New Event" [ref=e63]:
          - img [ref=e64]
          - text: Add New Event
  - contentinfo [ref=e66]:
    - generic [ref=e67]:
      - generic [ref=e68]:
        - generic [ref=e69]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e70]
          - paragraph [ref=e71]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e72]:
          - heading "Popular Courses" [level=3] [ref=e73]
          - list [ref=e74]:
            - listitem [ref=e75]:
              - link "Selenium WebDriver with Java" [ref=e76] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e77]:
              - link "Playwright with JavaScript" [ref=e78] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e79]:
              - link "RestAssured API Testing" [ref=e80] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e81]:
              - link "Cypress End-to-End Testing" [ref=e82] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e83]:
              - link "Appium Mobile Testing" [ref=e84] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e85]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e86]
          - paragraph [ref=e87]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e88] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e89]:
          - heading "EventHub Practice App" [level=3] [ref=e90]
          - list [ref=e91]:
            - listitem [ref=e92]:
              - link "Browse Events" [ref=e93] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e94]:
              - link "My Bookings" [ref=e95] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e96]:
              - link "Manage Events" [ref=e97] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e98]:
              - link "API Documentation" [ref=e99] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e100]:
        - paragraph [ref=e101]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e102]:
          - link "rahulshettyacademy.com →" [ref=e103] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e104] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e105]
```