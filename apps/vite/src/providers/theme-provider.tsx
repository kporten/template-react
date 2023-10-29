import { useAtomValue } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { type ReactNode, useLayoutEffect } from 'react';

type Theme = 'dark' | 'light' | 'system';

const matchSystemColorSchemeDark = window.matchMedia(
  '(prefers-color-scheme: dark)',
);

export const themeAtom = atomWithStorage<Theme>('theme', 'system');

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useAtomValue(themeAtom);

  useLayoutEffect(() => {
    const updateRootClassList = (isSystemColorSchemeDark: boolean) => {
      const root = document.querySelector(':root');

      root?.classList.remove('dark', 'light');

      if (theme === 'system') {
        const themeSystem: Exclude<Theme, 'system'> = isSystemColorSchemeDark
          ? 'dark'
          : 'light';

        root?.classList.add(themeSystem);
      } else {
        root?.classList.add(theme);
      }
    };

    updateRootClassList(matchSystemColorSchemeDark.matches);

    const abort = new AbortController();

    matchSystemColorSchemeDark.addEventListener(
      'change',
      ({ matches }) => {
        updateRootClassList(matches);
      },
      {
        signal: abort.signal,
      },
    );

    return () => abort.abort();
  }, [theme]);

  return children;
}
