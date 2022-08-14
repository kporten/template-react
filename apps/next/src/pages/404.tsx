// https://nextjs.org/docs/advanced-features/custom-error-page#404-page

import Head from 'next/head';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>template-react | next | Page Not Found</title>
      </Head>
      <div className="text-center">
        <span className="font-bold">404</span> - Page Not Found
      </div>
    </>
  );
}
