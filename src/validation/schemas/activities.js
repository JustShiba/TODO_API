const Joi = require('joi');
const { hexColorPattern } = require('../../constants');

module.exports = {
  createActivity: {
    body: Joi.object().keys({
      title: Joi.string().min(1).max(100).required(),
      description: Joi.string().min(1).max(255).optional(),
      color: Joi.string().max(7).regex(hexColorPattern).optional(),
      completionStatus: Joi.string().min(1).max(100).optional(),
    }),
  },
  updateActivity: {
    body: Joi.object().keys({
      activityId: Joi.number().required(),
      title: Joi.string().min(1).max(100).optional(),
      description: Joi.string().min(1).max(255).optional(),
      color: Joi.string().max(7).regex(hexColorPattern).optional(),
      completionStatus: Joi.string().min(1).max(100).optional(),
    }).min(2),
  },
  removeActivity: {
    body: Joi.object().keys({
      activityId: Joi.number().required(),
    }),
  },
};
