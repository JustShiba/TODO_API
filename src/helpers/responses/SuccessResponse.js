const { StatusCodes } = require('http-status-codes');
const BasicResponse = require('./BasicResponse');

class SuccessResponse extends BasicResponse {
  constructor(
    response,
    code = StatusCodes.OK,
    message = 'Success',
  ) {
    super({
      code,
      message,
      response,
    });
  }
}

module.exports = SuccessResponse;
