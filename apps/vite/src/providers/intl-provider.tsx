import { useAtomValue } from 'jotai';
import { IntlProvider as Provider } from 'react-intl';

import en from '@/messages/en.json';
import { defaultLocale, localeAtom } from '@/store/locale';

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
      defaultLocale={defaultLocale}
    >
      {children}
    </Provider>
  );
}
