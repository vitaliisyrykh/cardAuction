import Express from 'express';
import AuctionController from '../../controllers/AuctionController';
import checkAdminMw from '../../middlewares/checkAdmin.mw';

const auctionRoute = Express.Router({
  mergeParams:true
});

auctionRoute
  .route('/')
  .post(checkAdminMw, AuctionController.createAuction)
  .get(AuctionController.findAllAuctions);

auctionRoute
  .route('/:auctionId')
  .get(AuctionController.findAuction)
  .delete(checkAdminMw, AuctionController.deleteAuction);

  export default auctionRoute;
