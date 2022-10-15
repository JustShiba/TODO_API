const apiKey = require('./apiKey');
const setupCors = require('./setupCors');
const errorHandler = require('./errorHandler');
const sendWithStatus = require('./sendWithStatus');

module.exports = {
  apiKey,
  setupCors,
  errorHandler,
  sendWithStatus,
};
