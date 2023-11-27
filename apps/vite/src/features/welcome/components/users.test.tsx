import { screen } from '@testing-library/react';
import type { DefaultErrorShape } from '@trpc/server';
import { TRPC_ERROR_CODES_BY_KEY } from '@trpc/server/rpc';
import { HttpResponse, http } from 'msw';
import { expect, it, vi } from 'vitest';

import Users from '@/features/welcome/components/users';
import { renderWithProviders } from '@/test/render';
import { server } from '@/test/server';

it('should render users', async () => {
  renderWithProviders(<Users />);

  expect(
    await screen.findByText('"status": "loading"', { exact: false }),
  ).toBeDefined();

  expect(
    await screen.findByText('"status": "success"', { exact: false }),
  ).toBeDefined();
});

it('should render error', async () => {
  vi.spyOn(console, 'error').mockImplementation(() => void 0);

  server.use(
    http.get('/user.list', () => {
      return HttpResponse.json(
        [
          {
            error: {
              code: TRPC_ERROR_CODES_BY_KEY.BAD_REQUEST,
              message: '',
              data: { code: 'BAD_REQUEST', httpStatus: 400 },
            } satisfies DefaultErrorShape,
          },
        ],
        { status: 400 },
      );
    }),
  );

  renderWithProviders(<Users />);

  expect(
    await screen.findByText('"status": "error"', { exact: false }),
  ).toBeDefined();
});
