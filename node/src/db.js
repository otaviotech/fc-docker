const db = require('knex')({
  client: 'pg',
  connection: process.env.PG_URL,
});

module.exports = db;
