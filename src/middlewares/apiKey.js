const { ErrorResponse } = require('../helpers/responses');

module.exports = (req, res, next) => {
  const apiKey = req.header('apikey');
  if (!apiKey) return res.send(new ErrorResponse('Required apikey.'));
  if (apiKey !== process.env.API_AUTH_KEY) return res.send(new ErrorResponse('Invalid apikey'));

  next();
};
