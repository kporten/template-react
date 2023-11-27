import { STATUS_CODES } from 'node:http';

import type { NextFunction, Request, Response } from 'express';

import env from '@/lib/env';
import logger from '@/lib/logger';

// eslint-disable-next-line @typescript-eslint/max-params
export default function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) {
  logger.error(
    error,
    ['errorHandler', res.get('x-correlation-id'), '(express)']
      .filter(Boolean)
      .join(' '),
  );

  res.status(500).json({
    error: {
      message:
        env.nodeEnv === 'development' ? error.message : STATUS_CODES[500],
    },
  });
}
