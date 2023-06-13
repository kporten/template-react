import { SignedIn } from '@clerk/clerk-react';

import Auth from './components/auth';
import GettingStarted from './components/getting-started';
import Users from './components/users';

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
