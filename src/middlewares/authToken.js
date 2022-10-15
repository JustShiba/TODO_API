const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const { Forbidden } = require('../helpers/responses/ErrorResponses');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return next(Forbidden('Unauthorized', StatusCodes.UNAUTHORIZED));

    req.user = jwt.verify(token, process.env.SECRET);

    next();
  } catch (err) {
    next(err);
  }
};
