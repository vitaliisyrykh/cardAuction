import BetService from '../services/BetService';
import {
  errorCreated,
  created,
  success,
  unsuccess,
} from '../utils/resFuncs';

class BetController {
  async createBet (req, res, next) {
    const { body } = req;
    try {
      const createdBet = await BetService.createBet(body);
      if (createdBet) {
        return created(res, createdBet);
      }
      return errorCreated(res, 'Cannot create bet');
    } catch (error) {
      next(error);
    }
  }
  async findBet (req, res, next) {
    const {
      params: { betId }
    } = req;
    try {
      const bet = await BetService.findBet(betId);
      if (bet) {
        return success(res, bet);
      }
      return unsuccess(res, 'Not found card');
    } catch (error) {
      next(error);
    }
  }
  async updateBet (req, res, next) {
    const {
      params: { betId },
      body
    } = req;
    try {
      const updatedBet = await BetService.updateBet(betId, body);
      if (updatedBet) {
        return success(res, updatedBet);
      }
      return unsuccess(res, 'Cannot updated');
    } catch (error) {
      next(error);
    }
  }
}
export default new BetController();
