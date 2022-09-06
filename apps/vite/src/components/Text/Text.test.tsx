import { expect, it } from 'vitest';

import { render, screen } from '@/test/support';

import Text from './Text';

it('should display text', () => {
  const text = 'Hello World';

  render(<Text>{text}</Text>);

  expect(screen.getByText(text)).toBeDefined();
});
