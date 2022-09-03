const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const { USERS } = require('../tableNames');

const UsersModel = sequelize.define(
  USERS,
  {
    userId: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    username: Sequelize.STRING(20),
    password: Sequelize.STRING(20),
    email: {
      type: Sequelize.STRING(50),
      unique: true,
    },
  },
  {
    paranoid: false,
    timestamps: false,
  },
);

module.exports = UsersModel;
