export class InternalError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InternalError';
  }
}

export class HttpClientError extends InternalError {
  constructor(message: string) {
    super(message);
    this.name = 'HttpClientError';
  }
}

export class NotFoundError extends InternalError {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}

export class BadRequestError extends InternalError {
  constructor(message: string) {
    super(message);
    this.name = 'BadRequestError';
  }
}

export class UnauthorizedError extends InternalError {
  constructor(message: string) {
    super(message);
    this.name = 'UnauthorizedError';
  }
}
