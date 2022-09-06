import { expect, it } from 'vitest';

import { renderWithProvider, screen } from '@/test/support';

import Welcome from './Welcome';

it('should render welcome', () => {
  renderWithProvider(<Welcome />);

  expect(screen.getByRole('heading', { name: 'Template React' })).toBeDefined();
  expect(screen.getByText('Get started', { exact: false })).toBeDefined();
});
