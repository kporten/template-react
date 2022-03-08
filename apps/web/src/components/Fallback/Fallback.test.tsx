import { expect, it } from 'vitest';

import { mount, screen } from '@/test/support';

import Fallback from './Fallback';

it('should display fallback message', () => {
  mount(<Fallback />);

  expect(screen.getByText('Unexpected Error')).toBeDefined();
});
