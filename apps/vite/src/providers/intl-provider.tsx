import { match as matchLocale } from '@formatjs/intl-localematcher';
import { useQuery } from '@tanstack/react-query';
import { atom, useAtomValue } from 'jotai';
import type { ComponentProps, ReactNode } from 'react';
import { IntlProvider as Provider } from 'react-intl';

import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  type SupportedLocale,
} from '@/utils/locales';

export const localeAtom = atom(
  matchLocale(
    navigator.languages as string[],
    SUPPORTED_LOCALES as unknown as string[],
    DEFAULT_LOCALE,
    { algorithm: 'best fit' },
  ) as SupportedLocale,
);

export default function IntlProvider({ children }: { children: ReactNode }) {
  const locale = useAtomValue(localeAtom);

  const { data: messages } = useQuery<
    ComponentProps<typeof Provider>['messages']
  >({
    queryKey: ['messages', locale],
    queryFn: async () => {
      if (locale === 'de') {
        const { default: de } = await import('@/messages/de.json');

        return de;
      }

      const { default: en } = await import('@/messages/en.json');

      return en;
    },
    suspense: true,
  });

  return (
    <Provider
      messages={messages}
      locale={locale}
      defaultLocale={DEFAULT_LOCALE}
    >
      {children}
    </Provider>
  );
}
