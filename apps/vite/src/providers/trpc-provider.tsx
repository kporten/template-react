import { useAuth } from '@clerk/clerk-react';
import { useQueryClient } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { type ComponentProps, type ReactNode, useRef } from 'react';

import { trpc } from '@/utils/trpc';

export default function TrpcProvider({ children }: { children: ReactNode }) {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  const client = useRef<ComponentProps<typeof trpc.Provider>['client']>();

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
    <trpc.Provider client={client.current} queryClient={queryClient}>
      {children}
    </trpc.Provider>
  );
}
