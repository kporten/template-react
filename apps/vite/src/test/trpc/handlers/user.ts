// https://mswjs.io/docs/getting-started/mocks/rest-api

import { rest } from 'msw';

import type { TrpcOutput } from '@/utils/trpc';

export default [
  rest.get('http://localhost/user.list', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          result: {
            data: [
              { id: 'u1', name: 'User 1' },
              { id: 'u2', name: 'User 2' },
              { id: 'u3', name: 'User 3' },
            ] satisfies TrpcOutput['user']['list'],
          },
        },
      ]),
    );
  }),
];
