import { baseUrl } from '../../config/env.config';
import { homePage } from '../../pages/home.page';
import { BaseOperations } from './base.operations';

class HomeOperations extends BaseOperations {
  public async visit() {
    await homePage.page.goto(baseUrl);
    await homePage.page.waitForLoadState('domcontentloaded');
  }
}

export const homeOperations = new HomeOperations();
