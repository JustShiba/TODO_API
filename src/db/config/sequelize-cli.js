require('dotenv').config();
const { logger } = require('../../helpers/utils/logger');

const dbConfig = {
  username: process.env.PSQL_USER,
  password: process.env.PSQL_PASSWORD,
  database: process.env.PSQL_DATABASE,
  host: process.env.PSQL_SERVER,
  port: process.env.PSQL_PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

logger.info('SEQUELIZE CLI CONFIG: ', dbConfig);

module.exports = {
  local: dbConfig,
  development: dbConfig,
  production: dbConfig,
  testing: dbConfig,
};
