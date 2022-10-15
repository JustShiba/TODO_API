require('dotenv').config();
const { logger } = require('../../helpers/utils/logger');

const {
  PSQL_DATABASE,
  PSQL_USER,
  PSQL_PASSWORD,
  PSQL_SERVER,
  PSQL_PORT,
  NODE_ENV,
} = process.env || {};

const dbConfig = {
  username: PSQL_USER,
  password: PSQL_PASSWORD,
  database: PSQL_DATABASE,
  host: PSQL_SERVER,
  port: PSQL_PORT,
  dialect: 'postgres',
  dialectOptions: NODE_ENV !== 'localhost' ? {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  } : false,
};

logger.info('SEQUELIZE CLI CONFIG: ', dbConfig);

module.exports = {
  local: dbConfig,
  development: dbConfig,
  production: dbConfig,
  testing: dbConfig,
};
