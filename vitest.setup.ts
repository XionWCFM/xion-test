import '@testing-library/jest-dom';
import { vi } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';
import { mockServer as server } from './src/mocks/node';

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
