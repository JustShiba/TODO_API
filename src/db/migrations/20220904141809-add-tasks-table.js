const { TASKS } = require('../tableNames');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TASKS, {
      taskId: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: Sequelize.INTEGER,
      title: Sequelize.STRING(100),
      description: Sequelize.STRING(255),
      isCompleted: Sequelize.BOOLEAN,
    });
  },
  down: (queryInterface) => queryInterface.dropTable(TASKS),
};
