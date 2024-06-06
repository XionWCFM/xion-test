import { renderHook, waitFor } from '@testing-library/react';
import { createExampleRepository, useExampleQuery } from './example.api';
import wrapper from '~/src/mocks/utils/testing-wrapper';

describe('msw and react query test', () => {
  it('msw test', async () => {
    const { result } = renderHook(() => useExampleQuery(), { wrapper: wrapper() });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  it('test', async () => {
    const service = createExampleRepository();
    const result = await service.create({ id: 3, price: 2, amount: 3 });
    const add = await service.read();
  });

  it('test', async () => {
    const service = createExampleRepository();
    const read = await service.read();
  });
});
