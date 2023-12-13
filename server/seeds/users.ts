import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').delete();

  // Inserts seed entries
  await knex('users').insert([
    { first_name: 'Ivan', last_name: 'Ivanov', username: 'ivan_ivanov', password: 'password1', email: 'ivan_ivanov@gmail.com' },
    { first_name: 'Petur', last_name: 'Petrov', username: 'petur_petrov', password: 'password2', email: 'petur_petrov@gmail.com' },
    { first_name: 'Georgi', last_name: 'Georgiev', username: 'georgi_georgiev', password: 'password3', email: 'georgi_georgiev@gmail.com' }
  ]);
};