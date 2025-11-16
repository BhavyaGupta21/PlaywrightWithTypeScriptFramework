import { test, expect } from '../fixtures/hooks-fixture';
import loginModuleData from '../data/login-module-data.json';

test.use({
    storageState: {
        cookies: [],
        origins: []
    }
});

test.describe("Invalid Login Tests", {
    tag: '@InvalidLogin',
    annotation: {
        type: 'Story Link',
        description: 'Link of Story'
    }
}, () => {
    test('[Login] Verify that the user cannot login with an invalid password', {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: 'Test Case Link',
            description: 'Add test case link for this test case'
        }
    }, async ({ gotoUrl, loginPage, commonUtils }) => {

        const username = commonUtils.decryptData(process.env.USER_NAME!);
        await loginPage.loginOrangeHrm(username, loginModuleData.wrong_password);
        await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
        await expect(loginPage.userNameInput).toBeVisible();
    });

    test('[Login] Verify that the user cannot login with an invalid username', {
        tag: ['@UI', '@UAT', '@DEV'],
        annotation: {
            type: 'Test Case Link',
            description: 'Add test case link for this test case'
        }
    }, async ({ gotoUrl, loginPage, commonUtils }) => {

        const password = commonUtils.decryptData(process.env.PASSWORD!);
        await loginPage.loginOrangeHrm(loginModuleData.wrong_username, password);
        await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
        await expect(loginPage.userNameInput).toBeVisible();
    });

    test('[Login] Verify that the user cannot login with both an invalid username and password', {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: 'Test Case Link',
            description: 'Add test case link for this test case'
        }
    }, async ({ gotoUrl, loginPage, commonUtils }) => {

        await loginPage.loginOrangeHrm(loginModuleData.wrong_username, loginModuleData.wrong_password);
        await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
        await expect(loginPage.userNameInput).toBeVisible();
    });
});
