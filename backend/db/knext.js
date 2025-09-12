const knex = require("knex");
const config = require("../knextfile");

const db = knex(config.development);

module.exports = db;
