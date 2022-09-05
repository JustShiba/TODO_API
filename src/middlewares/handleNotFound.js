const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../helpers/responses');

module.exports = (req, res) => {
  res.send(new ErrorResponse('Not found', StatusCodes.NOT_FOUND));
};
