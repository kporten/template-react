import { render, type RenderOptions } from '@testing-library/react';

import TestProvider from '@/test/providers/TestProvider';

export const renderWithProvider = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) =>
  render(ui, {
    wrapper: TestProvider,
    ...options,
  });
