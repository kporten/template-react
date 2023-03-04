import { config } from 'dotenv';
import { z } from 'zod';

config({ path: '.env' });

const env = z.object({
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().int(),
});

export default env.parse(process.env);
