import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { DevTools } from 'jotai-devtools';
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import AuthProvider from '@/providers/auth-provider';
import IntlProvider from '@/providers/intl-provider';
import QueryProvider from '@/providers/query-provider';
import StoreProvider, { store } from '@/providers/store-provider';
import ThemeProvider from '@/providers/theme-provider';
import TrpcProvider from '@/providers/trpc-provider';
import Router from '@/router';

export default function App() {
  return (
    <HelmetProvider>
      <StoreProvider>
        <QueryProvider>
          <Suspense>
            <IntlProvider>
              <AuthProvider>
                <TrpcProvider>
                  <ThemeProvider>
                    <DevTools store={store} />
                    <ReactQueryDevtools position="bottom-right" />
                    <Router />
                  </ThemeProvider>
                </TrpcProvider>
              </AuthProvider>
            </IntlProvider>
          </Suspense>
        </QueryProvider>
      </StoreProvider>
    </HelmetProvider>
  );
}
