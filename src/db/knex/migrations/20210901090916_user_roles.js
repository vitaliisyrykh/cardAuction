exports.up = function (knex) {
  return knex.schema.createTable('user_roles', t => {
    t.increments('id')
      .notNullable()
      .primary();
    t.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    t.integer('role_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('roles')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('user_roles');
};
