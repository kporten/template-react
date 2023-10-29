import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect, it } from 'vitest';

import { renderWithProviders } from '@/test/render';

import Theme from './theme';

it('should change the theme', async () => {
  renderWithProviders(<Theme />);

  const root = document.querySelector(':root');

  const toggleTheme = await screen.findByRole('button', {
    name: 'Toggle theme',
  });

  await userEvent.click(toggleTheme);
  await userEvent.click(await screen.findByRole('menuitem', { name: 'Light' }));

  expect(root?.classList.contains('light')).toBeTruthy();

  await userEvent.click(toggleTheme);
  await userEvent.click(await screen.findByRole('menuitem', { name: 'Dark' }));

  expect(root?.classList.contains('dark')).toBeTruthy();
});
