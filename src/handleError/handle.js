import { TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken';


export const tokenErrorHandler = (err, req, res, next) => {
  if (err instanceof TokenExpiredError) {
    return res.status(419).send('Token expired');
  }

  if (err instanceof JsonWebTokenError) {
    return res.status(401).send('Invalid token');
  }

  next(err);
};



export const  basicErrorHandler = (err, req, res, next) => {
  console.log('LOG ERROR=>>>>');
  console.dir(err);

  if (!err.message || !err.status) {
    return res.status(500).send('Server Error');
  }
  res.status(err.status).send(err.message);
};