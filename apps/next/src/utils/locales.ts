export type Locale = (typeof availableLocales)[number];

export const availableLocales = ['de', 'en'] as const;
export const defaultLocale: Locale = 'en';
