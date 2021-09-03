exports.up = function (knex) {
  return knex.schema.createTable("roles", (t) => {
    t.increments("id").notNullable().primary();
    t.string("name").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("roles");
};
