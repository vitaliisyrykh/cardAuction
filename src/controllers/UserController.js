import createHttpError from 'http-errors';
import UserService from '../services/UserService';
import RoleService from '../services/RoleService';

class UserController {
  async createUser (req, res, next) {
    const { body } = req;
    try {
      const createdUser = await UserService.createUser(body);
      if (createdUser) {
        return res.status(201).send(createdUser);
      }
      return res.send(createHttpError(400, `Can't create usser`));
    } catch (error) {
      next(createHttpError(error));
    }
  }
  async findAll (req, res, next) {
    try {
      const users = await UserService.findAll();
      if (!users) {
        return res.status(201).send(users);
      }
      return res.send(createHttpError(404, 'Users not found'));
    } catch (error) {
      next(createHttpError(404, error));
    }
  }
  async findOne (req, res, next) {
    const {
      params: { userId }
    } = req;
    try {
      const user = await UserService.findOne('id', userId);
      if (user) {
        return res.status(201).send(user);
      }
      return res.send(createHttpError(401, 'Cannot update user'));
    } catch (error) {
      next(error);
    }
  }
  async userUpdate (req, res, next) {
    const {
      params: { userId },
      body
    } = req;
    try {
      const isUpdatedUser = UserService.userUpdate(userId, body);
      if (isUpdatedUser) {
        return res.status(201).next(isUpdatedUser);
      }
      return res.send(createHttpError(401, 'Cannot update user'));
    } catch (error) {
      next(error);
    }
  }
  async userDelete (req, res, next) {
    const {
      params: { userId }
    } = req;
    try {
      const isDeletedUser = await UserService.userDelete(userId);
      if (isDeletedUser) {
        res.status(200).send(isDeletedUser);
      }
      next(createHttpError(400, 'Cannot delete user'));
    } catch (error) {
      next(error);
    }
  }

  async addRoleToUser (req, res, next) {
    const {
      body: { userId }
    } = req;
    try {
      const addedRoleToUser = await RoleService.addUserRole(userId);
      if (addedRoleToUser) {
        return res.status(200);
      }
      return next(createHttpError(400, 'Cannot add role to user'));
    } catch (error) {
      next(error);
    }
  }
}
export default new UserController();
