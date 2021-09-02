
exports.up = function(knex) {
  return knex.schema.createTable('episodes',t=>{
    t.increments('id')
      .notNullable()
      .primary();
    t.string('name').notNullable().unique();
    t.string('air_date').notNullable();
    t.string('cards').nullable();
    t.string('url').notNullable().unique();
    t.timestamp('created_at', {useTz:true}).defaultTo(knex.fn.now()).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('episodes')
};
