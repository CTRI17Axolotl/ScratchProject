const express = require('express');

//import Controllers
const usersController = require('../controllers/usersController.js');
// const authController = require('../controllers/authenticationController.js');
const sessionController = require('../controllers/sessionController.js');
const cookieController = require('../controllers/cookieController.js');
//initialize our router
const router = express.Router();

//initializing cookies/session logic authorized routes
router.post(
  '/create',
  // authController.userSignup,
  usersController.createUser, //creates a user
  cookieController.setSSIDCookie, //sets SSID cookie during signup
  sessionController.startSession,
  (req, res) => {
    return res.status(200).json(res.locals.newUser);
  }
);

router.post(
  '/login',
  // authController.userLogin, //verifies/auths the user logging in
  cookieController.setCookie, //sets a cookie for the logging in user
  sessionController.startSession,
  (req, res) => {
    return res.sendStatus(200);
  }
);

//legacy
//at the root path create a user
// router.post('/', usersController.createUser, (req, res) => {
//   return res.status(200).json(res.locals.newUser);
// });
// //with a req.params of name get user from dbController
// router.get('/:name', usersController.getUser, (req, res) => {
//   return res.status(200).send(res.locals.foundUser);
// });

// //patch request with a req.params of name updateUser on the dbController
// router.patch('/:name', usersController.updateUser, (req, res) => {
//   return res.status(200).send(res.locals.updatedUser);
// });

// //router with a request params of name to dbController to deleteUser
// router.delete('/:name', usersController.deleteUser, (req, res) => {
//   return res.status(200).send(res.locals.deletedUser);
// });

module.exports = router;
