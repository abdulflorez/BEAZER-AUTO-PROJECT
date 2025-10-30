import { test as base, Page, BrowserContext } from '@playwright/test';
import { BasePage } from '../pages/base.page';

/**
 * Encapsulates a Playwright test.describe with shared setup/teardown:
 * - Creates and sets a new Page instance before each test using BasePage.setPage.
 * - Optionally initializes helpers (e.g., request, assert).
 * - Automatically closes the page and context after each test.
 * @param title     Title for the describe block.
 * @param callback  Callback to define tests, receiving shared test resources.
 */
export function describe(title: string, callback: () => void) {
  base.describe(title, () => {
    let page: Page;
    let context: BrowserContext;

    base.beforeEach(async ({ browser }, testInfo) => {
      context = await browser.newContext();
      page = await context.newPage();
      BasePage.setPage(page);
    });

    base.afterEach(async () => {
      if (page) {
        await page.close();
      }
      if (context) {
        await context.close();
      }
    });

    callback();
  });
}
