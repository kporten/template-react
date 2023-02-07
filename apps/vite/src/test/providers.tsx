import IntlProvider from '@/providers/intl-provider';
import StoreProvider, { HydrateAtoms } from '@/providers/store-provider';
import { localeAtom } from '@/store/locale';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <HydrateAtoms initialValues={[[localeAtom, 'en']]}>
        <IntlProvider>{children}</IntlProvider>
      </HydrateAtoms>
    </StoreProvider>
  );
}
