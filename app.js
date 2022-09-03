const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

const { setupCors, apiKey, errorHandler } = require('./src/middlewares');
const routes = require('./src/routes');
const { morganPattern } = require('./src/constants');

app.use([
  setupCors,
  helmet(),
  compression({ level: 6 }),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  morgan(morganPattern),
]);

app.use('/', [apiKey, routes, errorHandler]);

module.exports = app;
