import express from 'express';
import UserController from '../../controllers/UserController';
import auctionRoute from '../auctionRouter';
import cardsRouter from '../cardsRouter';


const adminRouter = express.Router({
  mergeParams: true
});
adminRouter
  .route('/users/')
  .get(UserController.findAll)
  .patch(UserController.userUpdate)
  .delete(userRouter.delete);
adminRouter.route('/user-role/').patch(UserController.addRoleToUser);

adminRouter.use('/cards',cardsRouter);
adminRouter.use('/auctions', auctionRoute);

export default adminRouter;
