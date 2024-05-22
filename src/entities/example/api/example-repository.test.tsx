import { renderHook, waitFor } from '@testing-library/react';
import { useExample } from './example.repository';
import wrapper from '~/src/mocks/utils/testing-wrapper';

describe('ExampleRepository', () => {
  it('should be defined', async () => {
    const { result } = renderHook(() => useExample(), { wrapper: wrapper() });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
});
