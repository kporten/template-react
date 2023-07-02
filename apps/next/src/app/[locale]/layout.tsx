import '@/styles/global.css';
import { leckerliOne } from '@/utils/fonts';
import { availableLocales } from '@/utils/locales';

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata = {
  title: {
    default: 'next | template-react',
    template: '%s | next | template-react',
  },
};

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export function generateStaticParams() {
  return availableLocales.map((locale) => ({ locale }));
}

// https://nextjs.org/docs/app/api-reference/file-conventions/layout
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
