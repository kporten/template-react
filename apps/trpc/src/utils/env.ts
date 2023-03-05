import { config } from 'dotenv';
import { z } from 'zod';

config({ path: '.env' });

const env = z.object({
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().int(),
});

export default env.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT,
});
