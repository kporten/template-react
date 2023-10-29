import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@template-react/ui-core';
import { useAtom } from 'jotai';

import { localeAtom } from '@/providers/intl-provider';
import type { Locale } from '@/utils/locales';

const locales: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
};

export default function Locale() {
  const [locale, setLocale] = useAtom(localeAtom);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{locales[locale]}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem onClick={() => setLocale('de')}>
          {locales['de']}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale('en')}>
          {locales['en']}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
