import { ClerkProvider } from '@clerk/clerk-react';
import { deDE, enUS } from '@clerk/localizations';
import type { ComponentProps, ReactNode } from 'react';
import { useIntl } from 'react-intl';

const localization: Record<
  string,
  ComponentProps<typeof ClerkProvider>['localization']
> = {
  de: deDE,
  en: enUS,
};

export default function AuthProvider({ children }: { children: ReactNode }) {
  const intl = useIntl();

  return (
    <ClerkProvider
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      localization={localization[intl.locale]}
    >
      {children}
    </ClerkProvider>
  );
}
