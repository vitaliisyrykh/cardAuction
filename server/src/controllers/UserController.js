import UserService from "../services/UserService";
import RoleService from "../services/RoleService";
import {
  badRequestError,
  successCreated,
  success,
  notFoundError,
  successNoContent,
  forBiddenError,
} from "../utils/resFuncs";

class UserController {
  async create(req, res, next) {
    const { body } = req;
    try {
      const createdUser = await UserService.create(body);
      if (createdUser) {
        return successCreated(res, createdUser);
      }
      return badRequestError(res, "Cannot create user");
    } catch (error) {
      next(error);
    }
  }
  async findAll(req, res, next) {
    try {
      const users = await UserService.findAll();

      if (users) {
        return success(res, users);
      }
      return notFoundError(res, "Not found users");
    } catch (error) {
      next(error);
    }
  }
  async findOne(req, res, next) {
    const {
      params: { userId },
    } = req;
    try {
      const user = await UserService.findOne("id", userId);
      if (user) {
        return success(res, user);
      }

      return notFoundError(res, "Cannot find user");
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    const {
      params: { userId },
      body,
    } = req;
    try {
      const isUpdatedUser = UserService.update(userId, body);
      if (isUpdatedUser) {
        return success(res, isUpdatedUser);
      }
      return forBiddenError(res, "Cannot update user");
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    const {
      params: { userId },
    } = req;
    try {
      const deletedUser = await UserService.delete(userId);
      if (deletedUser) {
        return successNoContent(res, deletedUser);
      }

      return forBiddenError(res, "Cannot delete user");
    } catch (error) {
      next(error);
    }
  }

  async addRole(req, res, next) {
    const {
      body: { userId },
    } = req;
    try {
      const addedRoleToUser = await RoleService.addUserRole(userId);
      if (addedRoleToUser) {
        return success(res);
      }

      return forBiddenError(res, "Cannot add role to user");
    } catch (error) {
      next(error);
    }
  }
}
export default new UserController();
