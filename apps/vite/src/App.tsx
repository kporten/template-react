import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Frame from '@/layouts/Frame/Frame';
import IntlProvider from '@/providers/IntlProvider/IntlProvider';
import StoreProvider from '@/providers/StoreProvider/StoreProvider';
import Index from '@/routes/Index';
import NotFound from '@/routes/NotFound';

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
