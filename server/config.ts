import convict from 'convict';
import { config as envConfig } from 'dotenv';
envConfig();

const config = convict ({
  db: {
    host: {
      doc: 'DB Host',
      env: 'DB_HOST',
      format: String,
      default: 'localhost'
    },
    port: {
      doc: 'DB Port',
      env: 'DB_PORT',
      format: 'port',
      default: 5432
    },
    user: {
      doc: 'DB User',
      env: 'DB_USER',
      default: '<username>'
    },
    password: {
      doc: 'DB Password',
      env: 'DB_PASSWORD',
      default: '<password>'
    },
    database: {
      doc: 'DB Name',
      env: 'DB_NAME',
      default: 'cv_manager'
    }
  }
});

config.validate();

export { config };