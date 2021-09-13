import bookshelf from "../db";
//import SetsCards from './SetsCardsModel';
import UserCards from "./UserCardsModel";
import LocationsModel from'./LocationModel';
import EpisodeModel from './EpisodeModel';
import UserModel from './UserModel';
import GenderModel from './GenderModel';


const CardsModel = bookshelf.model("Card", {
  tableName: "cards",
  episode() {
    return this.belongsTo(EpisodeModel);
  },
  locations() {
    return this.hasMany(LocationsModel);
  },
  users() {
    return this.belongsToMany(UserModel).through(UserCards);
  },
  /* sets () {
    return this.belongsToMany('Set').through(SetsCards);
  }, */
  gender() {
    return this.belongsTo(GenderModel);
  },
});

export default CardsModel;
