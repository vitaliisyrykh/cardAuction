import BetRepository from '../repositories/BetRepository';

class BetService {
  create (body) {
    return BetRepository.create(body);
  }
  findOne (betId) {
    return BetRepository.findOne(betId);
  }
  update (betId, body) {
    return BetRepository.update(betId, body);
  }
}
export default new BetService();
