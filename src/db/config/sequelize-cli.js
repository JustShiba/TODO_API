require('dotenv').config();

const dbConfig = {
  username: process.env.PSQL_USER,
  password: process.env.PSQL_PASSWORD,
  database: process.env.PSQL_DATABASE,
  host: process.env.PSQL_SERVER,
  port: process.env.PSQL_PORT,
  dialect: 'postgres',
};

console.log('SEQUELIZE CLI CONFIG: ', dbConfig);

module.exports = {
  local: dbConfig,
  development: dbConfig,
  production: dbConfig,
  testing: dbConfig,
};
