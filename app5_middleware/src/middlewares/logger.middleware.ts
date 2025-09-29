import { Request, Response, NextFunction } from 'express';

const LoggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('logger middleware ');
  next();
};

export default LoggerMiddleware;
