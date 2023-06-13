import { useAuth } from '@clerk/clerk-react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { expect, it, vi } from 'vitest';

import { renderWithProviders } from '@/test/render';

import Auth from './auth';

it('should render sign in button', () => {
  vi.mocked(useAuth, { partial: true }).mockImplementation(() => ({
    isSignedIn: false,
  }));

  renderWithProviders(<Auth />);

  expect(screen.getByRole('button', { name: 'Sign In' })).toBeDefined();
});

it('should render sign out button and handle click', async () => {
  const signOut = vi.fn(async () => Promise.resolve());

  vi.mocked(useAuth, { partial: true }).mockImplementation(() => ({
    isSignedIn: true,
    signOut,
  }));

  renderWithProviders(
    <MemoryRouter>
      <Auth />
    </MemoryRouter>,
  );

  await userEvent.click(screen.getByRole('button', { name: 'Sign Out' }));

  expect(signOut).toHaveBeenCalledTimes(1);
});
