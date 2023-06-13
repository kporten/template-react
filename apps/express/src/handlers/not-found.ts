import { STATUS_CODES } from 'node:http';

import type { Request, Response } from 'express';

function notFoundHandler(req: Request, res: Response) {
  res.status(404).json({
    error: {
      message: STATUS_CODES[404],
    },
  });
}

export default notFoundHandler;
