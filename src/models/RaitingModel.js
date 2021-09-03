import bookshelf from "../db";
import UserModel from './UserModel';

const Raiting = bookshelf.model("Raiting", {
  tableName: "raitings",
  user() {
    return this.belongsTo(UserModel);
  },
});

export default Raiting;
