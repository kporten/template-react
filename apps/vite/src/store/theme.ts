import { atom } from 'jotai';

export const mediaDark = window.matchMedia('(prefers-color-scheme: dark)');

export const themeAtom = atom<'dark' | 'light'>(
  mediaDark.matches ? 'dark' : 'light',
);
