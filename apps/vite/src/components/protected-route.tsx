import { RedirectToSignIn, useAuth } from '@clerk/clerk-react';
import { Outlet } from 'react-router-dom';

export default function ProtectedRoute({
  children,
}: {
  children?: React.ReactElement;
}) {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return children ?? <Outlet />;
  }

  return <RedirectToSignIn />;
}
