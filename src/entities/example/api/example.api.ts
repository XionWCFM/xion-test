import { useSuspenseQuery } from '@tanstack/react-query';
import type { CartItem } from '../model/example.model';

export const createExampleRepository = () => {
  return {
    read: async (): Promise<CartItem[]> => {
      const response = await fetch('/api/hello');
      const result = await response.json();
      return result;
    },
    create: async (body: CartItem) => {
      const response = await fetch('/api/hello', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      const result = await response.json();
      return result;
    },
    delete: async (id: CartItem['id']) => {
      await fetch(`/api/hello/${id}`, {
        method: 'DELETE',
      });
    },
    update: async (body: CartItem) => {
      const response = await fetch('/api/hello', {
        method: 'PUT',
        body: JSON.stringify(body),
      });
      const result = await response.json();
      return result;
    },
  };
};

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
