import bookshelf from "../db";
import CardModel from './CardModel';

const EpisodeModel = bookshelf.model("Episode", {
  tableName: "episodes",
  card() {
    return this.belongsTo(CardModel);
  },
});

export default EpisodeModel;
