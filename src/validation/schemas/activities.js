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
    params: Joi.object().keys(({
      activityId: Joi.number().required(),
    })),
    body: Joi.object().keys({
      title: Joi.string().min(1).max(100).optional(),
      description: Joi.string().min(1).max(255).optional(),
      color: Joi.string().max(7).regex(hexColorPattern).optional(),
      completionStatus: Joi.string().min(1).max(100).optional(),
    }).min(1),
  },
  removeActivity: {
    params: Joi.object().keys(({
      activityId: Joi.number().required(),
    })),
  },
};
