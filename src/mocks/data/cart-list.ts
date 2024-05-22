import type { CartItem } from '~/src/entities/example/model/example.model';

export const initialCartList: CartItem[] = [
  { amount: 1, id: 1, price: 100 },
  { amount: 3, id: 2, price: 50 },
  { amount: 5, id: 3, price: 55 },
];

export let originCartList: CartItem[] = initialCartList.slice();

export const resetAllMocks = () => {
  originCartList = initialCartList.slice();
};
