import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage, useIntl } from 'react-intl';

import Locale from '~components/Locale/Locale';

const Settings: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({ id: 'pages.settings.headline', defaultMessage: 'Settings' })}
        </title>
      </Helmet>
      <h1 className="text-3xl font-extrabold">
        <FormattedMessage id="pages.settings.headline" defaultMessage="Settings" />
      </h1>
      <div className="mt-4 max-w-sm">
        <Locale />
      </div>
    </>
  );
};

export default Settings;
