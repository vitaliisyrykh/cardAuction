import bookshelf from '../db';

const Raiting = bookshelf.model('Raiting', {
  tableName: 'raitings',
  user () {
    return this.belongsTo('User');
  }
});

export default Raiting;
