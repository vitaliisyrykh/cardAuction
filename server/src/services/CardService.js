import CardsRepository from "../repositories/CardRepository";

class CardService {
  create(body) {
    return CardsRepository.create(body);
  }
  findAll(pagination) {
    return CardsRepository.findAll(pagination);
  }
  findOne(cardId) {
    return CardsRepository.findOne(cardId);
  }
  update(cardId, body) {
    return CardsRepository.update(cardId, body);
  }
  addCardToUser(userId, cardId) {
    return CardsRepository.addCardToUser(userId, cardId);
  }
  userCards(userId) {
    return CardsRepository.userCards(userId);
  }
  delete(cardId) {
    return CardsRepository.delete(cardId);
  }
}

export default new CardService();
