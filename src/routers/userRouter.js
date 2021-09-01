import express from 'express';
import checkAdminMW from '../middlewares/checkAdmin.mw';
import UserController from '../controllers/UserController';
import cardsRouter from '../cardsRouter';
import adminRouter from '../adminRouter';
import betRouter from '../betRouter';

const userRouter = express.Router();

userRouter
  .route('/:idUser')
  .get(UserController.findOne)
  .patch(UserController.update)
  .delete(UserController.delete);

userRouter.use('/:idUser/admin', checkAdminMW, adminRouter);
userRouter.use('/:idUser/cards', cardsRouter);
userRouter.use('/:idUser/bets', betRouter);

export default userRouter;
