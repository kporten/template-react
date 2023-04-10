import type { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line max-params
function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  res.sendStatus(500);
}

export default errorHandler;
