import bookshelf from "../db";
import UserCards from "./UserCardsModel";
import UserRoles from "./UserRolesModel";
import UsersChatsModel from "./UserChatsModel";
//import TransactionModel from './TransactionModel';
import RoleModel from './RoleModel';
import CardModel from './CardModel';
import RaitingModel from './RaitingModel';
import RefreshTokenModel from './RefreshTokenModel';
import ChatModel from './ChatModel';
import MessageModel from './MessageModel';

const UserModel = bookshelf.model("User", {
  tableName: "users",
 /*  transactions() {
    return this.hasMany(TransactionModel);
  }, */
  roles() {
    return this.belongsToMany(RoleModel).through(UserRoles);
  },
  cards() {
    return this.belongsToMany(CardModel).through(UserCards);
  },
  raiting() {
    return this.hasOne(RaitingModel);
  },
  refreshTokens() {
    return this.hasMany(RefreshTokenModel, "user_id", "user_id");
  },
  chats() {
    return this.belongsToMany(ChatModel).through(UsersChatsModel);
  },
  messages() {
    return this.hasMany(MessageModel);
  },
});

export default UserModel;
