import AuthService from '../services/AuthService';
import { success, unsuccess } from '../utils/resFuncs';
class AuthController {
  async signUp (req, res, next) {
    try {
      const { body, passHash } = req;
      const data = await AuthService.singUp(body, passHash);
      if (data) {
        return success(res, data);
      }
      return unsuccess(res, 'Sign Up Error');
    } catch (error) {
      next(error);
    }
  }
  async signIn (req, res, next) {
    try {
      const { body } = req;
      const data = await AuthService.signIn(body);
      if (data) {
        return success(res, data);
      }
      return unsuccess(res, 'Wrong password or email');
    } catch (error) {
      next(error);
    }
  }
  /*   async refreshToken (req, res, next) {
    try {
      const {
        body: { refreshToken }
      } = req;
    } catch (error) {}
  } */
}

export default new AuthController();
