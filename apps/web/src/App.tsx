import { BrowserRouter } from 'react-router-dom';

import IntlProvider from '@/context/intl';
import StoreProvider from '@/context/store';
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
