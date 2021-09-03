import express from "express";
import CardController from "../controllers/CardController";
import checkAdminMw from "../middlewares/checkAdmin";

const cardsRouter = express.Router({
  mergeParams: true,
});

cardsRouter
  .route("/")
  .post(checkAdminMw, CardController.create)
  .get(CardController.findAll);
cardsRouter
  .route("/:cardId")
  .get(CardController.findOne)
  .patch(checkAdminMw, CardController.update)
  .delete(checkAdminMw, CardController.delete);

cardsRouter.route("/user-cards/").get(CardController.userCards);

export default cardsRouter;
