exports.up = function (knex) {
  return knex.schema.createTable('users_chats', t => {
    t.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    t.integer('chats_id')
      .unsigned()
      .references('id')
      .inTable('chats')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users_chats');
};
