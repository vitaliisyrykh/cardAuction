import BetModel from '../models/BetModel';

class BetRepository {
  async createBet (body) {
    const { userId, auctionId, value } = body;
    try {
      const createdBet = await new BetModel({
        user_id: userId,
        auction_id: auctionId,
        value
      }).save(null, { methods: 'insert' });
      return {
        id: createdBet.attributes.id,
        value: createdBet.attributes.value
      };
    } catch (error) {
      return error;
    }
  }
  async findBet (betId){
    try {
      const bet = await BetModel.where('id', betId);
      return bet.attributes
    } catch (error) {
      return error;
    }
  }
  async updateBet(betId,body){
    const{value}=body;
    try {
      const updatedBet = await new BetModel({id:betId}).save({value}, {
        method: 'update',
        patch: true
      });
      return updatedBet;
    } catch (error) {
      return error
    }
  }
}
export default new BetRepository()
