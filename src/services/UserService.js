import * as bcrypt from 'bcryptjs';
import UserRepository from '../../repository/UserRepository';

class UserService {
  createUser (body) {
    return UserRepository.createUser(body);
  }
  findAll () {
    return UserRepository.findAll();
  }
  findOne (attribut, value) {
    const user = UserRepository.findOne(attribut, value);
    return user;
  }
  async passwordCompare (pass1, pass2) {
    try {
      const passwordCompare = await bcrypt.compare(pass1, pass2);
      if (!passwordCompare) {
        throw new Error('Wrong Password');
      } else {
        return passwordCompare;
      }
    } catch (error) {
      console.log(error, '<<< User service password compare error');
    }
  }
  userRole (userId) {
    return UserRepository.userRole(userId);
  }
  userUpdate (userId, body) {
    return UserRepository(userId, body);
  }
  userDelete (userId) {
    return UserRepository.userDelete(userId);
  }
}

export default new UserService();
