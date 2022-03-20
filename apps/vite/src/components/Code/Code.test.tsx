import { expect, it } from 'vitest';

import { mount, screen } from '@/test/support';

import Code from './Code';

it('should display code', () => {
  const code = 'const a = 1;';

  mount(<Code>{code}</Code>);

  expect(screen.getByText(code)).toBeDefined();
});
