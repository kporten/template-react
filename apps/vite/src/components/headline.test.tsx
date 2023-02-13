import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import Headline from './headline';

it('should display default headline', () => {
  const headline = 'default';

  render(<Headline>{headline}</Headline>);

  expect(
    screen
      .getByRole('heading', { name: headline })
      .classList.contains('to-sky-800'),
  ).toBeTruthy();
});

it('should display error headline', () => {
  const headline = 'error';

  render(<Headline variant="error">{headline}</Headline>);

  expect(
    screen
      .getByRole('heading', { name: headline })
      .classList.contains('to-red-500'),
  ).toBeTruthy();
});
