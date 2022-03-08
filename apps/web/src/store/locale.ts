import * as IntlLocaleMatcher from '@formatjs/intl-localematcher';
import { atom } from 'jotai';

export type Locale = keyof typeof LOCALES;

export const LOCALES = {
  en: 'English',
} as const;

export const LOCALE_KEYS = Object.keys(LOCALES) as Readonly<Locale[]>;

export const LOCALE_DEFAULT: Locale = 'en';

const localeBestFit = IntlLocaleMatcher.match(
  navigator.languages as string[],
  LOCALE_KEYS as string[],
  LOCALE_DEFAULT,
  { algorithm: 'best fit' },
) as Locale;

export const localeAtom = atom<Locale>(localeBestFit);
