import { test } from "../fixtures/common-fixture";

test ("Temp test", async({page, loginPage, commonUtils})=> {

    // console.log(process.env.BASE_URL);
    // console.log(process.env.USER_NAME);
    // console.log(process.env.PASSWORD);

    // commonUtilsObj.encryptData('admin123');

    const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);

    await loginPage.gotoOrangeHrm();
    await loginPage.loginOrangeHrm(decryptedUserName, decryptedPassword);
});