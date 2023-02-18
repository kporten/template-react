import { match as matchLocale } from '@formatjs/intl-localematcher';
import { atom } from 'jotai';

import { availableLocales, defaultLocale, type Locale } from '@/utils/locales';

export const localeAtom = atom(
  matchLocale(
    navigator.languages as string[],
    availableLocales as unknown as string[],
    defaultLocale,
    { algorithm: 'best fit' },
  ) as Locale,
);
