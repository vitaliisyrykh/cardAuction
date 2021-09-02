import bookshelf from '../db';
import UserCards from './UserCardsModel';
import UserRoles from './UserRolesModel';
import UsersChatsModel from './UserChatsModel';


const UserModel = bookshelf.model('User', {
  tableName: 'users',
  transactions () {
    return this.hasMany('Transaction');
  },
  roles () {
    return this.belongsToMany('Role').through(UserRoles);
  },
  cards(){
    return this.belongsToMany('Card').through(UserCards)
  },
  raiting () {
    return this.hasOne('Raiting');
  },
  refreshTokens () {
    return this.hasMany('RefreshToken', 'user_id', 'user_id');
  },
  chats(){
    return belongsToMany('Chats').through(UsersChatsModel)
  },
  messages(){
    return this.hasMany('Message')
  }
});

export default UserModel;