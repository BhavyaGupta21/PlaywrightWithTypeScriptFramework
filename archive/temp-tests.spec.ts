import { expect } from "@playwright/test";
import { test } from "../fixtures/hooks-fixture";

// test.beforeEach("Before Each Hook", async({loginPage}) => {
//     await loginPage.gotoOrangeHrm();
// });

// test.afterEach("After Each Hook", async({userPage}) => {
//     await userPage.logout();
// });

test ("Temp test 1", async({page, loginPage, commonUtils, gotoUrl})=> {

    // console.log(process.env.BASE_URL);
    // console.log(process.env.USER_NAME);
    // console.log(process.env.PASSWORD);

    // console.log(commonUtils.encryptData('admin123'));

    // const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    // const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);

    console.log(await page.title());
});

test ("Temp Test 2", async({page, gotoUrl}) => {

    await expect(page).toHaveTitle('OrangeHRM');

});

test ("Temp Test 3", async({page, gotoUrl, logout}) => {

    await expect(page).toHaveTitle('OrangeHRM');

});