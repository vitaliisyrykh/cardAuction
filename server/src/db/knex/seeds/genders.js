
exports.seed = function(knex) {
    return knex('genders').del()
    .then(function () {

      return knex('genders').insert([
        {type: 'Female'},
        {type: 'Male'},
        {type: 'Genderless'},
        {type: 'unknown'}
      ]);
    });
};
