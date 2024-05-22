import { HttpClientError } from './error';

export const httpBaseConfigs = [
  '',
  {
    error: HttpClientError,
  },
] as const;
