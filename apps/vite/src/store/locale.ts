import { match as matchLocale } from '@formatjs/intl-localematcher';
import { atom } from 'jotai';

export type Locale = keyof typeof availableLocales;

export const availableLocales = {
  en: 'English',
} as const;

export const defaultLocale: Locale = 'en';

export const localeAtom = atom(
  matchLocale(
    navigator.languages as string[],
    Object.keys(availableLocales),
    defaultLocale,
    { algorithm: 'best fit' },
  ) as Locale,
);
