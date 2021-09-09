import * as bcrypt from "bcryptjs";
import CONSTANTS from "../constants";

export default async (req, res, next) => {
  try {
    const {
      body: { password },
    } = req;
    const salt = await bcrypt.genSalt(Number(CONSTANTS.SALT_ROUNDS));
    req.passHash = await bcrypt.hash(password, salt);
    next();
  } catch (error) {
    next(error);
  }
};
