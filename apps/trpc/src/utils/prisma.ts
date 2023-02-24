import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const post = prisma.post;
export const user = prisma.user;

export default prisma;
