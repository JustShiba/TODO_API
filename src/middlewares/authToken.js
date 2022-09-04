const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../helpers/responses');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return next(new ErrorResponse('Unauthorized', StatusCodes.UNAUTHORIZED));

    req.user = jwt.verify(token, process.env.SECRET);

    next();
  } catch (err) {
    next(err);
  }
};
