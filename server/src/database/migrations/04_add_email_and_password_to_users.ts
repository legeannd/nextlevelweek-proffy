import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('users', table => {
    table.string('email').notNullable().defaultTo('');
    table.string('password').notNullable().defaultTo('');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('users', table => {
    table.dropColumn('email');
    table.dropColumn('password');
  });
}

