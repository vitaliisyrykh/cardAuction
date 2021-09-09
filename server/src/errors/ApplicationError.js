class ApplicationError extends Error {
  constructor(message, status) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message || "Somthing went wrong";
    this.status = status || 500;
  }
}

export default ApplicationError;
