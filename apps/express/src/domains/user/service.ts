import { user } from '@/lib/prisma';

export async function getUserById(id: number) {
  return user.findFirst({
    where: {
      id,
    },
    include: {
      posts: true,
    },
  });
}

export async function getUsers() {
  return user.findMany({ orderBy: { email: 'asc' } });
}
