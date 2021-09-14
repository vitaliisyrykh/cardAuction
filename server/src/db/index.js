const knex = require("knex");
const knexFile = require("./knexfile");
import bookshelf from "bookshelf";

const db = knex(knexFile.development);

export default bookshelf(db);
