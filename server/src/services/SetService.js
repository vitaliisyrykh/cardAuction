import SetRepositoty from '../repository/SetRepositoty';

class SetService {
  createdSet (body) {
    return SetRepositoty(body);
  }
  addCardToSet (setId, cardId) {
    return SetRepositoty.addCardToSet(setId, cardId);
  }
  deleteSet (setId) {
    return SetRepositoty.deleteSet(setId);
  }
  findAllWithCards () {
    return SetRepositoty.findAllWithCards();
  }
}

export default new SetService();
