import MessageRepository from '../repositories/MessageRepository';

class MessageService {
  save(userId, chatId, body){
    return MessageRepository.save(userId, chatId, body);
  }
  findAllChatMessages(chatId){
    return MessageRepository.findAllChatMessages(chatId);
  }
};

export default new MessageService();