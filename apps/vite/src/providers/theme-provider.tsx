import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { mediaDark, themeAtom } from '@/store/theme';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    const handleDarkMode = (isDarkMode: boolean) => {
      const className = 'dark';

      if (isDarkMode) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
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
