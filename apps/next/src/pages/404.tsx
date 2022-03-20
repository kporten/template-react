// ? https://nextjs.org/docs/advanced-features/custom-error-page#404-page

import Page from '@/components/Page/Page';

export default function NotFound() {
  return (
    <Page>
      <div className="text-center">
        <span className="font-bold">404</span> - Page Not Found
      </div>
    </Page>
  );
}
