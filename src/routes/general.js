const router = require('express').Router();

const { schemaValidator } = require('../validation/utils');
const usersSchema = require('../validation/schemas/users');
const {
  signUpController,
  signInController,
} = require('../controllers/usersControllers');

router.post('/signUp', [
  schemaValidator(usersSchema.signUp),
  signUpController,
]);
router.post('/signIn', [
  schemaValidator(usersSchema.signIn),
  signInController,
]);

module.exports = router;
