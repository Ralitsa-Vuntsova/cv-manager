import Knex from 'knex';
import knexConfig from './knexfile';
import { Model } from 'objection';
import { UserModel } from './models/user';

async function objectionExample() {
  const knexClient = Knex(knexConfig.development);
  Model.knex(knexClient);

  try {
    const newUser = await UserModel.query()
      .insert({ first_name: 'Aleksandur', last_name: 'Aleksandrov', username: 'aleksandur_aleksandrov', password: 'password4', email: 'aleksandur_aleksandrov@gmail.com' });

    console.log(newUser);
  } finally {
    await knexClient.destroy();
  }
}

objectionExample()
  .then(() => { console.log('Done!'); })
  .catch((err) => { console.error('Error: ', err); });