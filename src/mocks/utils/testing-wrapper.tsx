import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { builder } from '../../shared/modules/builder';
import { Provider } from 'jotai';
import { Suspense } from 'react';

// 테스트 환경에서는 retry가 있는 경우 테스팅 시간이 늘어나는 문제가 있습니다. 이를 방지하기 위해 retry를 0으로 설정합니다.
const testingClinet = () => new QueryClient({ defaultOptions: { queries: { retry: 0 } } });

const wrapper = () =>
  builder.tree([
    builder.provider(Provider, {}),
    builder.provider(QueryClientProvider, { client: testingClinet() }),
    builder.provider(Suspense, { fallback: <div data-testid="suspense">loading</div> }),
  ]);

export default wrapper;
