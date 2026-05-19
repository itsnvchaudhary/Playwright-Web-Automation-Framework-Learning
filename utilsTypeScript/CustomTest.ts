import {test as baseTest} from '@playwright/test';
interface TestDataForOder {
    login: {
        email: string;
        password: string;
        url: string;
    };
    product: {
        name: string;
    };
}
export const customtest = baseTest.extend<{testDataForOder : TestDataForOder}>(
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