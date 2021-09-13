import { Server } from "socket.io";
import socketAuth from "../middlewares/socket";
import constants from "../constants";

const io = new Server();
const chat = io.of("/api/chat");

const chatConnect = (socket) => {
  console.log(socket.id, " << connect");
  socket.join(constants.socketRoomChat);
  socket.on(constants.socketEventDisconnect, (data) => {
    console.log(socket.id, " << disconnect");
  });
};

export const emitSocketMessage = (message) =>
  chat.emit(constants.socketEventNewMessage, message);

export const startIo = (server) => {
  io.listen(server);
  chat.use(socketAuth);
  chat.on(constants.socketEventConnection, chatConnect);
};

export default io;
