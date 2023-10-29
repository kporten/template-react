import {
  createClerkClient,
  type LooseAuthProp,
  type StrictAuthProp,
} from '@clerk/clerk-sdk-node';
import '@clerk/types';

import env from '@/lib/env';

export type LooseAuth = LooseAuthProp['auth'];
export type StrictAuth = StrictAuthProp['auth'];

const clerk: ReturnType<typeof createClerkClient> = createClerkClient({
  secretKey: env.CLERK_SECRET_KEY,
});

export default clerk;
