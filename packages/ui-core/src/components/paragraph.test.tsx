import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

import Paragraph from '@/components/paragraph';

it('should render default variant', () => {
  const { asFragment } = render(<Paragraph>paragraph</Paragraph>);

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <p
        class="leading-7 [&:not(:first-child)]:mt-6"
      >
        paragraph
      </p>
    </DocumentFragment>
  `);
});
