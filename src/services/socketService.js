import { Server } from 'socket.io';
import  socketAuth  from '../middlewares/socket';
import MessageService from './MessageService';
import constants from '../constants';
const io = new Server()
export const chat = io.of('/api/chat');

const chatConnect = (socket)=>{
  console.log(socket.id, ' << connect');
  socket.join(constants.socketRoomChat);
  socket.on(constants.socketEventDisconnect, data=>{
    console.log(socket.id,' << disconnect');
  })
};

export const startIo = (server) => {
  io.listen(server)
  //chat.use(socketAuth);
  chat.on(constants.socketEventConnection, chatConnect);
};



export default io;