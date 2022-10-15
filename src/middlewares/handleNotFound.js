const { NotFound } = require('../helpers/responses/ErrorResponses');

module.exports = (req, res) => {
  res.sendWithStatus(NotFound('Not found'));
};
