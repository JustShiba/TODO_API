const router = require('express').Router();

const { schemaValidator } = require('../validation/utils');
const { authSchema } = require('../validation/schemas');
const {
  signUpController,
  signInController,
  verificationController,
} = require('../controllers/usersControllers');

router.post('/signUp', [
  schemaValidator(authSchema.signUp),
  signUpController,
]);
router.post('/signIn', [
  schemaValidator(authSchema.signIn),
  signInController,
]);
router.patch('/verification/:verificationCode', [
  schemaValidator(authSchema.verification),
  verificationController,
]);

module.exports = router;
