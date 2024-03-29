import Express from "express";
import AuctionController from "../controllers/AuctionController";
import checkAdminMw from "../middlewares/checkAdmin";
import betRouter from "./betRouter";
import { auctionValidate } from '../middlewares/validator';

const auctionRouter = Express.Router({
  mergeParams: true,
});

auctionRouter
  .route("/")
  .post(checkAdminMw, auctionValidate, AuctionController.create)
  .get(AuctionController.findAll);

auctionRouter
  .route("/:auctionId")
  .get(AuctionController.findOne)
  .delete(checkAdminMw, AuctionController.delete);

auctionRouter.use("/bets", betRouter);

export default auctionRouter;
