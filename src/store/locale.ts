import * as IntlLocaleMatcher from '@formatjs/intl-localematcher';
import { atom } from 'jotai';

type Locale = keyof typeof LOCALES;

export const LOCALES = Object.freeze({
  de: 'Deutsch',
  en: 'English',
});

export const LOCALE_KEYS = Object.freeze(Object.keys(LOCALES) as Locale[]);

export const LOCALE_DEFAULT: Locale = 'en';

const localeBestFit = IntlLocaleMatcher.match(
  navigator.languages as string[],
  LOCALE_KEYS as string[],
  LOCALE_DEFAULT,
  { algorithm: 'best fit' },
) as Locale;

export const localeAtom = atom<Locale>(localeBestFit);
