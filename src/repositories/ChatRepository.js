import ChatModel from '../models/ChatModel';
import UserModel from '../models/UserModel';

class ChatRepository {
  async addChatToUser (userId){
    try {
      
      const createdChat = await new ChatModel().save(null,{method:'insert'});
      const addedChatToUser = await new UserModel({id:userId}).chats().attach(createdChat);
      return addedChatToUser.relatedData; 
    } catch (error) {
      return error
    }
  }
  async findAllUserChats(userId){
    try {
      const chats = await new UserModel({id:userId}).fetch({withRelated:['chats']});
      console.log(chats.relations.chats.map(m=>m.attributes));
    } catch (error) {
      return error
    }
  }
}
const cr = new ChatRepository();
cr.findAllUserChats(6)

export default new ChatRepository();