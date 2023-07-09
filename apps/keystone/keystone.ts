// https://keystonejs.com/docs/config/config
import { config } from '@keystone-6/core';

import { type Session, session, withAuth } from './src/auth';
import env from './src/env';
import { Post, User } from './src/lists';

export default withAuth(
  config({
    server: {
      port: env.PORT,
      healthCheck: true,
    },
    db: {
      provider: 'mysql',
      url: env.DATABASE_URL || '',
      prismaClientPath: './node_modules/prisma-client',
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
