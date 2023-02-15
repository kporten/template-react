import { z } from 'zod';

import { procedure, router } from '@/utils/trpc';

import { getById, getList } from './service';

export default router({
  getById: procedure.input(z.string()).query(({ input }) => {
    return getById(input);
  }),
  getList: procedure.query(() => {
    return getList();
  }),
});
