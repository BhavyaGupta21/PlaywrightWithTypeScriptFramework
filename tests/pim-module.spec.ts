import { test, expect } from '../fixtures/hooks-fixture';
import pimData from '../data/pim-module-data.json';

test('[PIM] Verify that a new employee is successfully created under the PIM module', {
    tag: ['@UI', '@UAT'],
    annotation: {
        type: 'Test Case Link',
        description: 'Add test case link for this test case'
    }
}, async({gotoUrl, leftNavigationPage, pimPage})=> {

    await test.step("Open PIM Module", async() => {
        await leftNavigationPage.openPimModule();
    });

    await test.step("Add Employee in PIM Module", async() => {
        await pimPage.addEmployee(pimData.first_name, pimData.middle_name, pimData.last_name);
    });

    await test.step ("Verify that the Employee is Created", async() => {
        await expect (pimPage.newEmployeeNameHeading).toHaveText(`${pimData.first_name} ${pimData.last_name}`);
    });

})