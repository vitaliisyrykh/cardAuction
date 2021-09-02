import AuctionService from '../services/AuctionService';
import {
  errorCreated,
  created,
  success,
  unsuccess,
  noContent
} from '../utils/resFuncs';

class AuctionController {
  async createAuction (req, res, next) {
    const { body } = req;
    try {
      const createdAuction = await AuctionService.createAuction(body);
      if (createdAuction) {
        return created(res, createdAuction);
      }
      return errorCreated(res, 'Cannot create auction');
    } catch (error) {
      next(error);
    }
  }
  async findAllAuctions (req, res, next) {
    const { body } = req;
    try {
      const auctions = await AuctionService.findAll(body);
      if (auctions) {
        return success(res, auctions);
      }
      return unsuccess(res, 'Not found');
    } catch (error) {
      next(error);
    }
  }
  async findAuction (req, res, next) {
    const {
      params: { auctionId }
    } = req;
    try {
      const auction = await AuctionService.findOne(auctionId);
      if (auction) {
        return success(res, auction);
      }
      return unsuccess(res, 'Not found');
    } catch (error) {
      next(error);
    }
  }
  async deleteAuction (req, res, next) {
    const {
      params: { auctionId }
    } = req;
    try {
      const deletedAuction = await AuctionService.deleteAuction(auctionId);
      if (deletedAuction) {
        return noContent(res, deletedAuction);
      }
      return unsuccess(res, 'Cannot delete');
    } catch (error) {
      next(error);
    }
  }
}

export default new AuctionController();
