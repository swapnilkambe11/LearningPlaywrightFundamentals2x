import {test, expect} from '@playwright/test';

test("Verify the title", async ({page}) => {
     await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');

    //  Finding one person's email and country
    let name: string = "Yoshi Tannamuri";
    let row = page.locator('#companies-table  tbody tr').filter({ hasText: name });
    const country = await row.locator('td[data-col="country"]').innerText();

    console.log(name+" is from " +country);
    await page.waitForTimeout(5000);
    
})