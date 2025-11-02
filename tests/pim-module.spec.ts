import { test, expect } from '../fixtures/hooks-fixture';
import pimData from '../data/pim-module-data.json';

test('[PIM] Verify that a new employee is successfully created under the PIM module', async({gotoUrl, leftNavigationPage, pimPage})=> {

    await leftNavigationPage.openPimModule();
    await pimPage.addEmployee(pimData.first_name, pimData.middle_name, pimData.last_name);
    await expect (pimPage.newEmployeeNameHeading).toHaveText(`${pimData.first_name} ${pimData.last_name}`);
})