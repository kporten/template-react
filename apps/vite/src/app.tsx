import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Frame from '@/layouts/frame';
import IntlProvider from '@/providers/intl-provider';
import StoreProvider from '@/providers/store-provider';
import Index from '@/routes/index';
import NotFound from '@/routes/not-found';

export default function App() {
  return (
    <HelmetProvider>
      <StoreProvider>
        <IntlProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Frame />}>
                <Route index element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </IntlProvider>
      </StoreProvider>
    </HelmetProvider>
  );
}
