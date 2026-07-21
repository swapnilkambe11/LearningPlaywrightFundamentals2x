import {test, expect} from '@playwright/test';

test("Verify the title", async ({page}) => {
    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill("admin");
    await page.locator('input[name="password"]').fill("Awesomeqa@4321");
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveTitle("OrangeHRM");

    const rows = await page.locator("//div[@role='table']//div[@role='row']");
    await expect(rows.first()).toBeVisible();
   const cols = await page.locator("//div[@role='table']//div[@role='rowgroup']//div[@class='oxd-table-card'][1]//div[@role='row']//div[@role='cell']").count();
    const rowCount = await rows.count();
    
    for (let i = 1; i <= rowCount; i++) {

    const rowXpath = `//div[@role='table']//div[@role='rowgroup']//div[@class='oxd-table-card'][${i}]`;

    const data = await page
        .locator(`${rowXpath}//div[@role='cell']`)
        .allInnerTexts();

    console.log(data);

    if (data.includes("Terminated")) {

        console.log("Found employee with status Terminated");

        await page
            .locator(`${rowXpath}//button[.//i[contains(@class,'bi-trash')]]`)
            .click();

        break;
    }
}
    // await page.pause();
})