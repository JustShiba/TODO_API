const router = require('express').Router();
const { SuccessResponse } = require('../helpers/responses');
const generalRoutes = require('./general');

router.use('/', generalRoutes);
router.get('/hello', (req, res, next) => {
  try {
    res.send(new SuccessResponse('Hello world'));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
