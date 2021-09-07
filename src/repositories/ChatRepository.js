import ChatModel from '../models/ChatModel';
import UserModel from '../models/UserModel';

class ChatRepository {
  async addChatToUser (userId,chatId){
    try {
      if(chatId){
        const createdChat = await new ChatModel({id:chatId})
        const addedChatToUser = await new UserModel({id:userId}).chats().attach(createdChat);
        return addedChatToUser.relatedData;   
      } const createdChat = await new ChatModel().save(null,{method:'insert'});
        const addedChatToUser = await new UserModel({id:userId}).chats().attach(createdChat);
        return addedChatToUser.relatedData; 
    } catch (error) {
      
      return error
    }
  }
  async findAllUserChats(userId){
    try {
      const chats = await new UserModel({id:userId}).fetch({withRelated:['chats']});
      return chats.relations.chats.map(m=>m.attributes);
    } catch (error) {
      console.log(error);
      return error
    }
  }
  async findOne (chatId){
    try {
      const chat = await new ChatModel({id:chatId}).fetch({withRelated:'messages'});
      return chat;
    } catch (error) {
      console.log(error);
      return (error)
    }
  }
}

export default new ChatRepository();