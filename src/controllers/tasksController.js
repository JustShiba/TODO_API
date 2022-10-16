const TasksService = require('../services/psql/tasksService');
const { Success, Created } = require('../helpers/responses/SuccessResponses');
const { BadRequest } = require('../helpers/responses/ErrorResponses');

const allTasksController = async (req, res, next) => {
  try {
    const { userId } = req.user;

    const allTasks = await TasksService.getAllByUserId(userId);

    res.sendWithStatus(Success(allTasks));
  } catch (err) {
    next(err);
  }
};

const createTaskController = async (req, res, next) => {
  try {
    const payload = req.body;
    const { userId } = req.user;

    const newTask = await TasksService.add(
      { ...payload, userId, isCompleted: false },
    );

    res.sendWithStatus(Created(newTask));
  } catch (err) {
    next(err);
  }
};

const updateTaskController = async (req, res, next) => {
  try {
    const payload = req.body;
    const { taskId } = req.params;
    const { userId } = req.user;

    const task = await TasksService.getOne({ where: { userId, taskId } });
    if (!task) return next(BadRequest('Such task for current user doesn\'t exists'));

    const updatedTask = await task.update(payload);

    res.sendWithStatus(Success(updatedTask));
  } catch (err) {
    next(err);
  }
};

const removeTaskController = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { taskId } = req.params;

    const task = await TasksService.getOne({ where: { userId, taskId } });
    if (!task) return next(BadRequest('Such task for current user doesn\'t exists'));

    await task.destroy();

    res.sendWithStatus(Success('Removed'));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  allTasksController,
  createTaskController,
  updateTaskController,
  removeTaskController,
};
