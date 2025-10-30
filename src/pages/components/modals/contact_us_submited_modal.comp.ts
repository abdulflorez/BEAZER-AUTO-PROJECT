import { BasePage } from '../../base.page';

class ContactUsSubmitedModalComp extends BasePage {
  public get title() {
    return this.page.locator('h2').filter({ hasText: 'Thanks for your interest in Beazer Homes!' });
  }
}

export const contactUsSubmitedModalComp = new ContactUsSubmitedModalComp();
