const { ErrorResponse } = require('../helpers/responses');

module.exports = (err, req, res, next) => {
  res.send(new ErrorResponse(err.message || 'Unknown error'));
  next();
};
