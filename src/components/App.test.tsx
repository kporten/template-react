import { render, screen, act } from '@testing-library/react';
import React from 'react';

import App from './App';

beforeEach(() => {
  jest.useFakeTimers();
});

it('should render my app', async () => {
  const { unmount } = render(<App />);

  expect(await screen.findByRole('heading')).toHaveTextContent(/application/i);

  unmount();
});

it('should show different emojis', () => {
  const { unmount } = render(<App />);

  expect(screen.getByRole('heading')).toHaveTextContent(/💻/);

  act(() => {
    jest.advanceTimersByTime(2000);
  });

  expect(screen.getByRole('heading')).toHaveTextContent(/👍/);

  act(() => {
    jest.advanceTimersByTime(2000);
  });

  expect(screen.getByRole('heading')).toHaveTextContent(/😃/);

  act(() => {
    jest.advanceTimersByTime(2000);
  });

  expect(screen.getByRole('heading')).toHaveTextContent(/💻/);

  unmount();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});
