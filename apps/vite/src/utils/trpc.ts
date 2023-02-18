import type { AppRouter } from '@template-react/trpc';
import { createTRPCReact } from '@trpc/react-query';
import type {
  inferRouterError,
  inferRouterInputs,
  inferRouterOutputs,
} from '@trpc/server';

export const trpc = createTRPCReact<AppRouter>();

export type TrpcError = inferRouterError<AppRouter>;
export type TrpcInput = inferRouterInputs<AppRouter>;
export type TrpcOutput = inferRouterOutputs<AppRouter>;
