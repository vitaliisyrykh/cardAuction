exports.up = function (knex) {
  return knex.schema.createTable('ratings', t => {
    t.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    t.decimal('value', 4, 1).nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('ratings');
};
