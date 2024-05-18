import { vi } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';
import '@testing-library/jest-dom';

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();
