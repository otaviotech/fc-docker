/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable('people', (table) => {
    table.increments('id');
    table.text('name');
  });

  return knex.table('people').insert({ name: 'Otávio Araújo' });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('people');
};
