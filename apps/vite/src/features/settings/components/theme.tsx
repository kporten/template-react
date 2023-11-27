import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@template-react/ui-core';
import { useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { Moon, Sun } from 'lucide-react';
import { FormattedMessage } from 'react-intl';

import { themeAtom } from '@/providers/theme-provider';

export default function Theme() {
  const setTheme = useSetAtom(themeAtom);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">
            <FormattedMessage
              id="features.settings.components.theme.button"
              defaultMessage="Toggle theme"
            />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem
          onClick={() => {
            setTheme('light');
          }}
        >
          <FormattedMessage
            id="features.settings.components.theme.light"
            defaultMessage="Light"
          />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme('dark');
          }}
        >
          <FormattedMessage
            id="features.settings.components.theme.dark"
            defaultMessage="Dark"
          />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme(RESET);
          }}
        >
          <FormattedMessage
            id="features.settings.components.theme.system"
            defaultMessage="System"
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
