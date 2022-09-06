import { expect, it } from 'vitest';

import { render, screen } from '@/test/support';

import Code from './Code';

it('should display code', () => {
  const code = 'const a = 1;';

  render(<Code>{code}</Code>);

  expect(screen.getByText(code)).toBeDefined();
});
