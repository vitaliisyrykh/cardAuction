import * as bcrypt from "bcryptjs";
import UserRepository from "../repositories/UserRepository";

class UserService {
  create(body) {
    return UserRepository.create(body);
  }
  findAll() {
    return UserRepository.findAll();
  }
  findOne(attribut, value) {
    const user = UserRepository.findOne(attribut, value);
    return user;
  }
  async passwordCompare(pass1, pass2) {
    try {
      const passwordCompare = await bcrypt.compare(pass1, pass2);
      if (!passwordCompare) {
        throw new Error("Wrong Password");
      } else {
        return passwordCompare;
      }
    } catch (error) {
      console.log(error, "<<< User service password compare error");
    }
  }
  role(userId) {
    return UserRepository.role(userId);
  }
  update(userId, body) {
    return UserRepository.update(userId, body);
  }
  delete(userId) {
    return UserRepository.delete(userId);
  }
}

export default new UserService();
