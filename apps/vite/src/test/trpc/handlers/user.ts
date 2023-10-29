// https://mswjs.io/docs/network-behavior/rest

import { http, HttpResponse } from 'msw';

import type { TrpcOutput } from '@/utils/trpc';

export default [
  http.get('/user.list', () => {
    return HttpResponse.json([
      {
        result: {
          data: [
            { id: 1, email: 'user1@email', name: 'User 1' },
            { id: 2, email: 'user2@email', name: 'User 2' },
            { id: 3, email: 'user3@email', name: 'User 3' },
          ] satisfies TrpcOutput['user']['list'],
        },
      },
    ]);
  }),
  http.get('/user.me', ({ request }) => {
    return HttpResponse.json([
      {
        result: {
          data: (request.headers.get('Authorization')
            ? 'John'
            : 'Unknown') satisfies TrpcOutput['user']['me'],
        },
      },
    ]);
  }),
];
