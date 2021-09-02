import createHttpError from 'http-errors';
import AuctionService from '../services/AuctionService';

class AuctionController {
  async create (req, res, next) {
    const { body } = req;
    try {
      const createdAuction = await AuctionService.createAuction(body);
      if (createdAuction) {
        return res.status(201).send(createdAuction);
      }
      return next(createHttpError(400, 'Cannot create Auction'));
    } catch (error) {
      next(error);
    }
  }
  async findAll (req, res, next) {
    const { body } = req;
    try {
      const auctions = await AuctionService.findAll(body);
      if (auctions) {
        return res.status(200).send(auctions);
      }
      return next(createHttpError(400, 'Cannot find auctions'));
    } catch (error) {
      next(error);
    }
  }
  async findOne (req, res, next) {
    const {
      params: { auctionId }
    } = req;
    try {
      const auction = await AuctionService.findOne(auctionId);
      if (auction) {
        return res.status(200).send(auction);
      }
      return next(createHttpError(400, 'Cannot find auction'));
    } catch (error) {
      next(error);
    }
  }
  async delete (req, res, next) {
    const {
      params: { auctionId }
    } = req;
    try {
      const deletedAuction = await AuctionService.deleteAuction(auctionId);
      if (deletedAuction) {
        return res.status(200).send(deletedAuction);
      }
      return next(createHttpError(400, 'Cannot delete auction'));
    } catch (error) {
      next(error);
    }
  }
}

export default new AuctionController();
