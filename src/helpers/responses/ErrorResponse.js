const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const BasicResponse = require('./BasicResponse');

class ErrorResponse extends BasicResponse {
  constructor(
    message = ReasonPhrases.BAD_REQUEST,
    code = StatusCodes.BAD_REQUEST,
  ) {
    super({
      code,
      message,
    });
  }
}

module.exports = ErrorResponse;
