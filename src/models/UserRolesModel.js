import bookshelf from "../db";

const UserRoles = bookshelf.model("UserRoles", {
  tableName: "user_roles",
  user() {
    return this.belongsTo("User");
  },
  role() {
    return this.belongsTo("Role");
  },
});
export default UserRoles;
