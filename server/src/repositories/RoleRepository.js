import Role from "../models/RoleModel";
import UserNodel from "../models/UserModel";

class RoleRepository {
  async addRoleToUser(userId) {
    try {
      const admin = new Role({ id: 1, name: "admin" });
      const roleAdded = await new UserNodel({ id: userId })
        .roles()
        .attach(admin);
      return roleAdded;
    } catch (error) {
      return error;
    }
  }
}
export default new RoleRepository();
