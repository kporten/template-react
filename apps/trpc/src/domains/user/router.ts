import { z } from 'zod';

import { procedure, router } from '@/utils/trpc';

import { getById, getList } from './service';

export default router({
  byId: procedure.input(z.string()).query(({ input }) => {
    return getById(input);
  }),
  list: procedure.query(() => {
    return getList();
  }),
});
