import * as createHttpError from 'http-errors';
import CONSTANTS from '../constants';

export default (req, res, next) => {
  const {
    tokenData: { role }
  } = req;
  if (role === CONSTANTS.ADMIN) {
   return next();
  } else {
    return res.send(createHttpError(403, `You don't have access`));
  }
};
