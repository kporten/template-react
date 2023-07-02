import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Button from './button';

describe('variant', () => {
  it('should render default variant', () => {
    const { asFragment } = render(<Button>default</Button>);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          default
        </button>
      </DocumentFragment>
    `);
  });

  it('should render destructive variant', () => {
    const { asFragment } = render(
      <Button variant="destructive">destructive</Button>,
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2"
        >
          destructive
        </button>
      </DocumentFragment>
    `);
  });

  it('should render outline variant', () => {
    const { asFragment } = render(<Button variant="outline">outline</Button>);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          outline
        </button>
      </DocumentFragment>
    `);
  });

  it('should render secondary variant', () => {
    const { asFragment } = render(
      <Button variant="secondary">secondary</Button>,
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2"
        >
          secondary
        </button>
      </DocumentFragment>
    `);
  });

  it('should render ghost variant', () => {
    const { asFragment } = render(<Button variant="ghost">ghost</Button>);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
          ghost
        </button>
      </DocumentFragment>
    `);
  });

  it('should render link variant', () => {
    const { asFragment } = render(<Button variant="link">link</Button>);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2"
        >
          link
        </button>
      </DocumentFragment>
    `);
  });
});

describe('size', () => {
  it('should render size sm', () => {
    const { asFragment } = render(<Button size="sm">sm</Button>);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
        >
          sm
        </button>
      </DocumentFragment>
    `);
  });

  it('should render size lg', () => {
    const { asFragment } = render(<Button size="lg">lg</Button>);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
        >
          lg
        </button>
      </DocumentFragment>
    `);
  });

  it('should render size icon', () => {
    const { asFragment } = render(<Button size="icon">icon</Button>);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10"
        >
          icon
        </button>
      </DocumentFragment>
    `);
  });
});

describe('props', () => {
  it('should handle click', async () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>click</Button>);

    await userEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render as child', () => {
    const { asFragment } = render(
      <Button asChild>
        <a href="#test">click</a>
      </Button>,
    );

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <a
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          href="#test"
        >
          click
        </a>
      </DocumentFragment>
    `);
  });
});
