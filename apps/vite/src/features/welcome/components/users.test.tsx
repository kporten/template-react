import { screen } from '@testing-library/react';
import type { DefaultErrorShape } from '@trpc/server';
import { TRPC_ERROR_CODES_BY_KEY } from '@trpc/server/rpc';
import { rest } from 'msw';
import { expect, it } from 'vitest';

import { renderWithProviders } from '@/test/renderers';
import { server } from '@/test/trpc/server';

import Users from './users';

it('should render users', async () => {
  renderWithProviders(<Users />);

  expect(
    screen.getByText('"status": "loading"', { exact: false }),
  ).toBeDefined();

  expect(
    await screen.findByText('"status": "success"', { exact: false }),
  ).toBeDefined();
});

it('should render error', async () => {
  server.use(
    rest.get('http://localhost/user.list', (req, res, ctx) => {
      return res(
        ctx.status(400),
        ctx.json([
          {
            error: {
              code: TRPC_ERROR_CODES_BY_KEY.BAD_REQUEST,
              message: '',
              data: { code: 'BAD_REQUEST', httpStatus: 400 },
            } satisfies DefaultErrorShape,
          },
        ]),
      );
    }),
  );

  renderWithProviders(<Users />);

  expect(
    await screen.findByText('"status": "error"', { exact: false }),
  ).toBeDefined();
});
