const { BadRequest } = require('../helpers/responses/ErrorResponses');

module.exports = (req, res) => {
  res.sendWithStatus(BadRequest('Not found'));
};
