import { useAtom } from 'jotai';
import { useLayoutEffect } from 'react';

import { mediaDark, themeAtom } from '@/store/theme';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useAtom(themeAtom);

  useLayoutEffect(() => {
    const handleDarkMode = (isDarkMode: boolean) => {
      const root = document.querySelector(':root');
      const className = 'dark';

      if (isDarkMode) {
        root?.classList.add(className);
      } else {
        root?.classList.remove(className);
      }
    };

    handleDarkMode(theme === 'dark');

    const abort = new AbortController();

    mediaDark.addEventListener(
      'change',
      ({ matches }) => {
        setTheme(matches ? 'dark' : 'light');
        handleDarkMode(matches);
      },
      { signal: abort.signal },
    );

    return () => abort.abort();
  }, [theme, setTheme]);

  return children;
}
