const ModelService = require('./modelService');
const TasksModel = require('../../db/models/tasksModel');

class TasksService extends ModelService {
  constructor() {
    super(TasksModel);
  }

  getAllByUserId = (userId) => this.get({
    where: { userId },
    order: [['taskId', 'ASC']],
  });
}

module.exports = new TasksService();
