const router = require('express').Router();

const { schemaValidator } = require('../validation/utils');
const { tasksSchema } = require('../validation/schemas');
const {
  createTaskController,
  updateTaskController,
  allTasksController,
  removeTaskController,
} = require('../controllers/tasksController');

router.get('/', allTasksController);
router.post('/', [
  schemaValidator(tasksSchema.createTask),
  createTaskController,
]);
router.patch('/', [
  schemaValidator(tasksSchema.updateTask),
  updateTaskController,
]);
router.delete('/', [
  schemaValidator(tasksSchema.removeTask),
  removeTaskController,
]);

module.exports = router;
