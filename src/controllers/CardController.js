import CardService from '../services/CardService';
import {
  errorCreated,
  created,
  success,
  unsuccess,
  noContent
} from '../utils/resFuncs';
class CardController {
  async createCard (req, res, next) {
    try {
      const { body } = req;
      const createdCard = await CardService(body);
      if (createdCard) {
        return created(res, createdCard);
      }
      return errorCreated(res, 'Cannot create card');
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
      return unsuccess(res, 'Not found') 
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
      return unsuccess(res, 'Cannot add card to user');
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
      return unsuccess(res, 'Cannot find cards by this user')
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
      return unsuccess(res, 'Cannot update card');
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
      return unsuccess(res, 'Not found');
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
        return noContent(res, deletedCard);
      }
      return unsuccess(res, 'Cannot delete this card')
    } catch (error) {
      next(error);
    }
  }
}

export default new CardController();
