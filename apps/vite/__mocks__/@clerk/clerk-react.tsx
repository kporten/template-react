import { vi } from 'vitest';

export const useAuth = vi.fn(() => ({
  isSignedIn: true,
  getToken: async () => Promise.resolve('token'),
}));

export function RedirectToSignIn() {
  return <div data-testid="RedirectToSignIn" />;
}

export function SignedIn({ children }: { children: React.ReactNode }) {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <div data-testid="SignedIn">{children}</div>;
  }

  return null;
}

export function SignedOut({ children }: { children: React.ReactNode }) {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <div data-testid="SignedOut">{children}</div>;
  }

  return null;
}

export function SignInButton({ children }: { children: React.ReactNode }) {
  return <div data-testid="SignInButton">{children}</div>;
}
