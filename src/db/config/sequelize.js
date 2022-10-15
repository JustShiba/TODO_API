const Sequelize = require('sequelize');
const { psqlLogger, logger } = require('../../helpers/utils/logger');

const {
  PSQL_DATABASE,
  PSQL_USER,
  PSQL_PASSWORD,
  PSQL_SERVER,
  PSQL_PORT,
} = process.env || {};

const sequelize = new Sequelize(
  PSQL_DATABASE,
  PSQL_USER,
  PSQL_PASSWORD,
  {
    host: PSQL_SERVER,
    port: PSQL_PORT,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: (query) => psqlLogger.info(query),
  },
);

sequelize
  .authenticate()
  .then(() => {
    logger.info(
      {
        PSQL_DATABASE,
        PSQL_USER,
        PSQL_PASSWORD,
        PSQL_SERVER,
        PSQL_PORT,
      },
    );
    logger.info('Connection to database has been established successfully.');
  })
  .catch((err) => {
    logger.error('Unable to connect to the database:', err);
    logger.info(
      {
        PSQL_DATABASE,
        PSQL_USER,
        PSQL_PASSWORD,
        PSQL_SERVER,
        PSQL_PORT,
      },
    );
    process.exit(1);
  });

module.exports = sequelize;
