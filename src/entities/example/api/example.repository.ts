import HttpClient from '~/src/shared/modules/http';
import type { CartItem } from '../model/example.model';

class ExampleRepository extends HttpClient {
  getExamples() {
    return this.http.get<CartItem[]>('/api/hello');
  }
}

export const exampleRepository = new ExampleRepository();
