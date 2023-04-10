import { randomBytes } from 'node:crypto';

import { config } from 'dotenv';
import { z } from 'zod';

config({ path: '.env' });

const schema = z.object({
  DATABASE_URL: z.string().url().optional(),
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().optional(),
  SESSION_SECRET: z.string().default(randomBytes(32).toString('hex')),
});

const env = schema.safeParse({
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  SESSION_SECRET: process.env.SESSION_SECRET,
});

if (!env.success) {
  console.error(
    '👀 Invalid env configuration:',
    env.error.flatten().fieldErrors,
  );

  throw new Error('invalid env configuration');
}

export default env.data;
