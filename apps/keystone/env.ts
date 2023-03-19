import { randomBytes } from 'node:crypto';

import { config } from 'dotenv';
import { z } from 'zod';

config({ path: '.env' });

const env = z.object({
  DATABASE_URL: z.string().default(''),
  NODE_ENV: z.enum(['development', 'production']).optional(),
  PORT: z.coerce.number().int().optional(),
  SESSION_SECRET: z.string().default(randomBytes(32).toString('hex')),
});

const envParsed = env.safeParse({
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  SESSION_SECRET: process.env.SESSION_SECRET,
});

if (!envParsed.success) {
  console.error(
    '👀 invalid env configuration',
    envParsed.error.flatten().fieldErrors,
  );

  throw new Error('invalid env configuration');
}

export default envParsed.data;
