import { FormattedMessage } from 'react-intl';

import Headline from '@/components/headline';

export default function Fallback() {
  return (
    <Headline level={1} variant="error">
      <FormattedMessage
        id="components.fallback.headline"
        defaultMessage="Unexpected Error"
      />
    </Headline>
  );
}
