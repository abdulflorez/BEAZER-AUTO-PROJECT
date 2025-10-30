import * as dotenv from 'dotenv';
import { AppEnv } from '../typing/types/app_env.types';

dotenv.config();

const BASE_URLS: Record<AppEnv, string> = {
  UAT: 'https://uat-webapp-beazer-fmc4ehfrayfabnbr.a03.azurefd.net',
  PROD: 'https://www.beazer.com',
};

export const CURRENT_ENV: AppEnv = (process.env.ENV as AppEnv) ?? 'UAT';
export const baseUrl = BASE_URLS[CURRENT_ENV];
