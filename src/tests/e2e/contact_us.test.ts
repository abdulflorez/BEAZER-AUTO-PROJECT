import { test } from '@playwright/test';
import { describe } from '../../config/describe.config';
import { homeOperations } from '../../operations/e2e/home.operations';
import { contactUsOperations } from '../../operations/e2e/contact_us.operations';

describe('Contact us flows', () => {
  const newHomeInformation: NewHomeInformationForm = {
    firstName: 'Joe',
    lastName: 'testing',
    email: 'joeTesting123@gmail.com',
    locations: 'Atlanta',
    priceMin: 'No Minimum',
    priceMax: 'Up to $300K',
  };

  test.beforeEach(async () => {
    await homeOperations.visit();
    await homeOperations.goToContactUs();
  });

  test.only('User submitted the "new home information" form successfully', { tag: ['@smoke', '@regression'] }, async () => {
    await contactUsOperations.submitNewHomeInformation(newHomeInformation);
  });
});
