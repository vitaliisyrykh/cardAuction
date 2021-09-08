import MessageRepository from '../repositories/MessageRepository';

class MessageService {
    save(body){
      return MessageRepository.save(body)
    }
    findAll(){
      return MessageRepository.findAll();
    }
};

export default new MessageService();

