exports.up = function (knex) {
  return knex.schema.createTable("sets", (t) => {
    t.increments("id").notNullable().primary();
    t.decimal("score", 2.1).notNullable();
    t.string("name").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("sets");
};
