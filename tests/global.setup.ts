import { test } from '../fixtures/common-fixture';
import { expect } from '@playwright/test';

test ('Global setup for Auto Login', async({page, loginPage, dashboardPage, commonUtils}) => {
    
    // const encryptedUsername = commonUtils.encryptData(process.env.USER_NAME!);
    // const encryptedPassword = commonUtils.encryptData(process.env.PASSWORD!);
    // console.log(encryptedUsername);
    // console.log(encryptedPassword);
    const decryptedUsername = commonUtils.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);
    await loginPage.gotoOrangeHrm();
    await loginPage.loginOrangeHrm(decryptedUsername, decryptedPassword);

    await page.waitForURL(`${process.env.BASE_URL}/web/index.php/dashboard/index`);
    await expect(dashboardPage.dashboardTitleText).toHaveText('Dashboard');

    await page.context().storageState({
        path: './playwright/.auth/auth.json'
    });
});