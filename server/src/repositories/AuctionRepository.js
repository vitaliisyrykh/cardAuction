import AuctionModel from "../models/AuctionModel";
import ServerError from "../errors/ServerError";

class AuctionRepository {
  async create(body) {
    const {
      userId,
      userCardsId,
      minBet,
      maxBet,
      minStep,
      maxTimeBidding,
      minStepAddTime,
    } = body;
    try {
      const createdAuction = await new AuctionModel({
        user_id: userId,
        user_cards_id: userCardsId,
        min_bet: minBet,
        max_bet: maxBet,
        min_step: minStep,
        max_time_bidding: maxTimeBidding,
        min_step_add_time: minStepAddTime,
      }).save(null, { method: "isert" });
      return createdAuction;
    } catch (error) {
      return error;
    }
  }
  async findAll(body) {
    const { pageNum, pageSize } = body;
    try {
      const findAll = await AuctionModel.fetchPage({
        page: pageNum,
        pageSize: pageSize,
      }).then((resData) => {
        return resData.map((a) => {
          return {
            auctionId: a.attributes.id,
            userId: a.attributes.user_cards_id,
            minBet: a.attributes.min_bet,
            maxBet: a.attributes.max_bet,
            minStep: a.attributes.min_step,
            maxTimeBidding: a.attributes.max_time_bidding,
            minStepAddTime: a.attributes.min_step_add_time,
          };
        });
      });
      if (findAll.length === 0) {
        return new ServerError("Cannot find auctions");
      }
      return findAll;
    } catch (error) {
      return error;
    }
  }
  async findOne(auctionId) {
    try {
      const auction = await AuctionModel.where("id", auctionId).fetch();
      return {
        auctionId: auction.attributes.id,
        userId: auction.attributes.user_cards_id,
        minBet: auction.attributes.min_bet,
        maxBet: auction.attributes.max_bet,
        minStep: auction.attributes.min_step,
        maxTimeBidding: auction.attributes.max_time_bidding,
        minStepAddTime: auction.attributes.min_step_add_time,
      };
    } catch (error) {
      return error;
    }
  }
  async delete(auctionId) {
    try {
      const deltedAuctionId = await AuctionModel({ id: auctionId }).destroy();
      return deltedAuctionId;
    } catch (error) {
      return error;
    }
  }
}

export default new AuctionRepository();
