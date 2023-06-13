import { ClerkProvider } from '@clerk/clerk-react';
import { deDE, enUS } from '@clerk/localizations';
import { useAtomValue } from 'jotai';

import { localeAtom } from '@/store/locale';

const localization = {
  de: deDE,
  en: enUS,
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useAtomValue(localeAtom);

  return (
    <ClerkProvider
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      localization={localization[locale]}
    >
      {children}
    </ClerkProvider>
  );
}
