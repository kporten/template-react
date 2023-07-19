// https://mswjs.io/docs/getting-started/integrate/node

import { setupServer } from 'msw/node';

import user from './trpc/handlers/user';

export const server = setupServer(...user);
