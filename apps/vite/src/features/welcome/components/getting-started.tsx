import { FormattedMessage } from 'react-intl';

import Code from '@/components/code';
import Headline from '@/components/headline';
import Text from '@/components/text';

export default function GettingStarted() {
  return (
    <>
      <Headline level={1} className="text-center">
        <FormattedMessage
          id="features.welcome.components.getting-started.headline"
          defaultMessage="Template React"
        />
      </Headline>
      <p className="mt-8 text-center">
        <Text>
          <FormattedMessage
            id="features.welcome.components.getting-started.description"
            defaultMessage="Get started by editing the {file} file!"
            values={{ file: <Code>src/app.tsx</Code> }}
          />
        </Text>
      </p>
    </>
  );
}
