const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const BasicResponse = require('./BasicResponse');

class ErrorResponses extends BasicResponse {
  constructor(
    message = ReasonPhrases.BAD_REQUEST,
    code = StatusCodes.BAD_REQUEST,
  ) {
    super({
      code,
      message,
    });
  }

  BadRequest = (message) => {
    this.message = message || ReasonPhrases.BAD_REQUEST;
    this.status = StatusCodes.BAD_REQUEST;

    return this;
  };

  Forbidden = (message) => {
    this.message = message || ReasonPhrases.FORBIDDEN;
    this.status = StatusCodes.FORBIDDEN;

    return this;
  };

  NoContent = (message) => {
    this.message = message || ReasonPhrases.NO_CONTENT;
    this.status = StatusCodes.NO_CONTENT;

    return this;
  };

  ServerError = (message) => {
    this.message = message || ReasonPhrases.INTERNAL_SERVER_ERROR;
    this.status = StatusCodes.INTERNAL_SERVER_ERROR;

    return this;
  };

  Unauthorized = (message) => {
    this.message = message || ReasonPhrases.UNAUTHORIZED;
    this.status = StatusCodes.UNAUTHORIZED;

    return this;
  };

  NotFound = (message) => {
    this.message = message || ReasonPhrases.NOT_FOUND;
    this.status = StatusCodes.NOT_FOUND;

    return this;
  };
}

module.exports = new ErrorResponses();
