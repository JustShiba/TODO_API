const ActivitiesService = require('../services/psql/activitiesService');
const { Success, Created } = require('../helpers/responses/SuccessResponses');
const { BadRequest } = require('../helpers/responses/ErrorResponses');

const allActivitiesController = async (req, res, next) => {
  try {
    const { userId } = req.user;

    const allActivities = await ActivitiesService.getAllByUserId(userId);

    res.sendWithStatus(Success(allActivities));
  } catch (err) {
    next(err);
  }
};

const createActivityController = async (req, res, next) => {
  try {
    const payload = req.body;
    const { userId } = req.user;

    const activityCountForUser = await ActivitiesService.count({ where: { userId } });
    if (activityCountForUser >= 15) return next(BadRequest('Max limit of activities reached'));

    const newActivity = await ActivitiesService.add({ ...payload, userId });

    res.sendWithStatus(Created(newActivity));
  } catch (err) {
    next(err);
  }
};

const updateActivityController = async (req, res, next) => {
  try {
    const payload = req.body;
    const { activityId } = req.params;
    const { userId } = req.user;

    const activity = await ActivitiesService.getOne({ where: { userId, activityId } });
    if (!activity) return next(BadRequest('Such activity for current user doesn\'t exists'));

    const updatedActivity = await activity.update(payload);

    res.sendWithStatus(Success(updatedActivity));
  } catch (err) {
    next(err);
  }
};

const removeActivityController = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { activityId } = req.params;

    const activity = await ActivitiesService.getOne({ where: { userId, activityId } });
    if (!activity) return next(BadRequest('Such activity for current user doesn\'t exists'));

    await activity.destroy();

    res.sendWithStatus(Success('Removed'));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  allActivitiesController,
  createActivityController,
  updateActivityController,
  removeActivityController,
};
