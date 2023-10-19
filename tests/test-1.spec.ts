import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ces.com.uy/');
  await page.locator('#boton_ns').click();
  await page.getByRole('img', { name: 'testing servicios funcional' }).click();
});