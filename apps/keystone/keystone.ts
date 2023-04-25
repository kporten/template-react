// https://keystonejs.com/docs/config/config

// eslint-disable-next-line import/order
import env from './env';

import { config } from '@keystone-6/core';

import { type Session, session, withAuth } from './auth';
import { Post, User } from './lists';

export default withAuth(
  config({
    server: {
      port: env.PORT,
      healthCheck: true,
    },
    db: {
      provider: 'mysql',
      url: env.DATABASE_URL,
      prismaClientPath: './node_modules/.prisma/client',
    },
    lists: {
      User,
      Post,
    },
    ui: {
      isAccessAllowed: (context) => Boolean((context.session as Session)?.data),
    },
    session,
  }),
);
