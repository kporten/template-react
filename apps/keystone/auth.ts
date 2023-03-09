// https://keystonejs.com/docs/config/auth

import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';

import env from './env';

export const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  sessionData: 'name',
  initFirstItem: {
    fields: ['email', 'password', 'name'],
  },
});

export type Session =
  | {
      data: {
        name: string;
      };
    }
  | undefined;

export const session = statelessSessions({
  maxAge: 60 * 60 * 24 * 30, // 30 days
  secret: env.SESSION_SECRET,
});
