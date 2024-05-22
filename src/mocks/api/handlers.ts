import { http, HttpResponse } from 'msw';
import { originCartList } from '../data/cart-list';
import type { CartItem } from '~/src/entities/example/model/example.model';

export const handlers = [
  http.get('/api/hello', () => {
    return HttpResponse.json(originCartList);
  }),
  http.post('/api/hello', async ({ request }) => {
    const body = (await request.json()) as CartItem;
    originCartList.push(body);
    return HttpResponse.json(body);
  }),
];
