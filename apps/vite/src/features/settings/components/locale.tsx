import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@template-react/ui-core';
import { useAtom } from 'jotai';

import { localeAtom } from '@/providers/intl-provider';
import type { SupportedLocale } from '@/utils/locales';

const LOCALES: Readonly<Record<SupportedLocale, string>> = {
  de: 'Deutsch',
  en: 'English',
};

export default function Locale() {
  const [locale, setLocale] = useAtom(localeAtom);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{LOCALES[locale]}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem
          onClick={() => {
            setLocale('de');
          }}
        >
          {LOCALES.de}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setLocale('en');
          }}
        >
          {LOCALES.en}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
