import { SignedIn } from '@clerk/clerk-react';

import Auth from '@/features/welcome/components/auth';
import GettingStarted from '@/features/welcome/components/getting-started';
import Users from '@/features/welcome/components/users';

export default function Index() {
  return (
    <section>
      <GettingStarted />
      <div className="mt-12">
        <Auth />
      </div>
      <SignedIn>
        <div className="mt-12">
          <Users />
        </div>
      </SignedIn>
    </section>
  );
}
