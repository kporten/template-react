import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import Headline from './headline';

it('should display headline', () => {
  const headline = 'Hello World';

  render(<Headline>{headline}</Headline>);

  expect(screen.getByRole('heading', { name: headline })).toBeDefined();
});
