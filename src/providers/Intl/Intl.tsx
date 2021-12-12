import { useAtom } from 'jotai';
import React from 'react';
import { IntlProvider } from 'react-intl';

import de from '~messages/de.json';
import en from '~messages/en.json';
import { localeAtom, LOCALE_DEFAULT } from '~store/locale';

const messages = { de, en };

const Intl: React.FC = ({ children }) => {
  const [locale] = useAtom(localeAtom);

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALE_DEFAULT}
    >
      {children}
    </IntlProvider>
  );
};

export default Intl;
