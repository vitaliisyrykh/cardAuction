exports.up = function (knex) {
  return knex.schema.createTable("cards", (t) => {
    t.increments("id").notNullable().primary();
    t.integer("episode_id")
      .unsigned()
      .references("id")
      .inTable("episodes")
      .onDelete("CASCADE");
    t.string("type").notNullable();
    t.boolean("status").defaultTo(false).notNullable();
    t.integer("gender_id")
      .unsigned()
      .references("id")
      .inTable("genders")
      .onDelete("CASCADE");
    t.string("name").notNullable().unique();
    t.text("origin").notNullable();
    t.text("image").notNullable();
    t.text("url").notNullable();
    t.timestamp("created_at", { useTz: true })
      .defaultTo(knex.fn.now())
      .notNullable();
    t.timestamp("updated_at", { useTz: true }).nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cards");
};
