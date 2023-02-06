import '@/styles/global.css';
import { leckerliOne } from '@/utils/fonts';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={leckerliOne.variable}>
      <body>
        <main className="grid min-h-[100dvh] place-items-center p-4 dark:bg-gray-900 dark:text-gray-100">
          {children}
        </main>
      </body>
    </html>
  );
}
