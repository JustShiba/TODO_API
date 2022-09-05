const router = require('express').Router();

const authToken = require('../middlewares/authToken');
const authRoutes = require('./auth');
const tasksRoutes = require('./tasks');
const activitiesRoutes = require('./activities');

router.use('/', authRoutes);

router.use('/task', [
  authToken,
  tasksRoutes,
]);
router.use('/activity', [
  authToken,
  activitiesRoutes,
]);

module.exports = router;
