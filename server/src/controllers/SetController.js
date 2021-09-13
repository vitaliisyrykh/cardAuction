import createHttpError from 'http-errors';
import SetService from '../services/SetService';

class SetController {
  async createSet (req, res, next) {
    try {
      const { body } = req;
      const createdSet = await SetService.createdSet(body);
      if (createdSet) {
        return res, staus(201).send(createdSet);
      }
      return next(createHttpError(400, 'Cannot create set'));
    } catch (error) {
      next(error);
    }
  }
  async addCardToSet (req, res, next) {
    try {
      const {
        params: { setId },
        body: { cardId }
      } = req;
      const addedCardToSet = await SetService.addCardToSet(setId, cardId);
      if (addedCardToSet) {
        return res.staus(200).send(addedCardToSet);
      }
      return next(createHttpError(400, 'Cannot add card to set'));
    } catch (error) {
      next(error);
    }
  }
  async deleteSet (req, res, next) {
    try {
      const {
        params: { setId }
      } = req;
      const deletedSet = await SetService.deleteSet(setId);
      if (deletedSet) {
        return res.staus(200).send(deletedSet);
      }
      return next(createHttpError(400, 'Cannot delete set '));
    } catch (error) {
      next(error);
    }
  }
  async findAllWithCards (req, res, next) {
    try {
      const allSetsWithCards = await SetService.findAllWithCards();
      if (allSetsWithCards) {
        return res.staus(200).send(allSetsWithCards);
      }
      return next(createHttpError(400, 'Cannot get all sets'));
    } catch (error) {
      next(error);
    }
  }
}
export default new SetController();
