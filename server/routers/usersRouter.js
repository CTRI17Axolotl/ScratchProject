const express = require('express');
const User = require('../models/userModel');

//import Controllers
const usersController = require('../controllers/usersController.js');
// const authController = require('../controllers/authenticationController.js');
const sessionController = require('../controllers/sessionController.js');
const cookieController = require('../controllers/cookieController.js');
//initialize our router
const router = express.Router();

router.get('/', async (req, res) => {
  //use User.find to get information from all documents
  try {
    const allUserInfo = await User.find({}, '_id name email favorites');
    res.status(200).json(allUserInfo);
  } catch (err) {
    return `Error in getting all user info: ${err}`;
  }
});

//initializing cookies/session logic authorized routes
router.post(
  '/create',
  // authController.userSignup,
  usersController.createUser, //creates a user
  (req, res) => {
    return res.status(200).json(res.locals.newUser);
  }
);

// myObjectId = ObjectId('507c7f79bcf86cd7994f6c0e');
// myObjectIdString = myObjectId.toString();

router.post(
  '/login',
  usersController.getUser,
  (req, res) => {
    const userId = res.locals.foundUser._id.toString();
    return res.status(200).json(userId);
  }
);

// router.put(
//   '/updateFaves',
//   cookieController.setCookie,
//   sessionController.startSession,
//   usersController.updateFaves
// );
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
