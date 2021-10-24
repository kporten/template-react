import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage, useIntl } from 'react-intl';

import Hello from '~components/Hello/Hello';

const Home: React.FC = () => {
  const intl = useIntl();

  const emojis = useMemo(() => ['💻', '👍', '😃'], []);

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({ id: 'pages.home.headline', defaultMessage: 'Home' })}</title>
      </Helmet>
      <h1 className="text-3xl font-extrabold">
        <FormattedMessage id="pages.home.headline" defaultMessage="Home" />
      </h1>
      <p className="mt-4">
        <Hello emojis={emojis} />
      </p>
    </>
  );
};

export default Home;