import bookshelf from "../db";
import CardModel from './CardModel';

const LocationModel = bookshelf.model("Location", {
  tableName: "locations",
  card() {
    return this.belongsTo(CardModel);
  },
});

export default LocationModel;
