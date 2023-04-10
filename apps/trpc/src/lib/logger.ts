import { type Level, pino, type TransportMultiOptions } from 'pino';
import type { PrettyOptions } from 'pino-pretty';

import env from '@/lib/env';

const transportDevelopment: TransportMultiOptions = {
  targets: [
    {
      level: env.LOG_LEVEL satisfies Level,
      target: 'pino-pretty',
      options: {
        colorize: true,
        ignore: 'pid,hostname',
      } satisfies PrettyOptions,
    },
  ],
};

// https://getpino.io/#/docs/api
export default pino({
  level: env.LOG_LEVEL satisfies Level,
  transport: env.NODE_ENV === 'development' ? transportDevelopment : undefined,
});
