import HttpClient from '~/src/shared/modules/http';
import type { CartItem } from '../model/example.model';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

class ExampleRepository extends HttpClient {
  getExampleList() {
    return this.http.get<CartItem[]>('/api/hello');
  }
}
export const exampleRepository = new ExampleRepository();

const exampleQueryKeys = {
  all: () => ['example'],
};

export const exampleQueryOptions = {
  all: () =>
    queryOptions({
      queryKey: exampleQueryKeys.all(),
      queryFn: () => exampleRepository.getExampleList(),
    }),
};

export const useExample = () => {
  return useSuspenseQuery(exampleQueryOptions.all());
};
