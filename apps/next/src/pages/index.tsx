import { signOut, useSession } from 'next-auth/react';

import Page from '@/components/Page/Page';

export default function Index() {
  const { data: session } = useSession();

  return (
    <Page>
      <div className="space-y-4">
        <pre className="bg-black/10 p-4 rounded">
          {JSON.stringify(session, null, 2)}
        </pre>
        <button
          className="flex px-4 py-2 text-sm dark:text-white bg-black/20 rounded hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          onClick={async () => signOut()}
        >
          Sign out
        </button>
      </div>
    </Page>
  );
}
