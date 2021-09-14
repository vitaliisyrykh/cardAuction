import bookshelf from '../db';
import CardModel from './CardModel';

const Gender = bookshelf.model('Gender',{
  tableName:'genders',
  card(){
    return this.belongsTo(CardModel)
  }
})
export default Gender;