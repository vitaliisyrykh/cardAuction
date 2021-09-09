import bookshelf from '../db';
import SetsCards from './SetsCardsModel';

const SetModel = bookshelf.model('Set', {
  tableName: 'sets',
  cards () {
    return this.belongsToMany('Card').through(SetsCards);
  }
});

export default SetModel;

