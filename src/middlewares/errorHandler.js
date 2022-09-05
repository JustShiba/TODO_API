const { ErrorResponse, BasicResponse } = require('../helpers/responses');

module.exports = (err, req, res, next) => {
  if (err instanceof BasicResponse) {
    return res.send(err);
  }
  res.send(new ErrorResponse(err.message || 'Unknown error'));
  next();
};
