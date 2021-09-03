import CardService from '../services/CardService';
import {
  badRequestError,
  successCreated,
  success,
  notFoundError,
  successNoContent,
  forBiddenError
} from '../utils/resFuncs';
class CardController {
  async createCard (req, res, next) {
    try {
      const { body } = req;
      const createdCard = await CardService(body);
      if (createdCard) {
        return successCreated(res, createdCard);
      }
      return badRequestError(res, 'Cannot create card');
    } catch (error) {
      next(error);
    }
  }

  async findAllCards (req, res, next) {
    try {
      const cards = await CardService.findAll();
      if (allCards.length !== 0) {
        return success(res, cards)
      }
      return notFoundError(res, 'Not found') 
    } catch (error) {
      next(error);
    }
  }

  async addCardToUser (req, res, next) {
    try {
      const {
        params: { userId, cardId }
      } = req;
      const addedCardToUser = CardService.addCardToUser(userId, cardId);
      if (addedCardToUser) {
        return success(res, addedCardToUser);
      }
      return notFoundError(res, 'Cannot add card to user');
    } catch (error) {
      next(error);
    }
  }

  async userCards (req, res, next) {
    try {
      const {
        params: { userId }
      } = req;
      const userCards = await CardService.userCards(userId);
      if (userCards) {
        return success(res, userCards)
      }
      return notFoundError(res, 'Cannot find cards by this user')
    } catch (error) {
      next(error);
    }
  }
  async updateCard (req, res, next) {
    try {
      const {
        params: { cardId },
        body
      } = req;
      const updatedCard = await CardService.updateCard(cardId, body);
      if (updatedCard) {
        return success(res, updatedCard);
      }
      return forBiddenError(res, 'Cannot update card');
    } catch (error) {
      next(error);
    }
  }

  async findOneCard (req, res, next) {
    try {
      const {
        params: { cardId }
      } = req;
      const card = await CardService.findOne(cardId);
      if (card) {
        return success(res, card);
      }
      return notFoundError(res, 'Not found');
    } catch (error) {
      next(error);
    }
  }
  async deleteCard (req, res, next) {
    try {
      const {
        params: { cardId }
      } = req;
      const deletedCard = await CardService.delete(cardId);
      if (deletedCard) {
        return successNoContent(res, deletedCard);
      }
      return forBiddenError(res, 'Cannot delete this card')
    } catch (error) {
      next(error);
    }
  }
}

export default new CardController();
