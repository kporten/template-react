import { SignedIn, SignedOut, SignInButton, useAuth } from '@clerk/clerk-react';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@template-react/ui-core';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

export default function Auth() {
  const { signOut } = useAuth();
  const queryClient = useQueryClient();

  const handleSignOut = async () => {
    await signOut();
    queryClient.removeQueries();
  };

  return (
    <div className="text-center">
      <SignedIn>
        <div className="space-x-4">
          <Button variant="outline" onClick={handleSignOut}>
            <FormattedMessage
              id="features.welcome.components.auth.signOut"
              defaultMessage="Sign Out"
            />
          </Button>
          <Button variant="link" asChild>
            <Link to="profile">
              <FormattedMessage
                id="features.welcome.components.auth.profile"
                defaultMessage="Profile"
              />
            </Link>
          </Button>
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>
            <FormattedMessage
              id="features.welcome.components.auth.signIn"
              defaultMessage="Sign In"
            />
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}
