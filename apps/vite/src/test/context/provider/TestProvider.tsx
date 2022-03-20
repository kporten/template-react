import { MemoryRouter } from 'react-router-dom';

import IntlProvider from '@/context/intl';
import StoreProvider from '@/context/store';
import { localeAtom } from '@/store/locale';

type TestProviderProps = {
  children: React.ReactNode;
};

export default function TestProvider({ children }: TestProviderProps) {
  return (
    <StoreProvider values={[[localeAtom, 'en']]}>
      <IntlProvider>
        <MemoryRouter>{children}</MemoryRouter>
      </IntlProvider>
    </StoreProvider>
  );
}
