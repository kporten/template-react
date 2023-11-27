import { type TransportMultiOptions, pino } from 'pino';
import type { PrettyOptions } from 'pino-pretty';

import env from '@/lib/env';

const transportDevelopment: TransportMultiOptions = {
  targets: [
    {
      level: env.logLevel,
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
  level: env.logLevel,
  transport: env.nodeEnv === 'development' ? transportDevelopment : undefined,
});
