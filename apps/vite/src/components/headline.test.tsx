import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

import Headline from './headline';

it('should render default variant', () => {
  const { asFragment } = render(<Headline>h1</Headline>);

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <h1
        class="scroll-m-20 tracking-tight text-4xl font-extrabold lg:text-5xl"
      >
        h1
      </h1>
    </DocumentFragment>
  `);
});

it('should render h2 variant', () => {
  const { asFragment } = render(<Headline variant="h2">h2</Headline>);

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <h2
        class="scroll-m-20 tracking-tight border-b pb-2 text-3xl font-semibold transition-colors first:mt-0"
      >
        h2
      </h2>
    </DocumentFragment>
  `);
});

it('should render h3 variant', () => {
  const { asFragment } = render(<Headline variant="h3">h3</Headline>);

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <h3
        class="scroll-m-20 tracking-tight text-2xl font-semibold"
      >
        h3
      </h3>
    </DocumentFragment>
  `);
});

it('should render h4 variant', () => {
  const { asFragment } = render(<Headline variant="h4">h4</Headline>);

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <h4
        class="scroll-m-20 tracking-tight text-xl font-semibold"
      >
        h4
      </h4>
    </DocumentFragment>
  `);
});
