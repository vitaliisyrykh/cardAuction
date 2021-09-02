import express from 'express';
import authController from '../controllers/AuthController';
import { checkRefreshToken } from '../middlewares/checkToken';
import hashPass from '../middlewares/hashPassword';

const authRouter = express.Router();

authRouter.post('/sign-in', authController.signIn);
authRouter.post('/sign-up',hashPass,authController.signUp);
authRouter.post('/refresh',checkRefreshToken,)

export default authRouter;