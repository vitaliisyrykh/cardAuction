import bookshelf from '../db';

const LocationModel = bookshelf.model('Location',{
  tableName:'locations',
  card(){
    return this.belongsTo('Card')
  }
})

export default LocationModel;