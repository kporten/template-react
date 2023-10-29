import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect, it } from 'vitest';

import { renderWithProviders } from '@/test/render';

import Locale from './locale';

it('should change the locale', async () => {
  renderWithProviders(<Locale />);

  await userEvent.click(await screen.findByRole('button', { name: 'English' }));

  await userEvent.click(
    await screen.findByRole('menuitem', { name: 'Deutsch' }),
  );

  expect(await screen.findByRole('button', { name: 'Deutsch' }));
});
