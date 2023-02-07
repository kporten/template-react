import { screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import { renderWithProviders } from '@/test/renderers';

import GettingStarted from './getting-started';

it('should render start', () => {
  renderWithProviders(<GettingStarted />);

  expect(screen.getByRole('heading', { name: 'Template React' })).toBeDefined();
  expect(screen.getByText('Get started', { exact: false })).toBeDefined();
});
