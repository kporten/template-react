import { expect, it } from 'vitest';

import { mount, screen } from '@/test/support';

import Text from './Text';

it('should display text', () => {
  const text = 'Hello World';

  mount(<Text>{text}</Text>);

  expect(screen.getByText(text)).toBeDefined();
});
