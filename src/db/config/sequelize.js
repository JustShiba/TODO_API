const Sequelize = require('sequelize');
const log4js = require('log4js');

const logger = log4js.getLogger();
const queryLogger = log4js.getLogger('SEQUELIZE');

const sequelize = new Sequelize(
  process.env.PSQL_DATABASE,
  process.env.PSQL_USER,
  process.env.PSQL_PASSWORD,
  {
    host: process.env.PSQL_SERVER,
    port: process.env.PSQL_PORT,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: (query) => queryLogger.info(query),
  },
);

sequelize
  .authenticate()
  .then(() => {
    logger.info('Connection to database has been established successfully.');
  })
  .catch((err) => {
    logger.error('Unable to connect to the database:', err);

    process.exit(1);
  });

module.exports = sequelize;
