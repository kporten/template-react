export type Locale = (typeof availableLocales)[number];

export const availableLocales = ['en'] as const;

export const defaultLocale: Locale = 'en';
