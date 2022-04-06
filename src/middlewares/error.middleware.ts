import { NextFunction, Request, Response } from 'express';
import ErrorHandler from '../utils/ErrorHandler';

// eslint-disable-next-line
function errorMiddleware(error: ErrorHandler, req: Request, res: Response, next: NextFunction) {
  const status = error.statusCode || 500;
  const message = error.message || 'Something went wrong';
  res.status(status).json({ message });
}

export default errorMiddleware;
