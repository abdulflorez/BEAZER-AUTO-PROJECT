import { Page } from 'playwright';

export class BasePage {
  protected static _page: Page;

  public static setPage(page: Page) {
    BasePage._page = page;
  }

  public get page() {
    if (!BasePage._page) {
      throw new Error('Playwright Page has not been set. Call BasePage.setPage(page) before using page.');
    }
    return BasePage._page;
  }
}
