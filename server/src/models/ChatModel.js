import bookshelf from '../db';
import UsersChatsModel from './UserChatsModel';
import UserModel from './UserModel.js';
import MessageModel from './MessageModel'

const ChatsModel = bookshelf.model('Chat', {
  tableName: 'chats',
  users () {
    return this.belongsToMany(UserModel).through(UsersChatsModel).withPivot(['id']);
  },
  messages () {
    return this.hasMany(MessageModel);
  }
});

export default ChatsModel;