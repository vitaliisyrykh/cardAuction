import bookshelf from "../db";
import UserModel from './UserModel';
import AuctionModel from './AuctionModel'

const Bet = bookshelf.model("Bet", {
  tableName: "bets",
  user() {
    return this.belongsTo(UserModel);
  },
  auction() {
    return this.belongsTo(AuctionModel);
  },
});

export default Bet;
