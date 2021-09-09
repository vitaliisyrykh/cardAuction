exports.up = function (knex) {
  return knex.schema.createTable('sets_cards', t => {
    t.integer('set_id')
      .unsigned()
      .references('id')
      .inTable('sets')
      .onDelete('CASCADE');
    t.integer('card_id')
      .unsigned()
      .references('id')
      .inTable('cards')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('sets_cards');
};
