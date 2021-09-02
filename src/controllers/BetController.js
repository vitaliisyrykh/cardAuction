import createHttpError from 'http-errors';
import BetService from '../services/BetService';

class BetController {
  async create (req, res, next) {
    const { body } = req;
    try {
      const createdBet = await BetService.createBet(body);
      if (createdBet) {
        return res.status(201).send(createdBet);
      }
      return next(createHttpError(400, 'Cannot create bet'));
    } catch (error) {
      next(error);
    }
  }
  async findOne (req, res, next) {
    const {
      params: { betId }
    } = req;
    try {
      const bet = await BetService.findBet(betId);
      if (bet) {
        return res.status(200).send(bet);
      }
      return next(createHttpError(400, 'Cannot find bet'));
    } catch (error) {
      next(error);
    }
  }
  async update (req, res, next) {
    const {
      params: { betId },
      body
    } = req;
    try {
      const updatedBet = await BetService.updateBet(betId, body);
      if (updatedBet) {
        return res.status(200).send(updatedBet);
      }
      return next(createHttpError(400, 'Cannot update bet'));
    } catch (error) {
      next(error);
    }
  }
}
export default new BetController();
