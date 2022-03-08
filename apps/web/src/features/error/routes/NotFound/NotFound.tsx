import { Helmet } from 'react-helmet';
import { FormattedMessage, useIntl } from 'react-intl';

import Headline from '@/components/Headline/Headline';

export default function NotFound() {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'features.error.notFound.title',
            defaultMessage: 'Not Found',
          })}
        </title>
      </Helmet>
      <div className="p-4 text-center">
        <Headline level={1}>
          <FormattedMessage
            id="features.error.notFound.headline"
            defaultMessage="Not Found 😿"
          />
        </Headline>
      </div>
    </>
  );
}
