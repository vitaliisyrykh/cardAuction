import BetRepository from '../repositorys/BetRepository';

class BetService {
  createBet (body) {
    return BetRepository.createBet(body);
  }
  findBet (betId) {
    return BetRepository.findBet(betId);
  }
  updateBet (betId, body) {
    return BetRepository.updateBet(betId, body);
  }
}
export default new BetService();
