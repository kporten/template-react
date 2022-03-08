import { useAtom } from 'jotai';
import { IntlProvider as Provider } from 'react-intl';

import en from '@/messages/en.json';
import { LOCALE_DEFAULT, localeAtom } from '@/store/locale';

const messages = { en };

type IntlProviderProps = {
  children: React.ReactNode;
};

export default function IntlProvider({ children }: IntlProviderProps) {
  const [locale] = useAtom(localeAtom);

  return (
    <Provider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALE_DEFAULT}
    >
      {children}
    </Provider>
  );
}
