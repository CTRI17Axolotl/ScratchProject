const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { generateSecretKey } = require('../utils/helpers');

const authController = {};

//FrontEnd tracking active session
//doesn't need to persist
//adding/removing new fav requires auth
//adding images
//edit

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `authController.${method} ${type}: ERROR: ${
      typeof err === 'object' ? JSON.stringify(err) : err
    }`,
    message: {
      err: `Error occurred in authController.${method}. Check server logs for more details`,
    },
  };
};

const secretKey = generateSecretKey();

const generateAuthToken = (userId) => {
  return jwt.sign({ userId }), secretKey, { expiresIn: '1h' };
};

authController.userLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    //retrieve user data
    const user = await User.findOne({ username });

    if (!user) {
      res.status(400).json({ redirect: '/signup' });
      return;
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = generateAuthToken(user._id);
      res.status(200).json({ token, redirect: '/' });
    } else {
      res.status(400).json({ redirect: '/login' });
    }
  } catch (err) {
    return next(
      createErr({
        method: 'userLogin',
        type: 'login process',
        err,
      })
    );
  }
};

authController.userSignup = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const userExists = await User.findOne({ username });
    if (userExists) {
      res.status(400).json({ redirect: '/login' });
    }

    const newUser = await User.create({ username, password: hashedPassword });

    res.status(200).json({ redirect: '/login' });
  } catch (err) {
    return next(
      createErr({
        method: 'userSignup',
        type: 'creating user',
        err,
      })
    );
  }
};

module.exports = authController;
