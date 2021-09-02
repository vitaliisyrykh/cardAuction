import CardsRepository from '../repositories/CardsRepository';

class CardService {
  createCard (body) {
    return CardsRepository.createCard(body);
  }
  findAll () {
    return CardsRepository.findAllCards();
  }
  findOne(cardId){
    return CardsRepository.findOne(cardId);
  }
  updateCard (cardId, body) {
    return CardsRepository.updateCard(cardId, body);
  }
  addCardToUser (userId, cardId) {
    return CardsRepository.addCardToUser(userId, cardId);
  }
  userCards (userId) {
    return CardsRepository.userCards(userId);
  }
  delete(cardId){
    return CardsRepository.delete(cardId)
  }
}

export default new CardService();
