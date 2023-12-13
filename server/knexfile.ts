// Update with your config settings.

import { knexSnakeCaseMappers } from 'objection';
import { config } from './config';

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const knexConfig = {
  development: {
    client: 'postgresql',
    connection: config.get('db'),
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    ...knexSnakeCaseMappers()
  }
};

export default knexConfig;