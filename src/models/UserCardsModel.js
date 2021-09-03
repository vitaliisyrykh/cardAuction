import bookshelf from "../db";

const UserCards = bookshelf.model("UserCards", {
  tableName: "user_cards",
  user() {
    return this.belongsTo("User");
  },
  card() {
    return this.belongsTo("Card");
  },
  auction() {
    return this.belongsTo("Auction");
  },
});

export default UserCards;
