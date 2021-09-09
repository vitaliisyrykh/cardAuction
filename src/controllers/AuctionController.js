import AuctionService from "../services/AuctionService";
import {
  badRequestError,
  successCreated,
  success,
  notFoundError,
  successNoContent,
  forBiddenError,
} from "../utils/resFuncs";

class AuctionController {
  async create(req, res, next) {
    const { body } = req;
    try {
      const createdAuction = await AuctionService.createAuction(body);
      if (createdAuction) {
        return successCreated(res, createdAuction);
      }
      return badRequestError(res, "Cannot create auction");
    } catch (error) {
      next(error);
    }
  }
  async findAll(req, res, next) {
    const { body } = req;
    try {
      const auctions = await AuctionService.findAll(body);
      if (auctions) {
        return success(res, auctions);
      }
      return notFoundError(res, "Not found");
    } catch (error) {
      next(error);
    }
  }
  async findOne(req, res, next) {
    const {
      params: { auctionId },
    } = req;
    try {
      const auction = await AuctionService.findOne(auctionId);
      if (auction) {
        return success(res, auction);
      }
      return notFoundError(res, "Not found");
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    const {
      params: { auctionId },
    } = req;
    try {
      const deletedAuction = await AuctionService.deleteAuction(auctionId);
      if (deletedAuction) {
        return successNoContent(res, deletedAuction);
      }
      return forBiddenError(res, "Cannot delete");
    } catch (error) {
      next(error);
    }
  }
}

export default new AuctionController();
