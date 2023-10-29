import { screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import { renderWithProviders } from '@/test/render';

import Frame from './frame';

it('should render the frame with children and title', async () => {
  renderWithProviders(<Frame>test</Frame>);

  expect(
    await screen.findByRole('heading', { name: 'Template React' }),
  ).toBeDefined();

  expect(await screen.findByText('test')).toBeDefined();

  expect(document.title).toBe('vite | template-react');
});
