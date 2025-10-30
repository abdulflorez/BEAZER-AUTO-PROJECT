import { test } from '@playwright/test';
import { describe } from '../../config/describe.config';
import { homeOperations } from '../../operations/e2e/home.operations';
import { userData } from '../../test_data/users_data';

describe('Authentication scenarios', () => {
  const { email, password } = userData.demoUser;
  test.beforeEach(async () => {
    await homeOperations.visit();
  });

  test('Validate successfully login', { tag: ['@smoke', '@regression'] }, async () => {
    await homeOperations.goToLogin();
    await homeOperations.login({ email, password });
  });
});
