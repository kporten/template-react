import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage, useIntl } from 'react-intl';

const Error404: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({ id: 'pages.error404.headline', defaultMessage: 'Not Found' })}
        </title>
      </Helmet>
      <h1 className="text-3xl font-extrabold">
        <FormattedMessage id="pages.error404.headline" defaultMessage="Not Found" />
      </h1>
    </>
  );
};

export default Error404;
