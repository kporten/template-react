import { EmojiSadIcon } from '@heroicons/react/solid';
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
            id: 'routes.notFound.title',
            defaultMessage: 'Not Found',
          })}
        </title>
      </Helmet>
      <div className="flex flex-col items-center space-y-4">
        <EmojiSadIcon className="h-16 w-16 text-sky-800 md:h-24 md:w-24" />
        <Headline level={1}>
          <FormattedMessage
            id="routes.notFound.headline"
            defaultMessage="Not Found"
          />
        </Headline>
      </div>
    </>
  );
}
