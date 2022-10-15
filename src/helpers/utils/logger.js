const log4js = require('log4js');

const logger = log4js.getLogger('GENERAL');
const psqlLogger = log4js.getLogger('SEQUELIZE');

logger.level = 'info';
psqlLogger.level = 'info';

module.exports = {
  logger,
  psqlLogger,
};
