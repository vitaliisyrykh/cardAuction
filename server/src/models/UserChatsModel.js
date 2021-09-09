import bookshelf from "../db";
import UserModel from './UserModel';
import ChatModel from './ChatModel';

const UsersChatsModel = bookshelf.model("UsersChats", {
  tableName: "users_chats",
  users() {
    return this.belongsTo(UserModel);
  },
  chats() {
    return this.belongsTo(ChatModel);
  },
});

export default UsersChatsModel;
