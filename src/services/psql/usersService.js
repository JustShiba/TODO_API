const ModelService = require('./modelService');
const UsersModel = require('../../db/models/usersModel');

class UsersService extends ModelService {
  constructor() {
    super(UsersModel);
  }
}

module.exports = new UsersService();
