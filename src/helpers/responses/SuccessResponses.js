const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const BasicResponse = require('./BasicResponse');

class SuccessResponses extends BasicResponse {
  constructor(
    response = '',
    code = StatusCodes.OK,
    message = 'Success',
  ) {
    super({
      code,
      message,
      response,
    });
  }

  Success = (response) => {
    this.response = response || '';
    this.message = ReasonPhrases.OK;
    this.status = StatusCodes.OK;

    return this;
  };

  Created = (response) => {
    this.response = response;
    this.message = ReasonPhrases.CREATED;
    this.status = StatusCodes.CREATED;

    return this;
  };
}

module.exports = new SuccessResponses();
