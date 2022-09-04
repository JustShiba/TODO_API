const jwt = require('jsonwebtoken');

const generateAccessToken = (username, id) => {
  const payload = {
    username,
    id,
  };

  return jwt.sign(payload, process.env.SECRET);
};

module.exports = generateAccessToken;
