import env from '@/lib/env';

// eslint-disable-next-line import/order
import express from 'express';

import cors from '@/middlewares/cors';
import helmet from '@/middlewares/helmet';
import trpc from '@/middlewares/trpc';

const app = express();

app.use(cors);
app.use(helmet);
app.use('/trpc', trpc);

app.get('/', (req, res) => res.sendStatus(200));

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

export { type AppRouter } from '@/middlewares/trpc';
