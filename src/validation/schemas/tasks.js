const Joi = require('joi');

module.exports = {
  createTask: {
    body: Joi.object().keys({
      title: Joi.string().min(1).max(100).required(),
      description: Joi.string().min(1).max(255).optional(),
    }),
  },
  updateTask: {
    body: Joi.object().keys({
      taskId: Joi.number().required(),
      title: Joi.string().min(1).max(100).optional(),
      description: Joi.string().min(1).max(255).optional(),
      isCompleted: Joi.boolean().optional(),
    }).min(2),
  },
};
