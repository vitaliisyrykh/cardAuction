import express from "express";
import usersRouter from "./usersRouter";
import authRouter from "./authRouter";
import { checkAccessToken } from "../middlewares/checkToken";

const router = express.Router();

router.use("/auth", authRouter);
//router.use(checkAccessToken);
router.use("/users", usersRouter);

export default router;
