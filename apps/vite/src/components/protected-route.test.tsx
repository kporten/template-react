import { useAuth } from '@clerk/clerk-react';
import { render, screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';

import ProtectedRoute from '@/components/protected-route';

it('should render the protected content', () => {
  const route = 'protected';

  render(
    <ProtectedRoute>
      <div>{route}</div>
    </ProtectedRoute>,
  );

  expect(screen.getByText(route)).toBeDefined();
  expect(screen.queryByText('RedirectToSignIn')).toBeNull();
});

it('should render the redirect component', () => {
  vi.mocked(useAuth, { partial: true }).mockImplementation(() => ({
    isSignedIn: false,
  }));

  const route = 'protected';

  render(
    <ProtectedRoute>
      <div>{route}</div>
    </ProtectedRoute>,
  );

  expect(screen.queryByText(route)).toBeNull();
  expect(screen.getByTestId('RedirectToSignIn')).toBeDefined();
});
