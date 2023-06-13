import { createClerkClient } from '@clerk/clerk-sdk-node';

import env from '@/lib/env';

export type AuthClaims = {
  // JWT Authorized party
  azp?: string;
  // JWT Expiration Time
  exp: number;
  // JWT Issued At
  iat: number;
  // JWT Issuer
  iss: string;
  // JWT Not Before
  nbf: number;
  // JWT Session ID
  sid: string;
  // JWT Subject
  sub: string;
};
export type AuthSignedIn = {
  userId: string;
  sessionId: string;
  claims: AuthClaims;
};
export type AuthSignedOut = null;
export type AuthLoose = AuthSignedIn | AuthSignedOut;
export type AuthStrict = AuthSignedIn;

const clerk: ReturnType<typeof createClerkClient> = createClerkClient({
  secretKey: env.CLERK_SECRET_KEY,
});

export default clerk;
