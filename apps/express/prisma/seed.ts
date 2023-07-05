// https://www.prisma.io/docs/guides/database/seed-database

import { faker } from '@faker-js/faker';
import { PrismaClient } from 'prisma-client';

const prisma = new PrismaClient();

async function seed() {
  const userSeed = 5;

  for (let index = 0; index < userSeed; index += 1) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.person.firstName(),
        posts: {
          create: [
            {
              title: faker.lorem.sentence(),
              content: faker.lorem.sentences(),
              published: faker.datatype.boolean(),
            },
            {
              title: faker.lorem.sentence(),
              published: faker.datatype.boolean(),
            },
          ],
        },
      },
    });
  }

  console.info(`${userSeed} users with ${userSeed * 2} posts seeded.`);
}

void (async () => {
  try {
    await seed();
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
  }
})();
