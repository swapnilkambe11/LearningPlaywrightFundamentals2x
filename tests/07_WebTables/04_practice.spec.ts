import {test, expect} from '@playwright/test';

test("Verify the title", async ({page}) => {
    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
    await page.locator('input[name="username"]').fill("admin");
    await page.locator('input[name="password"]').fill("Awesomeqa@4321");
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveTitle("OrangeHRM");

    let emp_status: string = "Terminated";
    let row;
const rows = page.locator("//div[@role='table']//div[@role='row']");
const rowCount = await rows.count();

const cols = await page
    .locator("//div[@role='table']//div[@role='row'][1]//div[@role='cell']")
    .count();

const firstPart = "//div[@role='table']//div[@role='row'][";
const secondPart = "]//div[@role='cell'][";
const thirdPart = "]";

for (let i = 1; i <= rowCount; i++) {

    for (let j = 1; j <= cols; j++) {

        const dynamicPath =
            `${firstPart}${i}${secondPart}${j}${thirdPart}`;

        console.log(dynamicPath);

        const data = await page.locator(dynamicPath).textContent();

        console.log("data" +data);

        await page.pause();
    }
}
})