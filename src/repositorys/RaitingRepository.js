import RaitingModel from '../models/RaitingModel';

class RaitingRepository {
  async addRaiting (userId, body) {
    const { value } = body;
    try {
      const addedRaiting = await new RaitingModel({
        user_id: userId,
        value
      }).save(null, { methods: 'insert' });
      return addedRaiting;
    } catch (error) {
      console.log(error, '<<< Cannot add raiting');
    }
  }
  async updateRaiting (userId, body) {
    const { value } = body;
    try {
      const updatingRaiting = await new RaitingModel({
        user_id: userId,
        value
      }).save(null, { method: 'update', patch: true });
      return updatingRaiting;
    } catch (error) {
      console.log(error, '<<< Cannot update raiting');
    }
  }
}

export default new RaitingRepository();
