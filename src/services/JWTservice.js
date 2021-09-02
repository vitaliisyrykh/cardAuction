import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import CONSTANTS from '../constants.js';

const tokenConfig = {
  access: {
    time: CONSTANTS.ACCESS_TOKEN_TIME,
    secret: CONSTANTS.ACCESS_TOKEN_SECRET
  },
  refresh: {
    time: CONSTANTS.REFRESH_TOKEN_TIME,
    secret: CONSTANTS.REFRESH_TOKEN_SECRET
  }
};

const signJWT = promisify(jwt.sign);
const verifyJWT = promisify(jwt.verify);

const createToken = async (payload, { secret, time }) =>
  signJWT(payload, secret, { expiresIn: time });
const verifyToken = async (token, { secret }) => verifyJWT(token, secret);

export const createTokenPair = async (payload = {}) => {
  return {
    refresh: await createToken(payload, tokenConfig.refresh),
    access: await createToken(payload, tokenConfig.access)
  };
};

export const verifyAccesToken = token => verifyToken(token, tokenConfig.access);
export const verifyRefreshToken = token =>verifyToken(token, tokenConfig.refresh);
