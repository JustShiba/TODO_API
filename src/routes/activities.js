const router = require('express').Router();

const { schemaValidator } = require('../validation/utils');
const { activitiesSchema } = require('../validation/schemas');
const {
  allActivitiesController,
  createActivityController,
  updateActivityController,
  removeActivityController,
} = require('../controllers/activitiesController');

router.get('/', allActivitiesController);
router.post('/', [
  schemaValidator(activitiesSchema.createActivity),
  createActivityController,
]);
router.patch('/', [
  schemaValidator(activitiesSchema.updateActivity),
  updateActivityController,
]);
router.delete('/', [
  schemaValidator(activitiesSchema.removeActivity),
  removeActivityController,
]);

module.exports = router;
