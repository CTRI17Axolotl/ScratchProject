const express = require('express');

//import Controllers
const usersController = require('../controllers/usersController.js');
const authController = require('../controllers/authenticationController.js');

//initialize our router
const router = express.Router();

//post request for a login page, authController for authenticating users
router.post('/login', authController.userLogin);

//post request router for signup page as well as authenticating users
router.post('/signup', authController.userSignup);

//at the root path create a user
router.post('/', usersController.createUser, (req, res) => {
  return res.status(200).json(res.locals.newUser);
});

//with a req.params of name get user from dbController
router.get('/:name', usersController.getUser, (req, res) => {
  return res.status(200).send(res.locals.foundUser);
});

//patch request with a req.params of name updateUser on the dbController
router.patch('/:name', usersController.updateUser, (req, res) => {
  return res.status(200).send(res.locals.updatedUser);
});

//router with a request params of name to dbController to deleteUser
router.delete('/:name', usersController.deleteUser, (req, res) => {
  return res.status(200).send(res.locals.deletedUser);
});

module.exports = router;
