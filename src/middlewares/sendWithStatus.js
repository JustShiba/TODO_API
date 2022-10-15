const { StatusCodes } = require('http-status-codes');
const BasicResponse = require('../helpers/responses/BasicResponse');

module.exports = (req, res, next) => {
  res.sendWithStatus = (payload) => {
    if (payload instanceof BasicResponse) {
      res.status(payload.status).send(payload);
    } else {
      res.status(StatusCodes.OK).send({
        code: StatusCodes.OK,
        message: 'Success',
        response: payload,
      });
    }
  };

  next();
};
