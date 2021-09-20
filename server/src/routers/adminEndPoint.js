import express from "express";
import UserController from "../controllers/UserController";
import auctionRouter from "./auctionRouter";
import cardsRouter from "./cardsRouter";
import hashPassword from "../middlewares/hashPassword";
import pagination from "../middlewares/pagination"

const adminRouter = express.Router({
    mergeParams: true,
});
adminRouter
    .route("/users/")
    .post(hashPassword, UserController.create)
    .get(pagination, UserController.findAll)
    .patch(UserController.update)
    .delete(UserController.delete);
adminRouter.route("/user-role/").patch(UserController.addRole);

adminRouter.use("/cards", cardsRouter);
adminRouter.use("/auctions", auctionRouter);

export default adminRouter;
