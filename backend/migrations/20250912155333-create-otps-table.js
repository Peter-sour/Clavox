// db/migrations/20250912155333-create-otps-table.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('otps', function(table) {
    table.increments('id').primary();
    table.string('email', 255).notNullable();
    table.string('username', 255).notNullable();
    table.string('otp_code', 10).notNullable();
    table.timestamp('expires_at').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('otps');
};