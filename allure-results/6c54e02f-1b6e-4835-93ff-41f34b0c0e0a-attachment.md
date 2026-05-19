# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UiAPITesting.spec.js >> @API Playwright client web Test API
- Location: tests\UiAPITesting.spec.js:34:1

# Error details

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e29]:
    - paragraph [ref=e31]: Thank you for Shopping With Us
    - generic [ref=e32]:
      - generic [ref=e33]: order summary
      - generic [ref=e35]:
        - text: Order Id
        - generic [ref=e36]: 69fc7113e83610b531cf236d
      - generic [ref=e38]:
        - generic [ref=e40]:
          - generic [ref=e41]: Billing Address
          - paragraph [ref=e42]: naveen@gamil.comk
          - paragraph [ref=e43]: Country - Argentina
        - generic [ref=e45]:
          - generic [ref=e46]: Delivery Address
          - paragraph [ref=e47]: naveen@gamil.comk
          - paragraph [ref=e48]: Country - Argentina
      - generic [ref=e51]: Product Ordered
      - generic [ref=e54]:
        - img [ref=e56]
        - generic [ref=e57]:
          - generic [ref=e58]: ZARA COAT 3
          - generic [ref=e59]:
            - generic [ref=e60]: by ECOM
            - generic [ref=e61]: $ 11500
      - generic [ref=e63] [cursor=pointer]: View Orders
```