import { setupServer } from 'msw/node';
import { handlers } from './api/handlers';

export const mockServer = setupServer(...handlers);
