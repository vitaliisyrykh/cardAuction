import CONSTANTS from "../constants";
import { createTokenPair } from "./JWTservice";
import RefreshTokenService from "./RefreshTokenService";
import UserService from "./UserService";
import UserErrors from "../errors/UserError";

class AuthService {
  getTokenPayload(user) {
    return { userId: user.id, name: user.name, role: user.role };
  }
  async createSession(user) {
    const tokenPair = await createTokenPair(this.getTokenPayload(user));
    if (
      (await RefreshTokenService.countTokens(user.id)) <=
      CONSTANTS.MAX_DEVICES_AMOUNT
    ) {
      await RefreshTokenService.addRefreshToken(user.id, {
        value: tokenPair.refresh,
      });
    } else {
      const tokenId = RefreshTokenService.getRefreshToken(user.id);
      RefreshTokenService.updateRefreshToken(
        userId,
        tokenId,
        tokenPair.refresh
      );
    }
    return {
      user: this.getTokenPayload(user),
      tokenPair,
    };
  }

  async refreshSession(userId, tokenId) {
    const user = await UserService.findOne(userId);
    const tokenPair = await createTokenPair(this.getTokenPayload(user));
    await RefreshTokenService.updateRefreshToken(
      userId,
      tokenId,
      tokenPair.refresh
    );
    return {
      user: user,
      tokenPair,
    };
  }
  async singUp(body, passHash) {
    try {
      const createdUser = await UserService.createUser(
        Object.assign(body, { password_hash: passHash })
      );
      if (createdUser) {
        const data = await this.createSession(createdUser);
        return data;
      }
      throw new UserErrors("Cannot create user");
    } catch (error) {
      console.log(error, "<<< Sign In Error");
    }
  }
  async signIn(body) {
    try {
      const { email, password } = body;
      const user = await UserService.findOne("email", email);
      if (user) {
        const userRole = await UserService.userRole(user.id);
        if (
          user &&
          (await UserService.passwordCompare(password, user.password_hash))
        ) {
          const data = await this.createSession(
            Object.assign(user, { role: userRole })
          );
          return data;
        }
        return new UserErrors("Wrong password");
      }
      throw new UserErrors("Cannot find user by email");
    } catch (error) {
      console.log(error, "<<< Sign In Error");
    }
  }
}
export default new AuthService();
