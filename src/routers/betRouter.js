import express from 'express';
import BetController from '../controllers/BetController';

const betRouter = express.Router({
  mergeParams: true
});

betRouter.post('/', BetController.createBet);
betRouter
  .route('/:betId')
  .get(BetController.findBet)
  .patch(BetController.updateBet);

export default betRouter;
