import { useAuth } from '@clerk/clerk-react';
import { screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';

import { renderWithProviders } from '@/test/render';

import ProtectedRoute from './protected-route';

it('should render the protected content', () => {
  const route = 'protected';

  renderWithProviders(
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

  renderWithProviders(
    <ProtectedRoute>
      <div>{route}</div>
    </ProtectedRoute>,
  );

  expect(screen.queryByText(route)).toBeNull();
  expect(screen.getByTestId('RedirectToSignIn')).toBeDefined();
});
