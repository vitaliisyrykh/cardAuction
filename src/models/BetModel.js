import bookshelf from '../db';

export default Bet = bookshelf.model('Bet', {
  tableName: 'bets',
  user () {
    return this.belongsTo('User');
  },
  auction () {
    return this.belongsTo('Auction');
  }
});
