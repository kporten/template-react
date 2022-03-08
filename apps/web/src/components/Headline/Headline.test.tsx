import { expect, it } from 'vitest';

import { mount, screen } from '@/test/support';

import Headline from './Headline';

it('should display headline', () => {
  const headline = 'Hello World';

  mount(<Headline>{headline}</Headline>);

  expect(screen.getByRole('heading', { name: headline })).toBeDefined();
});
