import {verifyAccesToken} from '../services/JWTservice';
 
 const socketAuth = (socket,next) => {
  if(verifyAccesToken(socket.handshake.auth.token)){
    next()
  }
 
}

export default socketAuth

