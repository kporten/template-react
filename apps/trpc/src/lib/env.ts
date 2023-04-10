import { config } from 'dotenv';
import { z } from 'zod';

config({ path: '.env' });

const schema = z.object({
  DATABASE_URL: z.string().url(),
  LOG_LEVEL: z
    .enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace'])
    .default('info'),
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(5173),
});

const env = schema.safeParse({
  DATABASE_URL: process.env.DATABASE_URL,
  LOG_LEVEL: process.env.LOG_LEVEL,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
});

if (!env.success) {
  console.error(
    '👀 Invalid env configuration:',
    env.error.flatten().fieldErrors,
  );

  throw new Error('invalid env configuration');
}

export default env.data;
