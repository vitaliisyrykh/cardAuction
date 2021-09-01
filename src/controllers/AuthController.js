import createHttpError from 'http-errors';
import AuthService from '../services/AuthService';

class AuthController {
  async signUp (req, res, next) {
    try {
      const { body, passHash } = req;
      const data = AuthService.singUp(body, passHash);
      if (data) {
        res.status(201).send(data);
      }
      next(createHttpError(400, 'Sign Up Error'));
    } catch (error) {
      next(error);
    }
  }
  async signIn (req, res, next) {
    try {
      const { body } = req;
      const data = AuthService.signIn(body);
      if (data) {
        return res.status(201).send(data);
      }
      next(createHttpError(401, 'Wrong password or email'));
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
