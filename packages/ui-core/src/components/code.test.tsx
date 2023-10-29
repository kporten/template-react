import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

import { Code } from '@/components/code';

it('should render default variant', () => {
  const { asFragment } = render(<Code>const a = 1;</Code>);

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <code
        class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
      >
        const a = 1;
      </code>
    </DocumentFragment>
  `);
});
