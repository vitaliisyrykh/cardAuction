import express from 'express';
import CardController from '../../controllers/CardController';
import checkAdminMw from '../../middlewares/checkAdmin.mw';

const cardsRouter = express.Router({
  mergeParams: true
});

cardsRouter
  .route('/')
  .post(checkAdminMw,CardController.createCard)
  .get(CardController.findAllCards);
cardsRouter
  .route('/:cardId')
  .get(CardController.findOneCard)
  .patch(checkAdminMw, CardController.updateCard)
  .delete(checkAdminMw, CardController.deleteCard);

cardsRouter.route('/user-cards/').get(CardController.userCards);

export default cardsRouter;
