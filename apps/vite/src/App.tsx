import { StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import IntlProvider from '@/contexts/intl';
import StoreProvider from '@/contexts/store';
import Routes from '@/routes';

export default function App() {
  return (
    <StrictMode>
      <HelmetProvider>
        <StoreProvider>
          <IntlProvider>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </IntlProvider>
        </StoreProvider>
      </HelmetProvider>
    </StrictMode>
  );
}
