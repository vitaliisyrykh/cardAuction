import bookshelf from "../db";
import UserModel from './UserModel';
import BetModel from './BetModel';
import UserCardsModel from './UserCardsModel';

const Auction = bookshelf.model("Auction", {
  tableName: "auctions",
  user() {
    return this.belongsTo(UserModel);
  },
  bets() {
    return this.hasMany(BetModel);
  },
  user_cards() {
    return this.belongsTo(UserCardsModel);
  },
});

export default Auction;
