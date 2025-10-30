import { BasePage } from './base.page';

class MyDashboardPage extends BasePage {
  public get title() {
    return this.page.locator('h1').filter({ hasText: 'My dashboard' });
  }
}

export const myDashboardPage = new MyDashboardPage();
