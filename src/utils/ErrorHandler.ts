import { Response } from 'express';

class ErrorHandler extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

const handleError = (err: ErrorHandler, res: Response) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({ message });
};

export { ErrorHandler, handleError };
