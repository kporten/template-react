import { Headline } from '@template-react/ui-core';
import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage, useIntl } from 'react-intl';

export default function Frame({ children }: { children: ReactNode }) {
  const intl = useIntl();
  const [lang] = intl.locale.split('-');

  return (
    <>
      <Helmet
        titleTemplate="%s | vite | template-react"
        defaultTitle="vite | template-react"
      >
        <html lang={lang} />
        <meta name="description" content="template-react" />
      </Helmet>
      <div className="min-h-[100dvh] bg-background text-foreground">
        <div className="mx-auto max-w-5xl p-12">
          <Headline variant="h1" className="text-center">
            <FormattedMessage
              id="features.welcome.components.getting-started.headline"
              defaultMessage="Template React"
            />
          </Headline>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </>
  );
}
