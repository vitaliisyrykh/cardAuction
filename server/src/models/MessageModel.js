import bookshelf from '../db';
import ChatModel from './ChatModel'; 
import UserModel from './UserModel';

const MessageModel = bookshelf.model('Message', {
  tableName: 'messages',
  chat () {
    return this.belongsTo(ChatModel);
  },
  user(){
    this.belongsTo(UserModel);
  }
});
export default MessageModel;