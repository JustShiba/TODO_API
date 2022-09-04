const { ACTIVITIES } = require('../tableNames');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(ACTIVITIES, {
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
    });
  },
  down: (queryInterface) => queryInterface.dropTable(ACTIVITIES),
};
