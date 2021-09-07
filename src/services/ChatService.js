import ChatRepository from '../repositories/ChatRepository';

class ChatService {
  addChatToUser(userId){
    return ChatRepository.addChatToUser(userId);
  }
  findAllUserChats(userId){
    return ChatRepository.findAllUserChats(userId);
  }
  findOne(chatId){
    return ChatRepository.findOne(chatId)
  }
}

export default new ChatService()