import { type inferAsyncReturnType, initTRPC } from '@trpc/server';
import { type CreateExpressContextOptions } from '@trpc/server/adapters/express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createContext = (options: CreateExpressContextOptions) => {
  // https://trpc.io/docs/authorization
  return {};
};

export type Context = inferAsyncReturnType<typeof createContext>;

const trpc = initTRPC.context<Context>().create();

export const mergeRouters = trpc.mergeRouters;
export const middleware = trpc.middleware;
export const procedure = trpc.procedure;
export const router = trpc.router;
