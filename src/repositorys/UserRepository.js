import UserModel from '../models/UserModel';
import UserErrors from '../errors/UserErrors';

class UserRepository {
  async createUser (body) {
    try {
      const { name, password_hash, email } = body;
      const { attributes } = await new UserModel({
        name: name,
        password_hash: password_hash,
        email: email
      }).save(null, { method: 'insert', autoRefresh: true });
      return { id: attributes.id, name: attributes.name };
    } catch (error) {
      console.log(error, '<<< Create User error');
    }
  }
  async findAll (pageNum, pageSize) {
    try {

      const allUsers = await User.fetchPage({
        page: pageNum,
        pageSize: pageSize,
        withRelated:['raiting']
      }).then(resData => {
        return resData.models.map(m => {
          return { name: m.attributes.name, id: m.attributes.id };
        });
      });
      if (allUsers.length === 0) {
        throw UserErrors('Cannot Find Users');
      }

      return allUsers;
    } catch (error) {
      console.log(err, '<<< Find Users Error ');
    }
  }
  async findOne (attribut, value) {
    try {
      const user = await UserModel.where(attribut, value).fetch({withRelated:['raiting']});
      return user.attributes;
    } catch (error) {
      console.log(error, '<<< Find User Error');
    }
  }
  async userRole (userId) {
    try {
      const roleModel = await new UserModel({ id: userId }).fetch({
        withRelated: ['roles']
      });
      const [roles] = roleModel.relations.roles.models;
      return roles.attributes;
    } catch (error) {
      console.log(error, '<<< User Role Error');
    }
  }
  async userDelete (userId) {
    try {
      const deletedUser = await new UserModel({ id: userId }).destroy();
      return deletedUser ? { isDeletedUser: true } : { isDeletedUser: false };
    } catch (error) {
      console.log(error, '<<< User Delete Error');
    }
  }
  async userUpdate (userId, body) {
    try {
      const updatedUser = await new UserModel({ id: userId }).save(body, {
        method: 'update',
        patch: true
      });
      if (updatedUser) {
        return { isUpdatedUser: true };
      }
      return new UserErrors('Update Error');
    } catch (error) {
      console.log(error, '<<< Update User Error');
    }
  }
}

export default new UserRepository();
