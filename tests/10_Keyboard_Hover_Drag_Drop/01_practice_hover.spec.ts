import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Click on Wi-Fi', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
    await page.getByTestId('nav-add-ons').hover();
    await page.getByTestId('test-id-Wifi').click();
   
});