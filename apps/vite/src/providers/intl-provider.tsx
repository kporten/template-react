import { useAtomValue } from 'jotai';
import { IntlProvider as Provider } from 'react-intl';

import en from '@/messages/en.json';
import { LOCALE_DEFAULT, localeAtom } from '@/store/locale';

const messages = { en };

export default function IntlProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useAtomValue(localeAtom);

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
