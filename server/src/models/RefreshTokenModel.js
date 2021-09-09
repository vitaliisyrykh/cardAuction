import bookshelf from "../db";
import UserModel from './UserModel';

const RefreshToken = bookshelf.model("RefreshToken", {
  tableName: "refresh_tokens",
  user() {
    return this.belongsTo(UserModel, "user_id", "user_id");
  },
});

export default RefreshToken;
