import express from 'express';

import errorHandler from '@/handlers/error';
import healthHandler from '@/handlers/health';
import notFoundHandler from '@/handlers/not-found';
import trpcHandler from '@/handlers/trpc';
import corsMiddleware from '@/middlewares/cors';
import helmetMiddleware from '@/middlewares/helmet';
import loggerMiddleware from '@/middlewares/logger';

const app = express();

app.use(corsMiddleware);
app.use(helmetMiddleware);
app.use(loggerMiddleware);

app.get('/', healthHandler);
app.use('/trpc', trpcHandler);

app.use(notFoundHandler);
app.use(errorHandler);

export type { AppRouter } from '@/handlers/trpc';
export default app;
