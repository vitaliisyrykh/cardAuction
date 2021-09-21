exports.up = function (knex) {
  return knex.schema.createTable("genders", (t) => {
    t.increments("id").notNullable();
    t.string("type").notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("genders");
};
