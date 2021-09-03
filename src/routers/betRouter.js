import express from "express";
import BetController from "../controllers/BetController";

const betRouter = express.Router({
  mergeParams: true,
});

betRouter.post("/", BetController.create);
betRouter
  .route("/:betId")
  .get(BetController.findOne)
  .patch(BetController.update);

export default betRouter;
