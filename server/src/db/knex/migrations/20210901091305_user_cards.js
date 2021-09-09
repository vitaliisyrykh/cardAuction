exports.up = function (knex) {
  return knex.schema.createTable("user_cards", (t) => {
    t.increments("id").notNullable().primary();
    t.integer("buyer_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    t.integer("card_id")
      .unsigned()
      .references("id")
      .inTable("cards")
      .onDelete("CASCADE");
    t.timestamp("created_at", { useTz: true })
      .defaultTo(knex.fn.now())
      .notNullable();
    t.timestamp("updated_at", { useTz: true }).nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user_cards");
};
