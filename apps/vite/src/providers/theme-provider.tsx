import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { mediaDark, themeAtom } from '@/store/theme';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    const setDarkMode = (isDarkMode: boolean) => {
      const className = 'dark';

      if (isDarkMode) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    };

    setDarkMode(theme === 'dark');

    const handleChange = ({ matches }: MediaQueryListEvent) => {
      setTheme(matches ? 'dark' : 'light');
      setDarkMode(matches);
    };

    mediaDark.addEventListener('change', handleChange);

    return () => {
      mediaDark.removeEventListener('change', handleChange);
    };
  }, [theme, setTheme]);

  return children;
}
