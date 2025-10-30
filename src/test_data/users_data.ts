import { CURRENT_ENV } from '../config/env.config';

const users = {
  UAT: {
    demoUser: { email: 'abdul.florez@beazer.com', password: 'BeazerPass123!' },
  },
  PROD: {
    demoUser: { email: 'abdul.florez@beazer.com', password: 'BeazerPass123!' },
  },
};

export const userData = users[CURRENT_ENV];
