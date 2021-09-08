import MessageService from '../services/MessageService';
/* import {
  badRequestError,
  successCreated,
  success,
} from '../utils/resFuncs'; */

import constants from '../constants';
import {chat} from '../services/socketService'
//import io from 'socket.io'
class ChatController{
  async newMessage (req,res,next){
    try {
      const savedMessage = await MessageService.save(req.body)
      
      chat.emit(constants.socketEventNewMessage, savedMessage)
      res.status(200).end()
    } catch (error) {
      next(error)
    }
  }

  async findAll (req,res,next){
    try {
      const messages = await MessageService.findAll();
      if(messages.length !== 0){
        return res.send(messages)
      }
    } catch (error) {
      next(error)
    }
  }
  
}

export default new ChatController();