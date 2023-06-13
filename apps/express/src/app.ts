import express, { type Express } from 'express';

import errorHandler from '@/handlers/error';
import healthHandler from '@/handlers/health';
import notFoundHandler from '@/handlers/not-found';
import trpcHandler from '@/handlers/trpc';
import authMiddleware from '@/middlewares/auth';
import corsMiddleware from '@/middlewares/cors';
import helmetMiddleware from '@/middlewares/helmet';
import loggerMiddleware from '@/middlewares/logger';

const app: Express = express();

app.use(corsMiddleware);
app.use(helmetMiddleware);
app.use(loggerMiddleware);

app.get('/', healthHandler);
app.use('/trpc', authMiddleware, trpcHandler);

app.use(notFoundHandler);
app.use(errorHandler);

export type { AppRouter } from '@/handlers/trpc';
export default app;
