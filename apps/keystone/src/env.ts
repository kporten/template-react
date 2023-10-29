import { randomBytes } from 'node:crypto';

import { config } from 'dotenv';
import { z } from 'zod';

config({ path: '.env' });

const schema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(5171),
  SESSION_SECRET: z.string().default(randomBytes(32).toString('hex')),
});

const parsed =
  process.env.SKIP_ENV_REQUIRED === '1'
    ? schema
        .partial({
          DATABASE_URL: true,
        })
        .safeParse(process.env)
    : schema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    '👀 Invalid env configuration:',
    parsed.error.flatten().fieldErrors,
  );

  throw new Error('invalid env configuration');
}

export default parsed.data as z.infer<typeof schema>;
