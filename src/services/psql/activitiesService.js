const ModelService = require('./modelService');
const ActivitiesModel = require('../../db/models/activitiesModel');

class ActivitiesService extends ModelService {
  constructor() {
    super(ActivitiesModel);
  }

  getAllByUserId = (userId) => this.get({
    where: { userId },
    order: [['activityId', 'ASC']],
  });
}

module.exports = new ActivitiesService();
