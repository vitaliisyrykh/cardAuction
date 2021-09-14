import bookshelf from "../db";
import UserModel from './UserModel';
import RoleModel from './RoleModel';

const UserRoles = bookshelf.model("UserRoles", {
  tableName: "user_roles",
  user() {
    return this.belongsTo(UserModel);
  },
  role() {
    return this.belongsTo(RoleModel);
  },
});
export default UserRoles;
