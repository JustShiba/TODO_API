const router = require('express').Router();

const { schemaValidator } = require('../validation/utils');
const { tasksSchema } = require('../validation/schemas');
const {
  createTaskController,
  updateTaskController,
  allTasksController,
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

module.exports = router;
