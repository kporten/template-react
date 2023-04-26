import type { Request, Response } from 'express';

function notFoundHandler(req: Request, res: Response) {
  res.sendStatus(404);
}

export default notFoundHandler;
