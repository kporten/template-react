import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';

it('should render dropdown menu', () => {
  const { asFragment } = render(<DropdownMenu />);

  expect(asFragment()).toMatchInlineSnapshot('<DocumentFragment />');
});

it('should render dropdown menu checkbox item', () => {
  const { asFragment } = render(
    <DropdownMenu>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem />
      </DropdownMenuContent>
    </DropdownMenu>,
  );

  expect(asFragment()).toMatchInlineSnapshot('<DocumentFragment />');
});

it('should render dropdown menu content', () => {
  const { asFragment } = render(
    <DropdownMenu>
      <DropdownMenuContent />
    </DropdownMenu>,
  );

  expect(asFragment()).toMatchInlineSnapshot('<DocumentFragment />');
});

it('should render dropdown menu group', () => {
  const { asFragment } = render(<DropdownMenuGroup />);

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        role="group"
      />
    </DocumentFragment>
  `);
});

it('should render dropdown menu item', () => {
  const { asFragment } = render(
    <DropdownMenu>
      <DropdownMenuContent>
        <DropdownMenuItem />
      </DropdownMenuContent>
    </DropdownMenu>,
  );

  expect(asFragment()).toMatchInlineSnapshot('<DocumentFragment />');
});

it('should render dropdown menu item with inset', () => {
  const { asFragment } = render(
    <DropdownMenu>
      <DropdownMenuContent>
        <DropdownMenuItem hasInset />
      </DropdownMenuContent>
    </DropdownMenu>,
  );

  expect(asFragment()).toMatchInlineSnapshot('<DocumentFragment />');
});

it('should render dropdown menu label', () => {
  const { asFragment } = render(<DropdownMenuLabel />);

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="px-2 py-1.5 text-sm font-semibold"
      />
    </DocumentFragment>
  `);
});

it('should render dropdown menu label with inset', () => {
  const { asFragment } = render(<DropdownMenuLabel hasInset />);

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="px-2 py-1.5 text-sm font-semibold pl-8"
      />
    </DocumentFragment>
  `);
});

it('should render dropdown menu', () => {
  const { asFragment } = render(
    <DropdownMenu>
      <DropdownMenuPortal />
    </DropdownMenu>,
  );

  expect(asFragment()).toMatchInlineSnapshot('<DocumentFragment />');
});

it('should render dropdown menu radio group', () => {
  const { asFragment } = render(<DropdownMenuRadioGroup />);

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        role="group"
      />
    </DocumentFragment>
  `);
});

it('should render dropdown menu radio item', () => {
  const { asFragment } = render(
    <DropdownMenu>
      <DropdownMenuContent>
        <DropdownMenuRadioItem value="test" />
      </DropdownMenuContent>
    </DropdownMenu>,
  );

  expect(asFragment()).toMatchInlineSnapshot('<DocumentFragment />');
});

it('should render dropdown menu separator', () => {
  const { asFragment } = render(<DropdownMenuSeparator />);

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        aria-orientation="horizontal"
        class="-mx-1 my-1 h-px bg-muted"
        role="separator"
      />
    </DocumentFragment>
  `);
});

it('should render dropdown menu shortcut', () => {
  const { asFragment } = render(<DropdownMenuShortcut />);

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <span
        class="ml-auto text-xs tracking-widest opacity-60"
      />
    </DocumentFragment>
  `);
});

it('should render dropdown menu sub', () => {
  const { asFragment } = render(
    <DropdownMenu>
      <DropdownMenuSub />
    </DropdownMenu>,
  );

  expect(asFragment()).toMatchInlineSnapshot('<DocumentFragment />');
});

it('should render dropdown menu sub content', () => {
  const { asFragment } = render(
    <DropdownMenu>
      <DropdownMenuSub>
        <DropdownMenuSubContent />
      </DropdownMenuSub>
    </DropdownMenu>,
  );

  expect(asFragment()).toMatchInlineSnapshot('<DocumentFragment />');
});

it('should render dropdown menu sub trigger', () => {
  const { asFragment } = render(
    <DropdownMenu>
      <DropdownMenuContent>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger />
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>,
  );

  expect(asFragment()).toMatchInlineSnapshot('<DocumentFragment />');
});

it('should render dropdown menu sub trigger with inset', () => {
  const { asFragment } = render(
    <DropdownMenu>
      <DropdownMenuContent>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger hasInset />
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>,
  );

  expect(asFragment()).toMatchInlineSnapshot('<DocumentFragment />');
});

it('should render dropdown menu trigger', () => {
  const { asFragment } = render(
    <DropdownMenu>
      <DropdownMenuTrigger />
    </DropdownMenu>,
  );

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <button
        aria-expanded="false"
        aria-haspopup="menu"
        data-state="closed"
        id="radix-:rq:"
        type="button"
      />
    </DocumentFragment>
  `);
});
