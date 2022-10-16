const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const UsersService = require('../services/psql/usersService');
const generateAccessToken = require('../helpers/utils/generateAccessToken');
const { Success } = require('../helpers/responses/SuccessResponses');
const { BadRequest } = require('../helpers/responses/ErrorResponses');
// const sendEmail = require('../helpers/utils/sendEmail');

const signUpController = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;

    const isDuplicatedEmail = await UsersService.getOneByField('email', email);
    if (isDuplicatedEmail) return next(BadRequest('Such email already exists'));

    const hash = await bcrypt.hash(password, parseInt(process.env.SALT, 10));
    const verificationCode = uuidv4();
    // sendEmail('email', verificationCode); // TODO: remove hardcode
    await UsersService.add({
      email,
      username,
      password:
      hash,
      isConfirmed: false,
      verificationCode,
    });

    res.sendWithStatus(Success('User added'));
  } catch (err) {
    next(err);
  }
};

const signInController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await UsersService.getOneByField('email', email);
    if (!user) return next(BadRequest('No such user'));
    const { userId, username } = user || {};

    const isCorrectPassword = await bcrypt.compareSync(password, user.password);
    if (!isCorrectPassword) return next(BadRequest('Password is incorrect'));

    const token = generateAccessToken(username, userId);

    res.sendWithStatus(Success({ token }));
  } catch (err) {
    next(err);
  }
};

const verificationController = async (req, res, next) => {
  try {
    const { verificationCode } = req.params;

    res.sendWithStatus(Success({ verificationCode }));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signUpController,
  signInController,
  verificationController,
};
