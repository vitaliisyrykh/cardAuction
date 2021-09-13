exports.up = function (knex) {
  return knex.schema
    .createTable("auctions", (t) => {
      t.increments("id").notNullable().primary();
      t.integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      t.integer("user_cards_id")
        .unsigned()
        .references("id")
        .inTable("user_cards")
        .onDelete("CASCADE");
      t.decimal("min_bet", 13, 4).notNullable();
      t.decimal("max_bet", 13, 4).notNullable();
      t.decimal("min_step", 13, 4).notNullable();
      t.date("max_time_bidding").notNullable();
      t.date("min_step_add_time").notNullable();
      t.timestamp("created_at", { useTz: true })
        .defaultTo(knex.fn.now())
        .notNullable();
      t.timestamp("updated_at", { useTz: true }).nullable;
    })
    .createTable("bets", (t) => {
      t.increments("id").notNullable().primary();
      t.integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      t.integer("auction_id")
        .unsigned()
        .references("auctions.id")
        .onDelete("CASCADE");
      t.decimal("value", 13, 4).notNullable();
      t.timestamp("created_at", { useTz: true })
        .defaultTo(knex.fn.now())
        .notNullable();
      t.timestamp("updated_at", { useTz: true }).nullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("bets").dropTable("auctions");
};
