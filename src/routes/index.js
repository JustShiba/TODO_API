const router = require('express').Router();

const authToken = require('../middlewares/authToken');
const authRoutes = require('./auth');
const tasksRoutes = require('./tasks');

router.use('/', authRoutes);

router.use('/tasks', [
  authToken,
  tasksRoutes,
]);

module.exports = router;
