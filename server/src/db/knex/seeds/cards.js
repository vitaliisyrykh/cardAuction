import {getCharacters} from "rickmortyapi";
const cards = async () =>{
    const cards =  await getCharacters();
    const {data} = cards;
    console.log(cards.data.results)

}
cards();

/*exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};*/
