import Knex from "knex";
import knexConfig from './knexfile';

const knexClient = Knex(knexConfig.development);