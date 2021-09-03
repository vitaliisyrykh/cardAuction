import bookshelf from "../db";

const Auction = bookshelf.model("Auction", {
  tableName: "auctions",
  user() {
    return this.belongsTo("User");
  },
  bets() {
    return this.hasMany("Bet");
  },
  user_cards() {
    return this.belongsTo("UserCards");
  },
});

export default Auction;
