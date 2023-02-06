import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';

import Welcome from '@/features/welcome';

export default function Index() {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'routes.index.title',
            defaultMessage: 'Welcome',
          })}
        </title>
      </Helmet>
      <Welcome />
    </>
  );
}
