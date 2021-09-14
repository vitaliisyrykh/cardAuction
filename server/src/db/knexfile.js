import constants from "../constants";

module.exports = {
  development: {
    client: constants.client,
    connection: {
      host: constants.host,
      user: constants.dbUser,
      password: constants.password,
      database: constants.base,
      charset: "utf8",
    },
    migrations: {
      directory: __dirname + "/knex/migrations",
    },
    seeds: {
      directory: __dirname + "/knex/seeds",
    },
  },
};
