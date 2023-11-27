import type { Request, Response } from 'express';

export default function healthHandler(req: Request, res: Response) {
  res.sendStatus(200);
}
