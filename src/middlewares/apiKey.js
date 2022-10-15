const { Forbidden } = require('../helpers/responses/ErrorResponses');

module.exports = (req, res, next) => {
  const apiKey = req.header('apikey');
  if (!apiKey) return res.sendWithStatus(Forbidden('Required apikey.'));
  if (apiKey !== process.env.API_AUTH_KEY) return res.sendWithStatus(Forbidden('Invalid apikey'));

  next();
};
