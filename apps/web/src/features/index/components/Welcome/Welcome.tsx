import { FormattedMessage } from 'react-intl';

import Code from '@/components/Code/Code';
import Headline from '@/components/Headline/Headline';
import Text from '@/components/Text/Text';

export default function Welcome() {
  return (
    <div className="p-4 text-center">
      <Headline level={1}>Template React</Headline>
      <p className="mt-8">
        <Text>
          <FormattedMessage
            id="features.index.welcome.getStarted"
            defaultMessage="Get started by editing the {file} file!"
            values={{ file: <Code>src/App.tsx</Code> }}
          />
        </Text>
      </p>
    </div>
  );
}
