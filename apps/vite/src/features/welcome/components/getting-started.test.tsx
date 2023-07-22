import { useAuth } from '@clerk/clerk-react';
import { screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';

import GettingStarted from '@/features/welcome/components/getting-started';
import { renderWithProviders } from '@/test/render';

it('should render known user', async () => {
  renderWithProviders(<GettingStarted />);

  expect(screen.getByRole('heading', { name: 'Template React' })).toBeDefined();
  expect(screen.getByText('Get started', { exact: false })).toBeDefined();
  expect(await screen.findByText('Hello John', { exact: false })).toBeDefined();
});

it('should render unknown user', async () => {
  vi.mocked(useAuth, { partial: true }).mockImplementation(() => ({
    getToken: async () => Promise.resolve(null),
  }));

  renderWithProviders(<GettingStarted />);

  expect(
    await screen.findByText('Hello Unknown', { exact: false }),
  ).toBeDefined();
});
