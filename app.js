const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

const { setupCors, apiKey, errorHandler, sendWithStatus } = require('./src/middlewares');
const routes = require('./src/routes');
const { morganPattern } = require('./src/constants');
const handleNotFound = require('./src/middlewares/handleNotFound');
const mainTemplate = require('./src/public/template');

app.use([
  setupCors,
  helmet(),
  compression({ level: 6 }),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  morgan(morganPattern),
  sendWithStatus,
  mainTemplate,
]);

app.use('/', [
  apiKey,
  routes,
  errorHandler,
]);

app.use(handleNotFound);

module.exports = app;
