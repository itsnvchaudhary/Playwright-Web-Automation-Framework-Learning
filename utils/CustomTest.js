const{test} = require('@playwright/test');
exports.customtest = test.extend(
    {
        testDataForOder :  {
        login: {
            email: "Castle@gmail.com",
            password: "Iamking@000",
            url: "https://rahulshettyacademy.com/client/#/auth/login"
        },
        product: {
            name: "ADIDAS ORIGINAL"
        }
    }
    }
)