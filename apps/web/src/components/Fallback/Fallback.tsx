import { FormattedMessage } from 'react-intl';

import Headline, { HeadlineVariant } from '@/components/Headline/Headline';

export default function Fallback() {
  return (
    <main className="grid min-h-screen place-items-center bg-red-900">
      <div className="p-4 text-center">
        <Headline level={1} variant={HeadlineVariant.Error}>
          <FormattedMessage
            id="components.fallback.headline"
            defaultMessage="Unexpected Error"
          />
        </Headline>
      </div>
    </main>
  );
}
