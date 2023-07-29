import { Code, Headline, Paragraph } from '@template-react/ui-core';
import { FormattedMessage } from 'react-intl';

import { trpc } from '@/utils/trpc';

export default function GettingStarted() {
  const { data: me } = trpc.user.me.useQuery();

  return (
    <div className="text-center">
      <Headline variant="h1">
        <FormattedMessage
          id="features.welcome.components.getting-started.headline"
          defaultMessage="Template React"
        />
      </Headline>
      <Paragraph>
        <FormattedMessage
          id="features.welcome.components.getting-started.hello"
          defaultMessage="Hello {name} 👋"
          values={{ name: me ?? '...' }}
        />
      </Paragraph>
      <Paragraph>
        <FormattedMessage
          id="features.welcome.components.getting-started.description"
          defaultMessage="Get started by editing the {file} file!"
          values={{ file: <Code>src/app.tsx</Code> }}
        />
      </Paragraph>
    </div>
  );
}
