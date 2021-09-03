import BetService from '../services/BetService';
import {
  badRequestError,
  successCreated,
  success,
  notFoundError,
  forBiddenError
} from '../utils/resFuncs';

class BetController {
  async createBet (req, res, next) {
    const { body } = req;
    try {
      const createdBet = await BetService.createBet(body);
      if (createdBet) {
        return successCreated(res, createdBet);
      }
      return badRequestError(res, 'Cannot create bet');
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
      return notFoundError(res, 'Not found card');
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
      return forBiddenError(res, 'Cannot updated');
    } catch (error) {
      next(error);
    }
  }
}
export default new BetController();
