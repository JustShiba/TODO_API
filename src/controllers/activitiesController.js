const { StatusCodes } = require('http-status-codes');
const ActivitiesService = require('../services/psql/activitiesService');
const { SuccessResponse, ErrorResponse } = require('../helpers/responses');

const allActivitiesController = async (req, res, next) => {
  try {
    const { userId } = req.user;

    const allActivities = await ActivitiesService.getAllByUserId(userId);

    res.send(new SuccessResponse(allActivities));
  } catch (err) {
    next(err);
  }
};

const createActivityController = async (req, res, next) => {
  try {
    const payload = req.body;
    const { userId } = req.user;

    const activityCountForUser = await ActivitiesService.count(
      { where: { userId } },
    );
    if (activityCountForUser >= 15) {
      return next(new ErrorResponse(
        'Max limit of activities reached',
      ));
    }

    const newActivity = await ActivitiesService.add(
      { ...payload, userId },
    );

    res.send(new SuccessResponse(newActivity, StatusCodes.CREATED));
  } catch (err) {
    next(err);
  }
};

const updateActivityController = async (req, res, next) => {
  try {
    const payload = req.body;
    const { activityId } = req.params;
    const { userId } = req.user;

    const activity = await ActivitiesService.getOne(
      { where: { userId, activityId } },
    );
    if (!activity) {
      return next(new ErrorResponse(
        'Such activity for current user doesn\'t exists',
        StatusCodes.NO_CONTENT,
      ));
    }

    const updatedActivity = await activity.update(payload);

    res.send(new SuccessResponse(updatedActivity));
  } catch (err) {
    next(err);
  }
};

const removeActivityController = async (req, res, next) => {
  try {
    const { userId } = req.user;
    const { activityId } = req.params;

    const activity = await ActivitiesService.getOne(
      { where: { userId, activityId } },
    );
    if (!activity) {
      return next(new ErrorResponse(
        'Such activity for current user doesn\'t exists',
        StatusCodes.NO_CONTENT,
      ));
    }

    await activity.destroy();

    res.send(new SuccessResponse('Removed'));
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
