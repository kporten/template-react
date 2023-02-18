// https://mswjs.io/docs/getting-started/integrate/node

import { setupServer } from 'msw/node';

import user from './handlers/user';

export const server = setupServer(...user);
