const cors = require('cors');

const corsConfig = {
  origin: 'http://localhost:3000',
  allowedHeaders: [
    'Authorization',
    'Cookie',
    'x-access-token',
    'x-api-key',
    'Content-Type',
    'X-Requested-With',
    'Access-Control-Allow-Origin',
    'Accept',
    'Set-Cookie',
    'Connection',
    'apiKey',
  ],
  exposedHeaders: [
    'Authorization',
    'Cookie',
    'x-access-token',
    'x-api-key',
    'Content-Type',
    'X-Requested-With',
    'Access-Control-Allow-Origin',
    'Accept',
    'Set-Cookie',
    'Connection',
    'apiKey',
  ],
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
  credentials: true,
  maxAge: 3600,
};

const corsOptionsDelegate = (req, callback) => {
  const origin = req.header('Origin');

  callback(undefined, {
    ...corsConfig,
    origin,
  });
};

module.exports = cors(corsOptionsDelegate);
