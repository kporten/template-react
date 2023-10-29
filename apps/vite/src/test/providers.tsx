import { useHydrateAtoms } from 'jotai/utils';
import { type ReactNode, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import IntlProvider, { localeAtom } from '@/providers/intl-provider';
import QueryProvider from '@/providers/query-provider';
import StoreProvider from '@/providers/store-provider';
import ThemeProvider from '@/providers/theme-provider';
import TrpcProvider from '@/providers/trpc-provider';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <HelmetProvider>
      <StoreProvider>
        <HydrateAtoms>
          <QueryProvider
            options={{
              queries: {
                retry: false,
              },
            }}
          >
            <Suspense>
              <IntlProvider>
                <TrpcProvider>
                  <ThemeProvider>{children}</ThemeProvider>
                </TrpcProvider>
              </IntlProvider>
            </Suspense>
          </QueryProvider>
        </HydrateAtoms>
      </StoreProvider>
    </HelmetProvider>
  );
}

export function HydrateAtoms({ children }: { children: ReactNode }) {
  useHydrateAtoms([[localeAtom, 'en']]);

  return children;
}
