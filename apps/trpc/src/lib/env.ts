import { config } from 'dotenv';
import { z } from 'zod';

config({ path: '.env' });

const env = {
  DATABASE_URL: process.env.DATABASE_URL,
  LOG_LEVEL: process.env.LOG_LEVEL,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
};

const schema = z.object({
  DATABASE_URL: z.string().url(),
  LOG_LEVEL: z
    .enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace'])
    .default('info'),
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(5173),
});

const parsed = schema.safeParse(env);

if (!parsed.success) {
  console.error(
    '👀 Invalid env configuration:',
    parsed.error.flatten().fieldErrors,
  );

  throw new Error('invalid env configuration');
}

export default parsed.data;
