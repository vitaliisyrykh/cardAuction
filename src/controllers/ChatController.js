import ChatService from '../services/ChatService';
import MessageService from '../services/MessageService';
import {
  badRequestError,
  successCreated,
  success,
} from '../utils/resFuncs';

class ChatController{
  async addChatToUser (req,res,next){
    const {params:{userId}}=req;
    try {
      const addedChatUser = await ChatService.addChatToUser(userId);
      if(addedChatUser){
        return success(res, addedChatUser)
      }return badRequestError(res,'Cannot add chat to user');
    } catch (error) {
      next(error)
    }
  }
  async saveMessage(req,res,next){
    const {params:{userId,chatId},body}=req;
    try {
      const savedMessage = await MessageService.save(userId,chatId,body);
      if(savedMessage){
        return successCreated(res, savedMessage);
      }return badRequestError(res, 'cannot save message')
    } catch (error) {
      next(error)
    }
  }
}

export default new ChatController();