// eslint-disable-next-line import/order
import env from '@/utils/env';

import express from 'express';

import cors from '@/middlewares/cors';
import helmet from '@/middlewares/helmet';
import trpc from '@/middlewares/trpc';

const app = express();

app.use(cors);
app.use(helmet);
app.use('/trpc', trpc);

app.get('/', (req, res) => res.sendStatus(200));

app.listen(env.PORT, () => {
  console.info(`➜ Local: http://localhost:${env.PORT}`);
});

export { type AppRouter } from '@/middlewares/trpc';
