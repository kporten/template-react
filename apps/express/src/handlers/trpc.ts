import { createExpressMiddleware } from '@trpc/server/adapters/express';

import userRouter from '@/domains/user/router';
import logger from '@/lib/logger';
import { createContext, router } from '@/lib/trpc';

const appRouter = router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;

export default createExpressMiddleware({
  router: appRouter,
  createContext,
  onError: ({ error, type, path }) => {
    logger.error(error, [type, path, '(trpc)'].filter(Boolean).join(' '));
  },
});
