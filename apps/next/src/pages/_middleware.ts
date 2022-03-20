// ? https://nextjs.org/docs/middleware
// ? https://next-auth.js.org/configuration/nextjs#middleware

import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized({ token, req }) {
      if (req.nextUrl.pathname === '/favicon.ico') {
        return true;
      }

      return Boolean(token);
    },
  },
});
