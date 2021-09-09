exports.up = function (knex) {
  return knex.schema.createTable("refresh_tokens", (t) => {
    t.increments("id").notNullable().primary();
    t.integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    t.string("value");
    t.timestamp("created_at", { useTz: true })
      .defaultTo(knex.fn.now())
      .notNullable();
    t.timestamp("updated_at", { useTz: true }).nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("refresh_tokens");
};
