import LocationModel from "../models/LocationModel";

class LoactionRepository {
  async add(body) {
    try {
      const { cardId, name, type, dimension, residents, url } = body;
      const addedLocation = await new LocationModel({
        card_id: cardId,
        name,
        type,
        dimension,
        residents,
        url,
      });
      return addedLocation;
    } catch (error) {
      return error;
    }
  }
}

export default new LoactionRepository();
