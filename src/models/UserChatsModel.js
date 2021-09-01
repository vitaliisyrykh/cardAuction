import bookshelf from '../db';

const UsersChatsModel = bookshelf.model('UsersChats',{
  tableName:'users_chats',
  users(){
    return this.belongsTo('User')
  },
  chats(){
    return this.belongsTo('Chat')
  }
})

export default UsersChatsModel;