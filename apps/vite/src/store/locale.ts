import * as IntlLocaleMatcher from '@formatjs/intl-localematcher';
import { atom } from 'jotai';

export type Locale = keyof typeof LOCALES;

export const LOCALES = {
  en: 'English',
} as const;

export const LOCALE_DEFAULT: Locale = 'en';

export const localeAtom = atom(
  IntlLocaleMatcher.match(
    navigator.languages as string[],
    Object.keys(LOCALES),
    LOCALE_DEFAULT,
    { algorithm: 'best fit' },
  ) as Locale,
);
