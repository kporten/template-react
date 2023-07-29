import { Headline } from '@template-react/ui-core';

import { trpc } from '@/utils/trpc';

export default function Users() {
  const users = trpc.user.list.useQuery();

  return (
    <>
      <Headline variant="h3" className="text-center">
        tRPC
      </Headline>
      <pre className="mt-4 rounded-lg border-2 border-sky-800 p-4">
        {JSON.stringify(users, null, 2)}
      </pre>
    </>
  );
}
