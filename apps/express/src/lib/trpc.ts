import { type inferAsyncReturnType, initTRPC, TRPCError } from '@trpc/server';
import type { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import type { Request } from 'express';
import type { Logger } from 'pino';

import type { AuthLoose, AuthStrict } from '@/lib/auth';

// https://trpc.io/docs/server/context
type Context<T> = T & { log: Logger };

export function createContext(
  options: CreateExpressContextOptions,
): Context<{ auth: AuthLoose }> {
  return {
    // https://clerk.com/docs/request-authentication/nodejs-express
    auth: (options.req as Request & { auth: AuthLoose }).auth,
    // https://github.com/pinojs/pino-http
    log: options.req.log,
  };
}

const trpc = initTRPC
  .context<inferAsyncReturnType<typeof createContext>>()
  .create();

const isAuthed = trpc.middleware(async ({ next, ctx }) => {
  if (!ctx.auth?.userId) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return next({
    ctx: {
      auth: ctx.auth,
    } satisfies Partial<Context<{ auth: AuthStrict }>>,
  });
});

export const mergeRouters = trpc.mergeRouters;
export const router = trpc.router;
export const middleware = trpc.middleware;

export const procedure = trpc.procedure;
export const protectedProcedure = trpc.procedure.use(isAuthed);
