const jwt = require('jsonwebtoken');

const generateAccessToken = (username, userId) => {
  const payload = {
    username,
    userId,
  };

  return jwt.sign(payload, process.env.SECRET);
};

module.exports = generateAccessToken;
