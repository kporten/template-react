import crypto from 'node:crypto';

import { pinoHttp } from 'pino-http';
import { z } from 'zod';

import logger from '@/lib/logger';

const correlationIdSchema = z.string().uuid();

// https://github.com/pinojs/pino-http
export default pinoHttp({
  logger,
  genReqId: (req, res) => {
    const clientCorrelationId = correlationIdSchema.safeParse(
      req.headers['x-correlation-id'],
    );

    if (clientCorrelationId.success) {
      return clientCorrelationId.data;
    }

    const correlationId = crypto.randomUUID();
    res.setHeader('X-Correlation-Id', correlationId);

    return correlationId;
  },
  customSuccessMessage: (req, res, responseTime) => {
    return `${req.method ?? ''} ${req.url ?? ''} ➜ ${
      res.statusCode
    } in ${responseTime}ms [${String(req.id)}]`;
  },
  customErrorMessage: (req, res) => {
    return `${req.method ?? ''} ${req.url ?? ''} ➜ ${res.statusCode} [${String(
      req.id,
    )}]`;
  },
});
