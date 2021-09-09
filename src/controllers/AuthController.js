
import AuthService from '../services/AuthService';
import { successCreated, badRequestError, forBiddenError } from '../utils/resFuncs';

class AuthController {
  async signUp(req, res, next) {
    try {
      const { body, passHash } = req;
      const data = await AuthService.singUp(body, passHash);
      if (data) {
        return successCreated(res, data);
      }
      return badRequestError(res, 'Sign Up Error');
    } catch (error) {
      next(error);
    }
  }
  async signIn(req, res, next) {
    try {
      const { body } = req;
      const data = await AuthService.signIn(body);
      if (data) {
        return successCreated(res, data);
      }
      return forBiddenError(res, 'Wrong password or email');
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
