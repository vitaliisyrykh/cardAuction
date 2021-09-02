import {verifyAccesToken, verifyRefreshToken} from '../services/JWTservice';
import createHttpError from 'http-errors';


const checkToken = chekFunction => {
  return async (req, res, next) => {
    try {
      const {
        headers: { authorization }
      } = req;
      if (authorization) {
        const [, token] = authorization.split(' ');
        req.tokenData = await chekFunction(token);
        next()
      }
    } catch (error) {
      next(createHttpError(419, error))
    }
  };
};

export const checkRefreshToken = checkToken(verifyRefreshToken);
export const checkAccessToken = checkToken(verifyAccesToken); 
