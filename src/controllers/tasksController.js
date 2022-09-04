const { StatusCodes } = require('http-status-codes');
const TasksService = require('../services/psql/tasksService');
const { SuccessResponse, ErrorResponse } = require('../helpers/responses');

const allTasksController = async (req, res, next) => {
  try {
    const { userId } = req.user;

    const allTasks = await TasksService.getAllByUserId(userId);

    res.send(new SuccessResponse(allTasks));
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

    res.send(new SuccessResponse(newTask, StatusCodes.CREATED));
  } catch (err) {
    next(err);
  }
};

const updateTaskController = async (req, res, next) => {
  try {
    const payload = req.body;
    const { taskId } = req.body;
    const { userId } = req.user;

    const task = await TasksService.getOne({ where: { userId, taskId } });
    if (!task) {
      return next(new ErrorResponse(
        'Such task for current user doesn\'t exists',
        StatusCodes.NO_CONTENT,
      ));
    }

    const updatedTask = await task.update(payload);

    res.send(new SuccessResponse(updatedTask));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  allTasksController,
  createTaskController,
  updateTaskController,
};
