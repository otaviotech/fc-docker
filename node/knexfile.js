// Update with your config settings.

const AppEnv = require('./src/env');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: AppEnv.PG_URL,
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
