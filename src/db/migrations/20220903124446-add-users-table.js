const { USERS } = require('../tableNames');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(USERS, {
      userId: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: Sequelize.STRING(20),
      password: Sequelize.STRING(100),
      email: {
        type: Sequelize.STRING(50),
        unique: true,
      },
      isConfirmed: Sequelize.BOOLEAN,
      verificationCode: Sequelize.STRING(40),
    });
  },
  down: (queryInterface) => queryInterface.dropTable(USERS),
};
