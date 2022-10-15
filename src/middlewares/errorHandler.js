/* eslint-disable no-unused-vars */
const { BadRequest } = require('../helpers/responses/ErrorResponses');
const BasicResponse = require('../helpers/responses/BasicResponse');

module.exports = (err, req, res, next) => {
  if (err instanceof BasicResponse) return res.sendWithStatus(err);

  res.sendWithStatus(BadRequest(err.stack || err || 'Unknown error'));
};
