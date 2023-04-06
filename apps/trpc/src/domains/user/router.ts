import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { procedure, router } from '@/lib/trpc';

import { getUserById, getUsers } from './service';

export default router({
  byId: procedure.input(z.number().int()).query(async ({ input }) => {
    const user = await getUserById(input);

    if (!user) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'No user found for the given id',
      });
    }

    return user;
  }),
  list: procedure.query(async () => {
    return getUsers();
  }),
});
