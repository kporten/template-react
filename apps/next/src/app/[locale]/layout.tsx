import type { ReactNode } from 'react';

import '@/styles/global.css';
import { LECKERLI_ONE } from '@/utils/fonts';
import { SUPPORTED_LOCALES } from '@/utils/locales';

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata = {
  title: {
    default: 'next | template-react',
    template: '%s | next | template-react',
  },
};

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

// https://nextjs.org/docs/app/api-reference/file-conventions/layout
export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale} className={LECKERLI_ONE.variable}>
      <body>
        <main className="grid min-h-[100dvh] place-items-center p-4 dark:bg-gray-900 dark:text-gray-100">
          {children}
        </main>
      </body>
    </html>
  );
}
