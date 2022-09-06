import { expect, it } from 'vitest';

import { render, screen } from '@/test/support';

import Headline from './Headline';

it('should display headline', () => {
  const headline = 'Hello World';

  render(<Headline>{headline}</Headline>);

  expect(screen.getByRole('heading', { name: headline })).toBeDefined();
});
