import '@testing-library/jest-dom';
import { vi } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';
import { mockServer as server } from './src/mocks/node';
import { resetAllMocks } from './src/mocks/data/cart-list';

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  resetAllMocks();
});

afterAll(() => {
  server.close();
});
