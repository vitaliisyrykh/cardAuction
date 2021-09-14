exports.up = function (knex) {
  return knex.schema.createTable("chats", (t) => {
    t.increments("id").notNullable().primary();
    t.timestamp("created_at", { useTz: true })
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("chats");
};
