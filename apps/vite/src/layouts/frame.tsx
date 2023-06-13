import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';

export default function Frame({ children }: { children: React.ReactNode }) {
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
        <div className="mx-auto max-w-5xl p-4">{children}</div>
      </div>
    </>
  );
}
