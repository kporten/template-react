import { HelmetProvider } from 'react-helmet-async';

import IntlProvider from '@/providers/intl-provider';
import StoreProvider from '@/providers/store-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <StoreProvider>
        <IntlProvider>{children}</IntlProvider>
      </StoreProvider>
    </HelmetProvider>
  );
}
