const {getLocations} = require('rickmortyapi');
exports.seed = function(knex) {
    return knex('locations')
      .then(function (){
          const locations = async () => {
              const {data} = await getLocations();
              const locations = data.results.map(l=>{
                  return {
                      card_id: Math.floor(Math.random() * 671) +1,
                      name: l.name,
                      type: l.type,
                      dimension: l.dimension,
                      url:l.url
                  }
              })
              return locations
          }
          return locations()
      })
      .then(function (locations) {
        return knex('locations').insert(locations);
    });
};
