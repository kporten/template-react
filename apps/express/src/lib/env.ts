import { config } from 'dotenv';
import { z } from 'zod';

config({ path: '.env' });

const schema = z.object({
  clerkSecretKey: z.string().min(1),
  databaseUrl: z.string().url(),
  logLevel: z
    .enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace'])
    .default('info'),
  nodeEnv: z.enum(['development', 'production']).default('development'),
  serverPort: z.coerce.number().int().positive().default(5173),
});

const parsed = schema.safeParse({
  clerkSecretKey: process.env.CLERK_SECRET_KEY,
  databaseUrl: process.env.DATABASE_URL,
  logLevel: process.env.LOG_LEVEL,
  nodeEnv: process.env.NODE_ENV,
  serverPort: process.env.NODE_ENV,
});

if (!parsed.success) {
  console.error(
    '👀 Invalid env configuration:',
    parsed.error.flatten().fieldErrors,
  );

  throw new Error('invalid env configuration');
}

export default parsed.data;
