// https://mswjs.io/docs/integrations/node

import { setupServer } from 'msw/node';

import user from '@/test/trpc/handlers/user';

export const server = setupServer(...user);
