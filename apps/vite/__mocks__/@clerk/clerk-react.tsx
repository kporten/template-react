import type { ReactNode } from 'react';
import { vi } from 'vitest';

export const useAuth = vi.fn(() => ({
  isSignedIn: true,
  getToken: async () => Promise.resolve('token'),
}));

export function RedirectToSignIn() {
  return <div data-testid="RedirectToSignIn" />;
}

export function SignedIn({ children }: { children: ReactNode }) {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <div data-testid="SignedIn">{children}</div>;
  }

  return null;
}

export function SignedOut({ children }: { children: ReactNode }) {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <div data-testid="SignedOut">{children}</div>;
  }

  return null;
}

export function SignInButton({ children }: { children: ReactNode }) {
  return <div data-testid="SignInButton">{children}</div>;
}
