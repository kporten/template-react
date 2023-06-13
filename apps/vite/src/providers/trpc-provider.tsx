import { useAuth } from '@clerk/clerk-react';
import {
  type DefaultOptions,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useRef } from 'react';

import { trpc } from '@/utils/trpc';

export default function TrpcProvider({
  children,
  options,
}: {
  children: React.ReactNode;
  options?: DefaultOptions;
}) {
  const { getToken } = useAuth();

  const queryClient = useRef<QueryClient>();

  if (!queryClient.current) {
    queryClient.current = new QueryClient({ defaultOptions: options });
  }

  const client = useRef<React.ComponentProps<typeof trpc.Provider>['client']>();

  if (!client.current) {
    client.current = trpc.createClient({
      links: [
        httpBatchLink({
          url: import.meta.env.VITE_TRPC_URL,
          headers: async () => {
            const token = await getToken();

            if (token) {
              return {
                Authorization: `Bearer ${token}`,
              };
            }

            return {};
          },
        }),
      ],
    });
  }

  return (
    <trpc.Provider client={client.current} queryClient={queryClient.current}>
      <QueryClientProvider client={queryClient.current}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
