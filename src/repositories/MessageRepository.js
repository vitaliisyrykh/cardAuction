import MessageModel from '../models/MessageModel';
import ChatModel from '../models/ChatModel';

class MessageRepository{
  async save(body){
    const{userId,bodyMessage}=body;
    try {
      const savedMessage = await new MessageModel({
        user_id:userId,
        body:bodyMessage,
      }).save(null,{method:'insert'});
      return savedMessage.attributes;
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async findAll(){
    try {
      const messages = await  MessageModel.fetchAll();
      return messages;
    } catch (error) {
      return error
    }
  }
}
export default new MessageRepository();