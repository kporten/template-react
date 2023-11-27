import { TRPCError, type inferAsyncReturnType, initTRPC } from '@trpc/server';
import type { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import type { Request } from 'express';
import type { Logger } from 'pino';

import type { LooseAuth, StrictAuth } from '@/lib/clerk';

export function createContext(options: CreateExpressContextOptions): {
  auth: LooseAuth;
  log: Logger;
} {
  return {
    // https://clerk.com/docs/request-authentication/nodejs-express
    auth: (options.req as Request & { auth: LooseAuth }).auth,
    // https://github.com/pinojs/pino-http
    log: options.req.log,
  };
}

const trpc = initTRPC
  .context<inferAsyncReturnType<typeof createContext>>()
  .create();

const isAuthed = trpc.middleware(async ({ ctx, next }) => {
  if (!ctx.auth.userId) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return next({
    ctx: {
      auth: ctx.auth as StrictAuth,
    } satisfies Partial<ReturnType<typeof createContext>>,
  });
});

export const mergeRouters = trpc.mergeRouters;
export const router = trpc.router;
export const middleware = trpc.middleware;

export const procedure = trpc.procedure;
export const protectedProcedure = trpc.procedure.use(isAuthed);
