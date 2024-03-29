import { useAuth } from '@clerk/clerk-react';
import { screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';

import GettingStarted from '@/features/welcome/components/getting-started';
import { renderWithProviders } from '@/test/render';

it('should render known user', async () => {
  renderWithProviders(<GettingStarted />);

  expect(
    await screen.findByText('Get started', { exact: false }),
  ).toBeDefined();

  expect(await screen.findByText('Hello John', { exact: false })).toBeDefined();
});

it('should render unknown user', async () => {
  vi.mocked(useAuth, { partial: true }).mockImplementation(() => ({
    // eslint-disable-next-line @typescript-eslint/require-await
    getToken: async () => {
      return null;
    },
  }));

  renderWithProviders(<GettingStarted />);

  expect(
    await screen.findByText('Hello Unknown', { exact: false }),
  ).toBeDefined();
});
