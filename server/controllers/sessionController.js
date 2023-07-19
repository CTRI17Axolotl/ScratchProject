const Session = require('../models/sessionModel');

const User = require('../models/userModel');

const sessionController = {};

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `sessionController.${method} ${type}: ERROR: ${
      typeof err === 'object' ? JSON.stringify(err) : err
    }`,
    message: {
      err: `Error occurred in sessionController.${method}. Check server logs for more details.`,
    },
  };
};

sessionController.isLoggedIn = async (req, res, next) => {
  try {
    const { username } = req.body;
    const storedUser = await User.findOne({ username });
    const newSesh = Session.create({
      cookieId: `${username._id}`,
    });
    if (username !== storedUser.username) {
      res.redirect('/signup');
    } else {
      res.redirect('/signup');
    }
    next();
  } catch (err) {
    return next(
      createErr({
        method: 'isLoggedIn',
        type: 'ERROR: Check server logs for details',
        err,
      })
    );
  }
};

//Start Session- Create and save a new session into the database

sessionController.startSession = async (req, res, next) => {
  try {
    const { username } = req.body;
    const storedUser = await User.findOne({ username });
    const newSesh = Session.create({
      cookieId: `${username._id}`,
    });
    return next();
  } catch (err) {
    return next(
      createErr({
        method: 'startSession',
        type: 'ERROR: Check server logs for details',
        err,
      })
    );
  }
};

module.exports = sessionController;
