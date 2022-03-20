import { useSession } from 'next-auth/react';

type AuthProps = {
  children: React.ReactElement;
};

export default function Auth({ children }: AuthProps) {
  const { data: session } = useSession();

  if (session) {
    return children;
  }

  return null;
}
