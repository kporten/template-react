import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import clerk from '@/lib/clerk';
import { procedure, protectedProcedure, router } from '@/lib/trpc';

import { getUserById, getUsers } from './service';

export default router({
  me: procedure.query(async ({ ctx }) => {
    const user = ctx.auth?.userId
      ? await clerk.users.getUser(ctx.auth.userId)
      : null;

    return user?.firstName ?? 'Unknown';
  }),
  byId: protectedProcedure.input(z.number().int()).query(async ({ input }) => {
    const user = await getUserById(input);

    if (!user) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'No user found for the given id',
      });
    }

    return user;
  }),
  list: protectedProcedure.query(async () => {
    return getUsers();
  }),
});
