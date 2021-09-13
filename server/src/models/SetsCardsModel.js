import bookshelf from '../db';

const SetsCards = bookshelf.model('SetsCards',{
  tableName:'sets_cards',
  card(){
    return this.belongsTo('Card')
  },
  set(){
    return this.belongsTo('Set')
  }
})

export default SetsCards;