const Joi = require('joi');
const { passwordPattern } = require('../../constants');

module.exports = {
  signUp: {
    body: Joi.object().keys({
      email: Joi.string().email({ minDomainSegments: 2 }).required(),
      password: Joi.string().min(5).max(20).regex(passwordPattern)
        .required(),
      username: Joi.string().min(1).max(20).required(),
    }),
  },
  signIn: {
    body: Joi.object().keys({
      email: Joi.string().email({ minDomainSegments: 2 }).required(),
      password: Joi.string().min(5).max(20).regex(passwordPattern)
        .required(),
    }),
  },
};
