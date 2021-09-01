import RoleRepository from '../repository/RoleRepository';

class RoleService {
  addRole (userId) {
    return RoleRepository.addRoleToUser(userId);
  }
}

export default new RoleService();
