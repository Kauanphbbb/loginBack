class ErrorHandler extends Error {
  statusCode: number;

  message: string;

  constructor(message: string, statusCode: number) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export default ErrorHandler;
