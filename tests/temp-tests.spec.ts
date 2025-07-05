import { test } from "../fixtures/pom-fixture";

test ("Temp test", async({page, loginPage})=> {
    await loginPage.gotoOrangeHrm();
    await loginPage.loginOrangeHrm('Admin', 'admin123');
})