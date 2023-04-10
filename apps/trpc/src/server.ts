import env from '@/lib/env';

import app from './app';

export type { AppRouter } from './app';

const server = app.listen(env.PORT, () => {
  console.info(`➜ Local: http://localhost:${env.PORT}`);
});

const shutdown = async () => {
  console.info('➜ Shutdown initiated...');

  await new Promise<void>((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });

  console.info('➜ Shutdown finished!');
};

process.on('SIGINT', async () => {
  await shutdown();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await shutdown();
  process.exit(0);
});
