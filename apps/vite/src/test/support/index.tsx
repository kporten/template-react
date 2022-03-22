import { render, type RenderOptions } from '@testing-library/react';

import TestProvider from '../providers/TestProvider';

const mount = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) =>
  render(ui, {
    wrapper: TestProvider,
    ...options,
  });

export * from '@testing-library/react';

export { default as userEvent } from '@testing-library/user-event';

export { mount };
