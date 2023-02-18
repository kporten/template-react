import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';

export default function Frame({ children }: { children: React.ReactNode }) {
  const intl = useIntl();
  const [lang] = intl.locale.split('-');

  return (
    <>
      <Helmet
        titleTemplate="template-react | vite | %s"
        defaultTitle="template-react | vite"
      >
        <html lang={lang} />
        <body className="dark:bg-gray-900 dark:text-gray-100" />
        <meta name="description" content="template-react" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="rgb(56 189 248)"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="rgb(7 89 133)"
        />
      </Helmet>
      <div className="mx-auto min-h-[100dvh] max-w-3xl p-4">{children}</div>
    </>
  );
}
