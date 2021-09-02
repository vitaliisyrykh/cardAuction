import * as createHttpError from 'http-errors';
import CardService from '../services/CardService';

class CardController {
  async createCard (req, res, next) {
    try {
      const { body } = req;
      const createdCard = await CardService(body);
      if (createdCard) {
        return res.status(201).send(createdCard);
      }
      next(createHttpError(400, 'Cannot create card'));
    } catch (error) {
      next(error);
    }
  }

  async findAllCards (req, res, next) {
    try {
      const allCards = await CardService.findAll();
      if (allCards.length !== 0) {
        return res.status(200).send(allCards);
      }
      next(createHttpError(400, 'Cannot find cards'));
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
        return res.status(201).send(addedCardToUser);
      }
      return next(createHttpError(400, 'Cannot add card to user'));
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
        return res.status(200).send(userCards);
      }
      return next(createHttpError(400, 'Cannot find user cards'));
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
        return res.status(200).send(updatedCard);
      }
      return next(createHttpError(400, ' Cannot updaete card'));
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
        return res.status(200).send(card);
      }
      return next(createHttpError(404, 'Cannot find card'));
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
        return res.status(200).send(deletedCard);
      }
      return next(createHttpError(400, 'Cannot delete card'));
    } catch (error) {
      next(error);
    }
  }
}

export default new CardController();
