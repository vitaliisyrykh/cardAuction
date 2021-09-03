import bookshelf from "../db";

const EpisodeModel = bookshelf.model("Episode", {
  tablename: "episodes",
  card() {
    return this.belongsTo("Card");
  },
});

export default EpisodeModel;
