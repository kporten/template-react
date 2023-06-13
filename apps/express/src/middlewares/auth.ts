import type { NextFunction, Request, Response } from 'express';

import auth, { type AuthLoose } from '@/lib/auth';

type RequestWithAuth = Request & { auth: AuthLoose };

async function authMiddlewareLoose(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    (req as RequestWithAuth).auth = null;

    if (req.headers.authorization) {
      const jwtPayload = await auth.verifyToken(
        req.headers.authorization.replace('Bearer ', ''),
      );

      (req as RequestWithAuth).auth = {
        userId: jwtPayload.sub,
        sessionId: jwtPayload.sid,
        claims: jwtPayload,
      };
    }

    next();
  } catch (error) {
    next(error);
  }
}

export default authMiddlewareLoose;
