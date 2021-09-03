import AplicationError from "./ApplicationError";

class UserErrors extends AplicationError {
  constructor(message) {
    super(message || "User not found", 404);
  }
}
export default UserErrors;
