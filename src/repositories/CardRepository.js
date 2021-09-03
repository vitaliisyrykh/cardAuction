import CardsModel from "../models/CardModel";
import CardModel from "../models/CardModel";
import UserModel from "../models/UserModel";

class CardRepository {
  async create(body) {
    try {
      const { name, type, origin, image, url, episodeId } = body;
      const { attributes } = await new CardModel({
        name: name,
        type: type,
        origin: origin,
        image: image,
        url: url,
        episode_id: episodeId,
        
      }).save(null, { method: "insert", autoRefresh: true });
      return {
        name: attributes.name,
        type: attributes.type,
        origin: attributes.origin,
        image: attributes.image,
        url: attributes.url,
        episode: attributes.episode,
        id: attributes.id,
      };
    } catch (error) {
      console.log(error, "<<< Create Card Error");
    }
  }
  async findAll(pageNum, pageSize) {
    try {
      const allCards = await new CardModel()
        .fetchPage({
          page: pageNum,
          pageSize,
          withRelated: ["locations", "episodes"],
        });
      return allCards
    } catch (error) {
      console.log(error, "<<< Cannot find all cards");
    }
  }

  async userCards(userId) {
    try {
      const userWithCards = await new User({ id: userId }).fetch({
        withRelated: ["cards"],
      });
      const [cards] = userWithCards.relations.cards.models;
      return cards.attributes;
    } catch (error) {
      console.log(error, "<<< Cannot find cards with user");
    }
  }
  async addCardToUser(userId, cardId) {
    try {
      const card = new CardModel({ id: cardId });
      const cardAdded = await new UserModel({ id: userId }).cards().atach(card);
      return cardAdded;
    } catch (error) {
      console.log(error, "<<< Cannot Add Card To User");
    }
  }
  async update(cardId, body) {
    try {
      const updatedCard = await new CardsModel({ id: cardId }).save(body, {
        method: "update",
        patch: true,
      });
      return updatedCard;
    } catch (error) {
      console.log(error, "<<< Cannot update card");
    }
  }
  async findOne(cardId) {
    try {
      const card = await new CardModel({ id: cardId }).fetch({
        withRelated: ["locations", "episodes"],
      });
      return card;
    } catch (error) {
      console.log(error, "<<< Cannot find card");
    }
  }
  async delete(cardId) {
    try {
      const deletedCard = await CardModel({ id: cardId }).destroy();
      return deletedCard;
    } catch (error) {
      console.log(error, "<<< Cannot delete card");
    }
  }
}

export default new CardRepository();
