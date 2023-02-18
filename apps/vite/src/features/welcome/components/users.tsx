import Headline from '@/components/headline';
import { trpc } from '@/utils/trpc';

export default function Users() {
  const users = trpc.user.list.useQuery();

  return (
    <>
      <Headline level={2} className="text-center text-3xl md:text-4xl">
        tRPC
      </Headline>
      <pre className="mt-4 rounded-lg border-2 border-sky-800 p-4">
        {JSON.stringify(users, null, 2)}
      </pre>
    </>
  );
}
