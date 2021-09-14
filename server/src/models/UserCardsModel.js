import bookshelf from "../db";
import UserModel from './UserModel';
import CardModel from './CardModel';
import AuctionModel from './AuctionModel';

const UserCards = bookshelf.model("UserCards", {
  tableName: "user_cards",
  user() {
    return this.belongsTo(UserModel);
  },
  card() {
    return this.belongsTo(CardModel);
  },
  auction() {
    return this.belongsTo(AuctionModel);
  },
});

export default UserCards;
