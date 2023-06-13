import { HelmetProvider } from 'react-helmet-async';

import AuthProvider from '@/providers/auth-provider';
import IntlProvider from '@/providers/intl-provider';
import StoreProvider from '@/providers/store-provider';
import ThemeProvider from '@/providers/theme-provider';
import TrpcProvider from '@/providers/trpc-provider';

export default function Providers({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <HelmetProvider>
      <StoreProvider>
        <IntlProvider>
          <AuthProvider>
            <TrpcProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </TrpcProvider>
          </AuthProvider>
        </IntlProvider>
      </StoreProvider>
    </HelmetProvider>
  );
}
