import { useSuspenseQuery } from '@tanstack/react-query';

export const useExampleQuery = () => {
  return useSuspenseQuery({
    queryKey: ['example'],
    queryFn: async () => {
      const response = await fetch('/api/hello');
      const result = await response.json();
      return result;
    },
  });
};
