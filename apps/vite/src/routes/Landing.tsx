import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import { Welcome } from '@/features/template';

export default function Landing() {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'routes.landing.title',
            defaultMessage: 'Welcome',
          })}
        </title>
      </Helmet>
      <Welcome />
    </>
  );
}
