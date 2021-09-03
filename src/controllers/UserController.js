import createHttpError from "http-errors";
import UserService from "../services/UserService";
import RoleService from "../services/RoleService";
import constants from "../constants";

class UserController {
  async create(req, res, next) {
    const { body } = req;
    try {
      const createdUser = await UserService.create(body);
      if (createdUser) {
        const payload = {
          data: [createdUser],
          message: "",
          status: constants.statusCreated,
        };
        return res.send(payload);
      }
      return res.send(
        createHttpError(constants.statusBadRequest, `Can't create usser`)
      );
    } catch (error) {
      next(createHttpError(error));
    }
  }
  async findAll(req, res, next) {
    try {
      const users = await UserService.findAll();
      if (users) {
        return res.status(201).send(users);
      }
      return res.send(createHttpError(404, "Users not found"));
    } catch (error) {
      next(createHttpError(404, error));
    }
  }
  async findOne(req, res, next) {
    const {
      params: { userId },
    } = req;
    try {
      const user = await UserService.findOne("id", userId);
      if (user) {
        return res.status(201).send(user);
      }
      return res.send(createHttpError(401, "Cannot find user"));
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
      const updatedUser = await UserService.update(userId, body);
      
      if (updatedUser) {
        return res.status(201).send(updatedUser);
      }
      return res.send(createHttpError(401, "Cannot update user"));
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    const {
      params: { userId },
    } = req;
    try {
      const isDeletedUser = await UserService.delete(userId);
      if (isDeletedUser) {
        res.status(200).send(isDeletedUser);
      }
      next(createHttpError(400, "Cannot delete user"));
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
        return res.status(200);
      }
      return next(createHttpError(400, "Cannot add role to user"));
    } catch (error) {
      next(error);
    }
  }
}
export default new UserController();
