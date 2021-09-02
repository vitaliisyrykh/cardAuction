import LocationModel from '../models/LocationModel';

class LoactionRepository {
  async addLocation (body) {
    try {
      const { cardId, name, type, dimension, residents, url } = body;
      const addedLocation = await new LocationModel({
        card_id: cardId,
        name,
        type,
        dimension,
        residents,
        url
      });
      return addedLocation;
    } catch (error) {
      console.log(error, '<<< Cannot add location');
    }
  }
}

export default new LoactionRepository();
