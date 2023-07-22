import { DevTools } from 'jotai-devtools';
import { HelmetProvider } from 'react-helmet-async';

import AuthProvider from '@/providers/auth-provider';
import IntlProvider from '@/providers/intl-provider';
import StoreProvider, { store } from '@/providers/store-provider';
import ThemeProvider from '@/providers/theme-provider';
import TrpcProvider from '@/providers/trpc-provider';
import Router from '@/router';

export default function App() {
  return (
    <HelmetProvider>
      <StoreProvider>
        <IntlProvider>
          <AuthProvider>
            <TrpcProvider>
              <ThemeProvider>
                <DevTools store={store} />
                <Router />
              </ThemeProvider>
            </TrpcProvider>
          </AuthProvider>
        </IntlProvider>
      </StoreProvider>
    </HelmetProvider>
  );
}
