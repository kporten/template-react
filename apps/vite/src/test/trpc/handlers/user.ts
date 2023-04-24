// https://mswjs.io/docs/getting-started/mocks/rest-api

import { rest } from 'msw';

import type { TrpcOutput } from '@/utils/trpc';

export default [
  rest.get('/user.list', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          result: {
            data: [
              { id: 1, email: 'user1@email', name: 'User 1' },
              { id: 2, email: 'user2@email', name: 'User 2' },
              { id: 3, email: 'user3@email', name: 'User 3' },
            ] satisfies TrpcOutput['user']['list'],
          },
        },
      ]),
    );
  }),
];
