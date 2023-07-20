const User = require('../models/userModel');
const cookieController = {};

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `cookieController.${method} ${type}: ERROR: ${
      typeof err === 'object' ? JSON.stringify(err) : err
    }`,
    message: {
      err: `Error occurred in cookieController.${method} Check server logs for more details.`,
    },
  };
};

//Set Cookie
cookieController.setCookie = (req, res, next) => {
  const randomNumber = Math.floor(Math.random() * 100);

  res.cookie('FloppyCookie', 'SeaSpider');
  // res.cookie('SecondFloppy', randomNumber);
  console.log('Bam Cookie Made ');
  next();
};

//Set SSID Cookie to store user id in a cookie

cookieController.setSSIDCookie = async (req, res, next) => {
  try {
    console.log('Entered SSIDCookie Controller');
    //deconstruct request body username
    const { username } = req.body;

    //store the found user on a variable
    const storedUser = await User.findOne({ username });
    console.log(storedUser._id);

    //set the cookie
    res.cookie('ssid', storedUser._id);

    next();
  } catch (err) {
    return next(
      createErr({
        method: 'setSSIDCookie',
        type: 'ERROR: Check server logs for details',
        err,
      })
    );
  }
};

module.exports = cookieController;
