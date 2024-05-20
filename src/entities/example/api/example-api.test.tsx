import { renderHook, waitFor } from '@testing-library/react';
import { useExampleQuery } from './example.api';
import wrapper from '~/src/mocks/utils/testing-wrapper';

describe('msw and react query test', () => {
  it('msw test', async () => {
    const { result } = renderHook(() => useExampleQuery(), { wrapper: wrapper() });
    await waitFor(() => expect(result).not.toBe(null));
    const data = result.current?.data;
    expect(data.firstName).toBe('John');
  });
});
