import { config } from 'dotenv';
import { z } from 'zod';

config({ path: '.env' });

const env = z.object({
  PORT: z.coerce.number().int(),
});

export default env.parse(process.env);
