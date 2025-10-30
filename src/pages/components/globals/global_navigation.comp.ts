import { BasePage } from '../../base.page';

class GlobalNavigationComp extends BasePage {
  public get loginLink() {
    return this.page.locator('[role="listitem"] a').filter({ hasText: 'Log In' });
  }

  public get myDashboardLink() {
    return this.page.locator('[role="listitem"] a').filter({ hasText: 'My Dashboard' });
  }

  public get contactUsLink() {
    return this.page.locator('[role="listitem"] a').filter({ hasText: 'Contact us' });
  }
}

export const globalNavigationComp = new GlobalNavigationComp();
