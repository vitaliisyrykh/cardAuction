exports.up = function (knex) {
  return knex.schema.createTable('messages', t => {
    t.increments('id')
      .notNullable()
      .primary();
    t.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    t.integer('chat_id')
      .unsigned()
      .references('id')
      .inTable('chats')
      .onDelete('CASCADE');
    t.text('body').notNullable();
    t.boolean('isRead')
      .defaultTo(false)
      .notNullable();
    t.timestamp('created_at', { useTz: true })
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('messages');
};
