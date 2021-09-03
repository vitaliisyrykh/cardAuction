import express from "express";
import checkAdminMW from "../middlewares/checkAdmin";
import UserController from "../controllers/UserController";
import cardsRouter from "./cardsRouter";
import adminRouter from "./adminEndPoint";
import auctionRouter from "./auctionRouter";

const userRouter = express.Router();

userRouter
  .route("/:userId")
  .get(UserController.findOne)
  .patch(UserController.update)
  .delete(UserController.delete);

userRouter.use("/:userId/admin", checkAdminMW, adminRouter);
userRouter.use("/:userId/cards", cardsRouter);
userRouter.use("/:userId/auctions", auctionRouter);

export default userRouter;
