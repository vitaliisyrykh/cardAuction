import AuctionRepository from '../repositories/AuctionRepository';

class AuctionService {
  createAuction (body) {
    return AuctionRepository.createAuction(body);
  }
  findAll (body) {
    return AuctionRepository.findAll(body);
  }
  findOne (auctionId) {
    return AuctionRepository.findOne(auctionId);
  }
  deleteAuction (auctionId) {
    return AuctionRepository.deleteAuction(auctionId);
  }
}

export default new AuctionService();