import express from "express";
import authController from "../controllers/AuthController";
import { checkRefreshToken } from "../middlewares/checkToken";
import hashPass from "../middlewares/hashPassword";
import {singUpValidate, signInValidate} from '../middlewares/validator'

const authRouter = express.Router();

authRouter.post("/sign-in", signInValidate, authController.signIn);
authRouter.post("/sign-up", singUpValidate, hashPass, authController.signUp);
authRouter.post("/refresh", checkRefreshToken);

export default authRouter;
