import bookshelf from "../db";
import UserModel from './UserModel';
import UserRoles from "./UserRolesModel";

const Role = bookshelf.model("Role", {
  tableName: "roles",
  users() {
    return this.belongsToMany(UserModel).through(UserRoles);
  },
});

export default Role;
