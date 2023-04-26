import { type inferAsyncReturnType, initTRPC } from '@trpc/server';
import { type CreateExpressContextOptions } from '@trpc/server/adapters/express';

// https://trpc.io/docs/server/context
export const createContext = (options: CreateExpressContextOptions) => {
  return {
    // https://github.com/pinojs/pino-http
    log: options.req.log,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;

const trpc = initTRPC.context<Context>().create();

export const mergeRouters = trpc.mergeRouters;
export const middleware = trpc.middleware;
export const procedure = trpc.procedure;
export const router = trpc.router;
