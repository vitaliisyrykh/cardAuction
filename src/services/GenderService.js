import GenderRepository from '../repositories/GenderRepository';

class GenderService {
  crete(body){
    return GenderRepository.create(body)
  }
  fundAll(){
    return GenderRepository.findAll();
  }
}

export default new GenderService();