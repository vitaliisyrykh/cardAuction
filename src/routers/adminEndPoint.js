import express from "express";
import UserController from "../controllers/UserController";
import auctionRouter from "./auctionRouter";
import cardsRouter from "./cardsRouter";

const adminRouter = express.Router({
  mergeParams: true,
});
adminRouter
  .route("/users/")
  .get(UserController.findAll)
  .patch(UserController.update)
  .delete(UserController.delete);
adminRouter.route("/user-role/").patch(UserController.addRole);

adminRouter.use("/cards", cardsRouter);
adminRouter.use("/auctions", auctionRouter);

export default adminRouter;
