import RoleRepository from '../repository/RoleRepository';

class RoleService {
  addUserRole (userId) {
    return RoleRepository.addRoleToUser(userId);
  }
}

export default new RoleService();
