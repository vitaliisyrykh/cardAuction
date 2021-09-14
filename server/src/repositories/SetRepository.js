import SetModel from '../models/SetModel';
import CardsModel from '../models/CardModel';

class SetRepository {
  async createSet (body) {
    try {
      const { name, score } = body;
      const { attributes } = await new SetModel({
        name: name,
        score: score
      }).save(null, { method: 'isert' });
      return { id: attributes.id, name: attributes.name, score: attributes.id };
    } catch (error) {
      return error
    }
  }
  async addCardToSet (setId, cardId) {
    try {
      const card = new CardsModel({ id: cardId });
      const addedCard = await new SetModel({ id: setId }).cards().attach(card);
      return addedCard;
    } catch (error) {
      return error
    }
  }
  async deleteSet (setId) {
    try {
      const deletedSet = await new SetModel({ id: setId }).destroy();
      return deletedSet;
    } catch (error) {
      return error
    }
  }
  async findAllWithCards () {
    try {
      const allSetsWithCards = await new SetModel().fetchAll({
        withRelated: ['cards']
      });
      return allSetsWithCards;
    } catch (error) {
      return error
    }
  }
}

export default new SetRepository();
