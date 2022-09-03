const router = require('express').Router();

const { schemaValidator } = require('../validation/utils');
const usersSchema = require('../validation/schemas/users');
const { signUpController } = require('../controllers/usersControllers');

router.post('/signUp', [
  schemaValidator(usersSchema.signUp),
  signUpController,
]);

module.exports = router;
