import bookshelf from '../db';
//import SetsCards from './SetsCardsModel';
import UserCards from './UserCardsModel';

const CardsModel = bookshelf.model('Card', {
  tableName: 'cards',
  episode () {
    return this.belongsTo('Episode');
  },
  locations () {
    return this.hasMany('Location');
  },
  users () {
    return this.belongsToMany('User').through(UserCards);
  },
  /* sets () {
    return this.belongsToMany('Set').through(SetsCards);
  }, */
  gender () {
    return this.belongsTo('Gender');
  }
});

export default CardsModel;
