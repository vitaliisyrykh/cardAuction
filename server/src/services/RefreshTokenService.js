import RefreshTokenRepository from "../repositories/RefreshTokenRepository";

class RefreshTokenService {
  add(userId, value) {
    return RefreshTokenRepository.add(userId, value);
  }
  countTokens(userId) {
    return RefreshTokenRepository.countTokens(userId);
  }
  getRefreshTokenId(userId) {
    return RefreshTokenRepository.getRefreshTokenId(userId);
  }
  update(userId, tokenId, value) {
    return RefreshTokenRepository.update(userId, tokenId, value);
  }
}

export default new RefreshTokenService();
