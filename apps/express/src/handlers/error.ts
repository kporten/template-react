import { STATUS_CODES } from 'node:http';

import type { NextFunction, Request, Response } from 'express';

import env from '@/lib/env';
import logger from '@/lib/logger';

// eslint-disable-next-line max-params
function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
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
        env.NODE_ENV === 'development' ? error.message : STATUS_CODES[500],
    },
  });
}

export default errorHandler;
