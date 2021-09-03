exports.up = function (knex) {
  return knex.schema.createTable("locations", (t) => {
    t.increments("id").notNullable().primary();
    t.integer("card_id")
      .unsigned()
      .references("id")
      .inTable("cards")
      .onDelete("CASCADE");
    t.string("name").notNullable().unique();
    t.string("type").notNullable();
    t.string("dimension").notNullable();
    t.text("residents").nullable();
    t.text("url").notNullable().unique();
    t.timestamp("created_at", { useTz: true })
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("locations");
};
