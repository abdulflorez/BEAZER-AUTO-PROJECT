import { expect } from '@playwright/test';
import { globalNavigationComp } from '../../pages/components/globals/global_navigation.comp';
import { signInModalComp } from '../../pages/components/modals/sign_in_modal.comp';
import { myDashboardPage } from '../../pages/my_dashboard.page';
import { baseUrl } from '../../config/env.config';
import { endpoints } from '../../test_data/endpoints';
import { contactUsPage } from '../../pages/contact_us.page';

export class BaseOperations {
  public async goToLogin() {
    await globalNavigationComp.loginLink.click();
    await expect(signInModalComp.emailInput).toBeVisible();
  }

  public async goToContactUs() {
    await globalNavigationComp.contactUsLink.click();
    await expect(contactUsPage.title).toBeVisible();
  }

  public async login({ email, password }: UserCredentials) {
    await signInModalComp.emailInput.fill(email);
    await signInModalComp.passwordInput.fill(password);
    await signInModalComp.emailInput.click();
    await signInModalComp.signInButton.click();
    await expect(globalNavigationComp.loginLink).not.toBeVisible();
    await expect(globalNavigationComp.myDashboardLink).not.toBeVisible();
    await expect(myDashboardPage.page).toHaveURL(`${baseUrl}${endpoints.myDashboard}`);
    await expect(myDashboardPage.title).toBeVisible();
  }
}
