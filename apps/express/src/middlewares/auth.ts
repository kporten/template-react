import clerk from '@/lib/clerk';

const authMiddlware: ReturnType<typeof clerk.expressWithAuth> =
  clerk.expressWithAuth();

export default authMiddlware;
