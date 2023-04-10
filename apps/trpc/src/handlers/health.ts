import type { Request, Response } from 'express';

function healthHandler(req: Request, res: Response) {
  res.sendStatus(200);
}

export default healthHandler;
