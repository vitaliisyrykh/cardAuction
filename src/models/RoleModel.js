import bookshelf from '../db';
import UserRoles from './UserRolesModel';

const Role = bookshelf.model('Role', {
  tableName: 'roles',
   users () {
    return this.belongsToMany('User').through(UserRoles);
  } 
});

export default Role;
