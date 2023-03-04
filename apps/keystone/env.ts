import { config } from 'dotenv';
import { z } from 'zod';

config({ path: process.env.CI ? '.env.example' : '.env' });

const env = z.object({
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().int(),
  SESSION_SECRET: z.string(),
});

export default env.parse(process.env);
