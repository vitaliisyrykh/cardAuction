import { verifyAccesToken } from "../services/JWTservice";
import socketError from "../errors/socketError";

const socketAuth = (socket, next) => {
  if (socket.handshake.auth.token) {
    if (verifyAccesToken(socket.handshake.auth.token)) {
      return next();
    }
    return socketError("invalid token");
  }
  return socketError("Bad socket request");
};

export default socketAuth;
