import bookshelf from '../db';

 const Bet = bookshelf.model('Bet', {
  tableName: 'bets',
  user () {
    return this.belongsTo('User');
  },
  auction () {
    return this.belongsTo('Auction');
  }
});

export default Bet;
