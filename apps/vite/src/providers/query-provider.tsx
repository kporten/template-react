import {
  type DefaultOptions,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { type ReactNode, useRef } from 'react';

export default function QueryProvider({
  children,
  options,
}: {
  children: ReactNode;
  options?: DefaultOptions;
}) {
  const queryClient = useRef<QueryClient>();

  if (!queryClient.current) {
    queryClient.current = new QueryClient({ defaultOptions: options });
  }

  return (
    <QueryClientProvider client={queryClient.current}>
      {children}
    </QueryClientProvider>
  );
}
