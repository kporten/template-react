import { z } from 'zod';

import { procedure, router } from '@/lib/trpc';

import { getUserById, getUsers } from './service';

export default router({
  byId: procedure.input(z.number().int()).query(async ({ input }) => {
    return getUserById(input);
  }),
  list: procedure.query(async () => {
    return getUsers();
  }),
});
