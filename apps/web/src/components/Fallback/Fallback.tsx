import { FormattedMessage } from 'react-intl';

import Headline, { HeadlineVariant } from '@/components/Headline/Headline';

export default function Fallback() {
  return (
    <Headline level={1} variant={HeadlineVariant.Error}>
      <FormattedMessage
        id="components.fallback.headline"
        defaultMessage="Unexpected Error"
      />
    </Headline>
  );
}
