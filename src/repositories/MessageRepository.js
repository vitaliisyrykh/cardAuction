import MessageModel from '../models/MessageModel';
import ChatModel from '../models/ChatModel';

class MessageRepository{
  async save(userId,chatId,bodyMessage){
    try {
      const savedMessage = await new MessageModel({
        user_id:userId,
        chat_id:chatId,
        body:bodyMessage,
      }).save(null,{method:'insert'});
      return savedMessage;
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async findAllChatMessages(chatId){
    try {
      const messages = await new ChatModel({id:chatId}).fetch({withRelated:'messages'});
      return messages.relations.messages.map(m=>m.attributes);
    } catch (error) {
      console.log(error);
      return error
    }
  }
}
export default new MessageRepository();