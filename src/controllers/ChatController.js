import ChatService from '../services/ChatService';
import MessageService from '../services/MessageService';
/* import {
  badRequestError,
  successCreated,
  success,
} from '../utils/resFuncs'; */
import { io } from '../index';
import constants from '../constants';
import ChatRepository from '../repositories/ChatRepository';
import { BadRequest } from 'http-errors';
class ChatController{
  async addChatToUser (req,res,next){
    const {params:{userId}}=req;
    try {
      const addedChatUser = await ChatService.addChatToUser(userId);
      if(addedChatUser){
        //return success(res, addedChatUser)
      }//return badRequestError(res,'Cannot add chat to user');
    } catch (error) {
      next(error)
    }
  }
 /*  async saveMessage(req,res,next){
    const {params:{userId,chatId},body}=req;
    try {
      const savedMessage = await MessageService.save(userId,chatId,body);
      if(savedMessage){
        return successCreated(res, savedMessage);
      }return badRequestError(res, 'cannot save message')
    } catch (error) {
      next(error)
    }
  } */
  async findOne(req,res,next){
    const {params:{chatId,userId}}=req;
    const connections = []
    io.sockets.on(constants.socketEventConnection, socket=>{
      console.log(`${constants.socketEventConnection} ${userId}`);
      connections.push(socket);

      socket.on(constants.socketEventDisconnect, data=>{
        connections.splice(connections.indexOf(socket), 1)
        console.log(`${constants.socketEventDisconnect} ${userId}`);
      });

      socket.on('send message',async data=>{
        try {
          const savedMessage = await MessageService.save(userId,chatId,data);
          io.emit(constants.socketEventNewMessage,savedMessage);
        } catch (error) {
          console.log(error);
          io.emit(constants.socketEventNewMessageError, error)
        }
      })
    })
    try {
      const chat = await ChatRepository.findOne(chatId);
      res.send(chat)
    } catch (error) {
      
      console.log(error);
    }
  };

  async findAllUserChats (req, res, next) {
    const {params:{userId}}=req;
    try {
      const chats = await ChatService.findAllUserChats(userId);
      if(chats){
        return res.send(chats)
        //return success(res,chats);
      }return notFound(res, "chats not found");
    } catch (error) {
      next(error);
    }
  }
  
  
}

export default new ChatController();