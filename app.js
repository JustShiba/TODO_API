const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

const setupCors = require('./src/middlewares/setupCors');

app.use([
  setupCors,
  helmet(),
  compression({ level: 6 }),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  morgan("[:date[clf]] :remote-user :method :url :status :res[content-length] - :response-time ms'"),
]);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

module.exports = app;
