const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const { ACTIVITIES } = require('../tableNames');

const UsersModel = sequelize.define(
  ACTIVITIES,
  {
    activityId: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: Sequelize.INTEGER,
    title: Sequelize.STRING(100),
    description: Sequelize.STRING(255),
    color: Sequelize.STRING(7),
    completionStatus: Sequelize.STRING(100),
  },
  {
    paranoid: false,
    timestamps: false,
  },
);

module.exports = UsersModel;
