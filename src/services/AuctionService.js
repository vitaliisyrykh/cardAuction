import AuctionRepository from "../repositories/AuctionRepository";

class AuctionService {
  create(body) {
    return AuctionRepository.create(body);
  }
  findAll(body) {
    return AuctionRepository.findAll(body);
  }
  findOne(auctionId) {
    return AuctionRepository.findOne(auctionId);
  }
  delete(auctionId) {
    return AuctionRepository.delete(auctionId);
  }
}

export default new AuctionService();
