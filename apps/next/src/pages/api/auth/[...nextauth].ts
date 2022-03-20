import NextAuth, { type User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export default NextAuth({
  // ? https://next-auth.js.org/providers/
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize(credentials) {
        if (
          credentials?.username === process.env.AUTH_USER &&
          credentials?.password === process.env.AUTH_PASSWORD
        ) {
          const user: User = {
            id: '1',
            name: 'John Doe',
            email: 'john.doe@example.com',
          };

          return user;
        }

        return null;
      },
    }),
  ],
});
