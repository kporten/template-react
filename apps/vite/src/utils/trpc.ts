import type { AppRouter } from '@template-react/trpc';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:4001/trpc',
    }),
  ],
});
