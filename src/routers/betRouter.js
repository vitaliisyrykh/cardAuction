import express from "express";
import BetController from "../controllers/BetController";
import {betValidate} from '../middlewares/validator'

const betRouter = express.Router({
  mergeParams: true,
});

betRouter.post("/", betValidate, BetController.create);
betRouter
  .route("/:betId")
  .get(BetController.findOne)
  .patch(BetController.update);

export default betRouter;
