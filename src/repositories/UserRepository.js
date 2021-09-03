import UserModel from "../models/UserModel";
import UserErrors from "../errors/UserError";

class UserRepository {
  async create(body) {
    try {
      const { name, password_hash, email } = body;
      const { attributes } = await new UserModel({
        name: name,
        password_hash: password_hash,
        email: email,
      }).save(null, { method: "insert", autoRefresh: true });
      return { id: attributes.id, name: attributes.name };
    } catch (error) {
      console.log(error, "<<< Create User error");
    }
  }
  async findAll(pageNum, pageSize) {
    try {
      const allUsers = await  UserModel.fetchPage({
        page: 1,
        pageSize: 5,
        //withRelated: ["raiting"],
      }).then((resData) => {
        return resData.models.map((m) => {
          return { name: m.attributes.name, id: m.attributes.id };
        });
      });
      if (allUsers.length === 0) {
        throw UserErrors("Cannot Find Users");
      }

      return allUsers;
    } catch (error) {
      console.log(error, "<<< Find Users Error ");
    }
  }
  async findOne(attribut, value) {
    try {
      const user = await UserModel.where(attribut, value).fetch({
        //withRelated: ["raiting"],
      });
      console.log(user);
      return user.attributes;
      
    } catch (error) {
      console.log(error, "<<< Find User Error");
    }
  }
  async role(userId) {
    try {
      const roleModel = await new UserModel({ id: userId }).fetch({
        withRelated: ["roles"],
      });
      const [roles] = roleModel.relations.roles.models;
      return roles.attributes;
    } catch (error) {
      console.log(error, "<<< User Role Error");
    }
  }
  async delete(userId) {
    try {
      const deletedUser = await new UserModel({ id: userId }).destroy();
      return deletedUser ? { isDeletedUser: true } : { isDeletedUser: false };
    } catch (error) {
      console.log(error, "<<< User Delete Error");
    }
  }
  async update(userId, body) {
    try {
      const updatedUser = await new UserModel({ id: userId }).save(body, {
        method: "update",
        patch: true,
      });
      const{id,name}=updatedUser.attributes
      return {id,name}
      
    } catch (error) {
      console.log(error, "<<< Update User Error");
    }
  }
}

export default new UserRepository();
