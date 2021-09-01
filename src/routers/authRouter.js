import express from 'express';
import authController from '../../controllers/authController';
import { checkRefreshToken } from '../../middlewares/checkToken.mw';
import hashPass from '../../middlewares/hashPass.mw';

const authRouter = express.Router();

authRouter.post('/sign-in', authController.signIn);
authRouter.post('/sign-up',hashPass,authController.signUp);
authRouter.post('/refresh',checkRefreshToken,)

export default authRouter;