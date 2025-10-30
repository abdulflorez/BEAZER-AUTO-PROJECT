import { expect } from '@playwright/test';
import { contactUsSubmitedModalComp } from '../../pages/components/modals/contact_us_submited_modal.comp';
import { contactUsPage } from '../../pages/contact_us.page';
import { BaseOperations } from './base.operations';

class ContactUsOperations extends BaseOperations {
  public async submitNewHomeInformation(formData: NewHomeInformationForm) {
    await contactUsPage.firstNameLabel.fill(formData.firstName);
    await contactUsPage.lastNameLabel.fill(formData.lastName);
    await contactUsPage.emailLabel.fill(formData.email);
    if (formData.currentZip) await contactUsPage.currentZipLabel.fill(formData.currentZip);
    if (formData.phoneNumber) await contactUsPage.phoneNumberLabel.fill(formData.phoneNumber);
    if (formData.questionsComments) await contactUsPage.QuestionsCommentsLabel.fill(formData.questionsComments);
    await contactUsPage.locationSelect.selectOption({ label: formData.locations });
    await contactUsPage.priceMinSelect.selectOption(formData.priceMin);
    await contactUsPage.priceMaxSelect.selectOption(formData.priceMax);
    await contactUsPage.termsAndConditionsCheckbox.click();
    await contactUsPage.requestInformationButton.click();
    await expect(contactUsSubmitedModalComp.title).toBeVisible();
  }
}

export const contactUsOperations = new ContactUsOperations();
