const bcrypt = require('bcryptjs');
const { SuccessResponse, ErrorResponse } = require('../helpers/responses');
const UsersService = require('../services/psql/usersService');
const generateAccessToken = require('../helpers/utils/generateAccessToken');

const signUpController = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;

    const isDuplicatedEmail = await UsersService.getOneByField('email', email);
    if (isDuplicatedEmail) return next(new ErrorResponse('Such email already exists'));

    const hash = await bcrypt.hash(password, parseInt(process.env.SALT, 10));
    await UsersService.add({ email, username, password: hash });

    res.send(new SuccessResponse('User added'));
  } catch (err) {
    next(err);
  }
};

const signInController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await UsersService.getOneByField('email', email);
    if (!user) return next(new ErrorResponse('No such user'));
    const { userId, username } = user || {};

    const isCorrectPassword = await bcrypt.compareSync(password, user.password);
    if (!isCorrectPassword) return next(new ErrorResponse('Password is incorrect'));

    const token = generateAccessToken(username, userId);

    res.send(new SuccessResponse({ token }));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signUpController,
  signInController,
};
