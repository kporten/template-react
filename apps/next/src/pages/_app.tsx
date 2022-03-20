import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import Auth from '@/components/Auth/Auth';
import Layout from '@/components/Layout/Layout';
import '@/styles/global.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <SessionProvider session={session}>
      <Layout>
        <Auth>
          <Component {...pageProps} />
        </Auth>
      </Layout>
    </SessionProvider>
  );
}
