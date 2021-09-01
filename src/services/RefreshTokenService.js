import RefreshTokenRepository from '../../repository/RefreshTokenRepository';

class RefreshTokenService {
  addRefreshToken (userId, value) {
    return RefreshTokenRepository.addRefreshToken(userId, value);
  }
  countTokens (userId) {
    return RefreshTokenRepository.countTokens(userId);
  }
  getRefreshTokenId (userId) {
    return RefreshTokenRepository.getRefreshTokenId(userId);
  }
  updateRefreshToken (userId, tokenId, value) {
    return RefreshTokenRepository.updateRefreshToken(userId, tokenId, value);
  }
};

export default new RefreshTokenService;
