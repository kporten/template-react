import { Helmet } from 'react-helmet';
import { FormattedMessage, useIntl } from 'react-intl';

import Code from '@/components/Code/Code';
import Headline from '@/components/Headline/Headline';
import Text from '@/components/Text/Text';

export default function Welcome() {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'features.landing.welcome.title',
            defaultMessage: 'Welcome',
          })}
        </title>
      </Helmet>
      <div className="text-center">
        <Headline level={1}>Template React</Headline>
        <p className="mt-8">
          <Text>
            <FormattedMessage
              id="features.landing.welcome.instruction"
              defaultMessage="Get started by editing the {file} file!"
              values={{ file: <Code>src/App.tsx</Code> }}
            />
          </Text>
        </p>
      </div>
    </>
  );
}
