import { render, type RenderOptions } from '@testing-library/react';
import type { ReactElement } from 'react';

import Providers from '@/test/providers';

export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, {
    wrapper: Providers,
    ...options,
  });
}
