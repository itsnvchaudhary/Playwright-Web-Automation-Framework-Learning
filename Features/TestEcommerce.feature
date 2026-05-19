Feature: Ecommerce test
  @regression
  Scenario: add item to the cart

    Given login to the e commerce web "https://rahulshettyacademy.com/client/#/auth/login" "naveen@gamil.comk" "Naveen@123"

    When we add "ZARA COAT 3" product to cart

    Then Verify "ZARA COAT 3" in the cart

    When enter valid details and place the order

    Then Verify order is present in the order history

  Scenario Outline: Place the Order

    Given login to the Practice  web "https://rahulshettyacademy.com/loginpagePractise/" "<username>" "<password>"

    Then Verify invalid login error

    Examples:

      | username         | password   |
      | Naveen@gmail.com | Naveen@123 |
      | Boss@gmail.com   | Boss@123   |