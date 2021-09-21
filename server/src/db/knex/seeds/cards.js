const {getCharacters} = require('rickmortyapi')


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cards')
      .then(function (){
          const cards = async () => {
              const {data} = await getCharacters();
              const cards = data.results.map(c=>{
                  return {
                      name: c.name,
                      episode_id: Math.floor(Math.random()*41)+1,
                      gender_id: Math.floor(Math.random() *4)+1,
                      origin:c.origin,
                      type: c.type,
                      image: c.image,
                      url: c.url
                  }
              })
              return cards
          }
          return cards()
      })
    .then(function (cards) {
        return knex('cards').insert(cards);
    });
};
