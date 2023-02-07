import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import Code from './code';

it('should display code', () => {
  const code = 'const a = 1;';

  render(<Code>{code}</Code>);

  expect(screen.getByText(code)).toBeDefined();
});
