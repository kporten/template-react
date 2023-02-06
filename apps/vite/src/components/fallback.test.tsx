import { expect, it } from 'vitest';

import { renderWithProvider, screen } from '@/test/support';

import Fallback from './fallback';

it('should display fallback message', () => {
  renderWithProvider(<Fallback />);

  expect(screen.getByText('Unexpected Error')).toBeDefined();
});
