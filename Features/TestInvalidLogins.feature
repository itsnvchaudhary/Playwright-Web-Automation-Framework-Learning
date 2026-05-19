Feature: Invalid Login Test
  @validation
  Scenario Outline: Place the Order
    
    Given login to the Practice  web "https://rahulshettyacademy.com/loginpagePractise/" "<username>" "<password>"
    
    Then Verify invalid login error

    Examples:
       
    | username         | password       |
    | Naveen@gmail.com |Naveen@123      | 
    | Boss@gmail.com   |Boss@123        | 