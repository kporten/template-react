import { RedirectToSignIn, useAuth } from '@clerk/clerk-react';
import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

export default function ProtectedRoute({ children }: { children?: ReactNode }) {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return children ?? <Outlet />;
  }

  return <RedirectToSignIn />;
}
