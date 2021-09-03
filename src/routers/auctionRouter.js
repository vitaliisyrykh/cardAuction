import Express from "express";
import AuctionController from "../controllers/AuctionController";
import checkAdminMw from "../middlewares/checkAdmin";
import betRouter from "./betRouter";

const auctionRouter = Express.Router({
  mergeParams: true,
});

auctionRouter
  .route("/")
  .post(checkAdminMw, AuctionController.createAuction)
  .get(AuctionController.findAllAuctions);

auctionRouter
  .route("/:auctionId")
  .get(AuctionController.findAuction)
  .delete(checkAdminMw, AuctionController.deleteAuction);

auctionRouter.use("/bets", betRouter);

export default auctionRouter;
