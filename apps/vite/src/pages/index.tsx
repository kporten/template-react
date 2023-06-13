import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';

import Welcome from '@/features/welcome';

export default function IndexPage() {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'pages.index.title',
            defaultMessage: 'Welcome',
          })}
        </title>
      </Helmet>
      <Welcome />
    </>
  );
}
