import RefreshToken from "../models/RefreshTokenModel";

class RefreshTokenRepository {
  async add(userId, { value }) {
    try {
      const { attributes } = await new RefreshToken({
        user_id: userId,
        value: value,
      }).save();
      return attributes;
    } catch (error) {
      return error;
    }
  }
  async countTokens(userId) {
    try {
      const count = await new RefreshToken()
        .where("user_id", userId)
        .count("value");

      return count;
    } catch (error) {
      return error;
    }
  }
  async getRefreshTokenId(userId) {
    try {
      const oldRefreshToken = await new RefreshToken({ user_id: userId })
        .orderBy("updated_at", "ASC")
        .fetch();

      return oldRefreshToken.id;
    } catch (error) {
      return error;
    }
  }
  async update(userId, tokenId, value) {
    try {
      const updatedRefreshToken = await new RefreshToken()
        .where({ user_id: userId, id: tokenId })
        .save({ value: value }, { patch: true });

      return updatedRefreshToken.value;
    } catch (error) {
      return error;
    }
  }
  async findRefreshTokenUserId(tokeValue) {
    try {
      const userId = await new RefreshToken()
        .where({ value: tokeValue })
        .fetch();
      return userId.attributes.id;
    } catch (error) {
      return error;
    }
  }
}

export default new RefreshTokenRepository();
