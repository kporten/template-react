import { useHydrateAtoms } from 'jotai/utils';

import IntlProvider from '@/providers/intl-provider';
import StoreProvider from '@/providers/store-provider';
import TrpcProvider from '@/providers/trpc-provider';
import { localeAtom } from '@/store/locale';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <HydrateAtoms>
        <IntlProvider>
          <TrpcProvider
            options={{
              queries: {
                retry: false,
              },
            }}
          >
            {children}
          </TrpcProvider>
        </IntlProvider>
      </HydrateAtoms>
    </StoreProvider>
  );
}

export function HydrateAtoms({ children }: { children: React.ReactNode }) {
  useHydrateAtoms([[localeAtom, 'en']]);

  return children;
}
