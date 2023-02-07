import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import Text from './text';

it('should display text', () => {
  const text = 'Hello World';

  render(<Text>{text}</Text>);

  expect(screen.getByText(text)).toBeDefined();
});
