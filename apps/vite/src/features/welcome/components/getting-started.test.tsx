import { expect, it } from 'vitest';

import { renderWithProvider, screen } from '@/test/support';

import GettingStarted from './getting-started';

it('should render start', () => {
  renderWithProvider(<GettingStarted />);

  expect(screen.getByRole('heading', { name: 'Template React' })).toBeDefined();
  expect(screen.getByText('Get started', { exact: false })).toBeDefined();
});
