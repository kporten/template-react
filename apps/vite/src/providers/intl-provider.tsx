import { match as matchLocale } from '@formatjs/intl-localematcher';
import { useQuery } from '@tanstack/react-query';
import { atom, useAtomValue } from 'jotai';
import { type ComponentProps, type ReactNode } from 'react';
import { IntlProvider as Provider } from 'react-intl';

import { availableLocales, defaultLocale, type Locale } from '@/utils/locales';

export const localeAtom = atom(
  matchLocale(
    navigator.languages as string[],
    availableLocales as unknown as string[],
    defaultLocale,
    { algorithm: 'best fit' },
  ) as Locale,
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
    <Provider messages={messages} locale={locale} defaultLocale={defaultLocale}>
      {children}
    </Provider>
  );
}
