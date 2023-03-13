import { createExpressMiddleware } from '@trpc/server/adapters/express';

import userRouter from '@/domains/user/router';
import { createContext, router } from '@/lib/trpc';

const appRouter = router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;

export default createExpressMiddleware({
  router: appRouter,
  createContext,
});
