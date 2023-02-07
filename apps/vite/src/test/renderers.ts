import { render, type RenderOptions } from '@testing-library/react';

import Providers from '@/test/providers';

export function renderWithProviders(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  render(ui, {
    wrapper: Providers,
    ...options,
  });
}
