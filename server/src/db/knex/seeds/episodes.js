const {getEpisodes} = require('rickmortyapi');

exports.seed = function (knex) {
    return knex('episodes')
        .then(() => {
            const episodes = async () => {
                const {data} = await getEpisodes();
                const episodes = data.results.map(e => {
                    return {
                        name: e.name,
                        air_date: e.air_date,
                        url: e.url
                    }
                })
                return episodes;
            }
            return episodes()
        })
        .then(function (data) {

            return knex('episodes').insert(data);
        })};

