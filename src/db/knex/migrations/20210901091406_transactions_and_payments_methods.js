exports.up = function (knex) {
  return knex.schema
    .createTable('payment_methods', t => {
      t.increments('id')
        .notNullable()
        .primary();
      t.string('type').notNullable();
    })
    .createTable('transactions', t => {
      t.increments('id')
        .notNullable()
        .primary();
      t.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
      t.integer('payment_method_id')
        .unsigned()
        .references('payment_methods.id');
      t.decimal('amount', 13, 4).notNullable();
      t.boolean('is_done')
        .notNullable()
        .defaultTo(false);
      t.timestamp('created_at', { useTz: true })
        .defaultTo(knex.fn.now())
        .notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable('transactions').dropTable('payment_methods');
};
