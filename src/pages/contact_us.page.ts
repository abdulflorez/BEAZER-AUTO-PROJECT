import { BasePage } from './base.page';

class ContactUsPage extends BasePage {
  public get title() {
    return this.page.locator('h2').filter({ hasText: 'Contact Us' });
  }

  public get contactUsForm() {
    return this.page.locator('[data-testid="contact-form"]');
  }

  public get firstNameLabel() {
    return this.contactUsForm.getByLabel('First name');
  }

  public get lastNameLabel() {
    return this.contactUsForm.getByLabel('Last name');
  }

  public get emailLabel() {
    return this.contactUsForm.getByLabel('Email');
  }

  public get currentZipLabel() {
    return this.contactUsForm.getByLabel('Current zip');
  }

  public get phoneNumberLabel() {
    return this.contactUsForm.getByLabel('Phone number');
  }

  public get QuestionsCommentsLabel() {
    return this.contactUsForm.getByLabel('Questions/Comments');
  }

  public get locationSelect() {
    return this.contactUsForm.locator('[aria-label="Location"] + select');
  }

  public get priceMinSelect() {
    return this.contactUsForm.locator('[aria-label="Price Min"] + select');
  }

  public get priceMaxSelect() {
    return this.contactUsForm.locator('[aria-label="Price Max"] + select');
  }

  public get termsAndConditionsCheckbox() {
    return this.page.locator('[id*="Terms and Conditions"]');
  }

  public get requestInformationButton() {
    return this.page.locator('button[type="submit"]:not([disabled])').filter({ hasText: 'Request Information' });
  }
}

export const contactUsPage = new ContactUsPage();
