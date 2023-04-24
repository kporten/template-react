// https://beta.nextjs.org/docs/api-reference/file-conventions/layout

import '@/styles/global.css';
import { leckerliOne } from '@/utils/fonts';
import { availableLocales } from '@/utils/locales';

// https://beta.nextjs.org/docs/api-reference/metadata
export const metadata = {
  title: {
    default: 'next | template-react',
    template: '%s | next | template-react',
  },
  icons: {
    icon: {
      url: '/favicon.png',
      type: 'image/png',
    },
  },
};

// https://beta.nextjs.org/docs/api-reference/generate-static-params
export function generateStaticParams() {
  return availableLocales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale} className={leckerliOne.variable}>
      <body>
        <main className="grid min-h-[100dvh] place-items-center p-4 dark:bg-gray-900 dark:text-gray-100">
          {children}
        </main>
      </body>
    </html>
  );
}
