exports.up = function (knex) {
  return knex.schema.createTable("users", (t) => {
    t.increments("id").notNullable().primary();
    t.string("name").notNullable();
    t.string("password_hash").notNullable();
    t.text("email").notNullable().unique();
    t.timestamp("created_at", { useTz: true })
      .defaultTo(knex.fn.now())
      .notNullable();
    t.timestamp("updated_at", { useTz: true });
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
