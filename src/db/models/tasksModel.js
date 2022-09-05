const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const { TASKS } = require('../tableNames');

const UsersModel = sequelize.define(
  TASKS,
  {
    taskId: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: Sequelize.INTEGER,
    title: Sequelize.STRING(100),
    description: Sequelize.STRING(255),
    isCompleted: Sequelize.BOOLEAN,
  },
  {
    paranoid: false,
    timestamps: false,
  },
);

module.exports = UsersModel;
