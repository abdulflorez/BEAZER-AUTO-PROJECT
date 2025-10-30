import { BasePage } from '../../base.page';

class SignInModalComp extends BasePage {
  public get emailInput() {
    return this.page.locator('#username');
  }

  public get passwordInput() {
    return this.page.locator('#password');
  }

  public get signInButton() {
    return this.page.locator('button[aria-label="Log in"]:not([disable])');
  }
}

export const signInModalComp = new SignInModalComp();
