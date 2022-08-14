import type { AppProps } from 'next/app';

import Layout from '@/components/Layout/Layout';
import '@/styles/global.css';

// https://nextjs.org/docs/basic-features/layouts
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
