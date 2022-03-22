import { BrowserRouter } from 'react-router-dom';

import IntlProvider from '@/contexts/intl';
import StoreProvider from '@/contexts/store';
import Routes from '@/routes';

export default function App() {
  return (
    <StoreProvider>
      <IntlProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </IntlProvider>
    </StoreProvider>
  );
}
