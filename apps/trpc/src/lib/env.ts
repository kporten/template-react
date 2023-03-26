import { config } from 'dotenv';
import { z } from 'zod';

config({ path: '.env' });

const schema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'production']).optional(),
  PORT: z.coerce.number().int().positive(),
});

const env = schema.safeParse({
  DATABASE_URL: process.env.DATABASE_URL,
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