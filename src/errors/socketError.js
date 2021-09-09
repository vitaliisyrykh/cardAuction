import ApplicationError from './ApplicationError';

class socketError extends ApplicationError {
  constructor(message){
    super(message|| "Socket error", 401)
  }
};

export default new socketError()